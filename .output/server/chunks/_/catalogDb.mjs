import { i as identityDb } from './identityDb.mjs';
import { c as createError, g as getRouterParam, r as readValidatedBody, e as getValidatedQuery, f as defineCachedFunction } from '../nitro/nitro.mjs';
import sharp from 'sharp';
import { p as pngUploadMaxBytes, a as photoMaxBytes, r as remoteFields } from './catalog.mjs';
import { eq, inArray, sql, getTableColumns, asc, or, and, count, exists } from 'drizzle-orm';
import { z } from 'zod';
import { c as remoteSearchTerms, a as remoteControlBrands, r as remoteControls, b as brands, s as searchTerms } from './catalog-schema.mjs';

async function controlPhoto(encoded, id) {
  const input = Buffer.from(encoded, "base64");
  const mime = detectMime(input);
  if (!mime) throw createError({ statusCode: 400, message: "Use uma foto JPG, PNG, WebP ou AVIF v\xE1lida." });
  let bytes = input;
  let outputMime = mime;
  if (mime === "image/png") {
    if (input.length > pngUploadMaxBytes) {
      throw createError({ statusCode: 400, message: "O PNG deve ter at\xE9 3 MiB." });
    }
    try {
      bytes = await sharp(input, { limitInputPixels: 16e6 }).webp({ quality: 88, alphaQuality: 100 }).toBuffer();
      outputMime = "image/webp";
    } catch {
      throw createError({ statusCode: 400, message: "N\xE3o foi poss\xEDvel converter o PNG. Confira se a imagem abre normalmente e se tem at\xE9 16 megapixels." });
    }
  }
  if (bytes.length > photoMaxBytes) {
    throw createError({
      statusCode: 400,
      message: mime === "image/png" ? "A foto ficou acima de 750 KiB ap\xF3s a convers\xE3o. Envie um PNG com dimens\xF5es menores." : "Fotos em JPG, WebP ou AVIF devem ter at\xE9 750 KiB."
    });
  }
  return {
    photoUrl: `/api/controls/${id}/photo`,
    photoBytes: bytes,
    photoMime: outputMime
  };
}
function detectMime(bytes) {
  if (bytes.subarray(0, 8).toString("hex") === "89504e470d0a1a0a") return "image/png";
  if (bytes.subarray(0, 3).toString("hex") === "ffd8ff") return "image/jpeg";
  if (bytes.toString("ascii", 0, 4) === "RIFF" && bytes.toString("ascii", 8, 12) === "WEBP") return "image/webp";
  if (bytes.length < 16 || bytes.toString("ascii", 4, 8) !== "ftyp") return;
  const boxSize = bytes.readUInt32BE(0);
  if (boxSize < 16 || boxSize > bytes.length || boxSize % 4) return;
  for (let offset = 8; offset < boxSize; offset += 4) {
    if (offset === 12) continue;
    const brand = bytes.toString("ascii", offset, offset + 4);
    if (brand === "avif" || brand === "avis") return "image/avif";
  }
}

const controls = remoteControls;
const links = remoteControlBrands;
const { photoBytes: _bytes, photoMime: _mime, ...controlFields } = getTableColumns(controls);
const filter = z.string().trim().max(160).optional();
const defaultPageSize = 12;
const listQuery = z.object({
  page: z.coerce.number().int().min(1).max(1e6).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(defaultPageSize),
  q: filter,
  name: filter,
  brand: filter,
  brandId: z.uuid().optional(),
  model: filter,
  vipoCode: filter,
  track: z.enum(["0", "1"]).optional()
});
const encodedPhoto = z.string().max(Math.ceil(pngUploadMaxBytes / 3) * 4).regex(/^[A-Za-z0-9+/]+={0,2}$/);
const draftInput = z.object({ id: z.uuid(), photo: encodedPhoto });
const writeInput = remoteFields.extend({
  name: z.string().trim().min(1).max(160).optional(),
  originalRemoteCode: z.string().trim().max(80).optional(),
  photo: z.union([
    z.null(),
    encodedPhoto
  ]).optional()
});
function contains(field, value) {
  const escaped = value.replace(/[\\%_]/g, "\\$&");
  return sql`${field} LIKE ${`%${escaped}%`} ESCAPE '\\'`;
}
async function attachBrands(db, rows) {
  var _a;
  if (!rows.length) return [];
  const matches = await db.select({
    remoteControlId: links.remoteControlId,
    brand: { id: brands.id, name: brands.name }
  }).from(links).innerJoin(brands, eq(brands.id, links.brandId)).where(inArray(links.remoteControlId, rows.map((row) => row.id))).orderBy(asc(brands.name), asc(brands.id)).all();
  const byControl = /* @__PURE__ */ new Map();
  for (const { remoteControlId, brand } of matches) {
    const items = (_a = byControl.get(remoteControlId)) != null ? _a : [];
    items.push(brand);
    byControl.set(remoteControlId, items);
  }
  return rows.map((row) => {
    var _a2;
    return { ...row, brands: (_a2 = byControl.get(row.id)) != null ? _a2 : [] };
  });
}
const firstCatalogPage = defineCachedFunction(
  (event) => queryControls(event, true, listQuery.parse({})),
  { name: "public-controls-first-page", getKey: () => "default", maxAge: 60, swr: false }
);
async function listControls(event, publicOnly) {
  const query = await getValidatedQuery(event, listQuery.parse);
  if (publicOnly && query.page === 1 && query.pageSize === defaultPageSize && query.track !== "1" && !query.q && !query.name && !query.brand && !query.brandId && !query.model && !query.vipoCode) {
    return firstCatalogPage(event);
  }
  return queryControls(event, publicOnly, query);
}
async function queryControls(event, publicOnly, query) {
  var _a;
  const { page, pageSize, name, brand, brandId, model, vipoCode, track, q } = query;
  const db = identityDb(event);
  const term = q == null ? void 0 : q.replace(/\s+/g, " ");
  const fields = [];
  if (publicOnly) fields.push(eq(controls.active, true), eq(controls.isDraft, false));
  if (name) fields.push(contains(controls.name, name));
  if (vipoCode) fields.push(eq(controls.vipoCode, vipoCode.toUpperCase()));
  const brandMatch = (...terms) => exists(db.select({ id: brands.id }).from(links).innerJoin(brands, eq(brands.id, links.brandId)).where(and(eq(links.remoteControlId, controls.id), ...terms)));
  const modelMatch = (value) => sql`EXISTS (SELECT 1 FROM json_each(${controls.models}) AS models WHERE ${contains(sql`models.value`, value)})`;
  if (brand || brandId) {
    fields.push(brandMatch(
      brand ? contains(brands.name, brand) : void 0,
      brandId ? eq(links.brandId, brandId) : void 0
    ));
  }
  if (model) fields.push(modelMatch(model));
  if (term) {
    const controlText = sql`${controls.name} || ' ' || ${controls.vipoCode} || ' ' || coalesce(${controls.originalRemoteCode}, '') || ' ' || coalesce(${controls.notes}, '') || ' ' || CASE ${controls.category} WHEN 'tv' THEN 'tv televisão' WHEN 'ac' THEN 'ac ar condicionado ar-condicionado' WHEN 'receptor' THEN 'receptor' END`;
    for (const word of term.split(" ")) {
      fields.push(or(contains(controlText, word), brandMatch(contains(brands.name, word)), modelMatch(word)));
    }
  }
  const where = and(...fields);
  const [rows, totals] = await Promise.all([
    db.select(controlFields).from(controls).where(where).orderBy(asc(controls.name), asc(controls.id)).limit(pageSize).offset((page - 1) * pageSize).all(),
    db.select({ total: count() }).from(controls).where(where).get()
  ]);
  const selectedBrand = publicOnly && track === "1" && page === 1 && !term && brandId ? await db.select({ name: brands.name }).from(brands).where(eq(brands.id, brandId)).get() : void 0;
  const searchLabel = term != null ? term : [name, brand || (selectedBrand == null ? void 0 : selectedBrand.name), model, vipoCode].filter(Boolean).join(" ");
  if (publicOnly && track === "1" && page === 1 && searchLabel) {
    await recordSearch(db, searchLabel, where);
  }
  return { items: await attachBrands(db, rows), total: (_a = totals == null ? void 0 : totals.total) != null ? _a : 0, page, pageSize };
}
async function recordSearch(db, label, where) {
  const normalized = label.toLowerCase().replace(/\s+/g, " ");
  const matches = db.select({ id: controls.id }).from(controls).where(where).getSQL();
  const zeroResults = sql`CASE WHEN EXISTS (${matches}) THEN 0 ELSE 1 END`;
  await db.batch([
    db.insert(searchTerms).values({
      term: label,
      normalizedTerm: normalized,
      zeroResultCount: zeroResults
    }).onConflictDoUpdate({
      target: searchTerms.normalizedTerm,
      set: {
        searchCount: sql`${searchTerms.searchCount} + 1`,
        zeroResultCount: sql`${searchTerms.zeroResultCount} + excluded.zero_result_count`,
        lastSearchedAt: sql`CURRENT_TIMESTAMP`
      }
    }),
    db.run(sql`
      INSERT INTO remote_search_terms (remote_control_id, search_term_id, search_count)
      SELECT matched.id, search_terms.id, 1
      FROM (${matches}) AS matched CROSS JOIN search_terms
      WHERE search_terms.normalized_term = ${normalized}
      ON CONFLICT (remote_control_id, search_term_id)
      DO UPDATE SET search_count = remote_search_terms.search_count + 1
    `)
  ]);
}
function controlId(event) {
  const id = getRouterParam(event, "id");
  if (!id || !z.uuid().safeParse(id).success) throw notFound();
  return id;
}
function notFound() {
  return createError({ statusCode: 404, message: "Controle n\xE3o encontrado" });
}
async function getControl(event, id) {
  const db = identityDb(event);
  const row = await db.select(controlFields).from(controls).where(eq(controls.id, id)).get();
  if (!row) throw notFound();
  const [item] = await attachBrands(db, [row]);
  return item;
}
async function createControlDraft(event) {
  const { id, photo } = await readValidatedBody(event, draftInput.parse);
  const image = await controlPhoto(photo, id);
  const result = await identityDb(event).insert(controls).values({
    id,
    ...image,
    vipoCode: `__draft__${id}`,
    name: "Rascunho",
    category: "tv",
    isDraft: true,
    active: false
  }).onConflictDoUpdate({
    target: controls.id,
    set: image,
    setWhere: eq(controls.isDraft, true)
  }).run();
  if (!result.rowsAffected) throw createError({ statusCode: 409, message: "Este controle j\xE1 foi finalizado." });
  return { id, photoUrl: image.photoUrl };
}
async function saveControl(event, existingId) {
  const { brandIds: selectedBrands, models, photo, ...fields } = await readValidatedBody(event, writeInput.parse);
  if (photo === null || !existingId && !photo) {
    throw createError({ statusCode: 400, message: "Adiciona uma foto ao controle para salvar." });
  }
  const id = existingId != null ? existingId : crypto.randomUUID();
  const photoFields = photo === void 0 ? {} : await controlPhoto(photo, id);
  const db = identityDb(event);
  const brandIds = [...new Set(selectedBrands)];
  const uniqueModels = [...new Map(models.map((model) => [model.toLowerCase(), model])).values()];
  const values = { ...fields, ...photoFields, models: uniqueModels };
  try {
    await db.transaction(async (tx) => {
      var _a, _b;
      if (brandIds.length) {
        const existingBrands = await tx.select({ id: brands.id }).from(brands).where(inArray(brands.id, brandIds)).all();
        if (existingBrands.length !== brandIds.length) {
          throw createError({ statusCode: 400, message: "Uma das marcas selecionadas j\xE1 n\xE3o existe." });
        }
      }
      if (existingId) {
        const current = await tx.select({ hasPhoto: sql`length(${controls.photoBytes}) > 0` }).from(controls).where(eq(controls.id, id)).get();
        if (!current) throw notFound();
        if (!photo && !current.hasPhoto) {
          throw createError({ statusCode: 400, message: "Adiciona uma foto ao controle para salvar." });
        }
        const result = await tx.update(controls).set({
          ...values,
          isDraft: false,
          name: (_a = values.name) != null ? _a : sql`CASE WHEN ${controls.isDraft} = 1 OR ${controls.name} = 'Controle ' || ${controls.vipoCode}
            THEN ${"Controle " + fields.vipoCode} ELSE ${controls.name} END`
        }).where(eq(controls.id, id)).run();
        if (!result.rowsAffected) throw notFound();
        await tx.delete(links).where(eq(links.remoteControlId, id)).run();
      } else {
        await tx.insert(controls).values({ id, ...values, name: (_b = values.name) != null ? _b : `Controle ${fields.vipoCode}` }).run();
      }
      if (brandIds.length) {
        await tx.insert(links).values(brandIds.map((brandId) => ({ remoteControlId: id, brandId }))).run();
      }
    });
  } catch (error) {
    const cause = error instanceof Error && error.cause instanceof Error ? error.cause : error;
    if (cause instanceof Error && cause.message.includes("UNIQUE constraint failed: remote_controls.vipo_code")) {
      throw createError({ statusCode: 409, message: "C\xF3digo Vipo j\xE1 cadastrado" });
    }
    throw error;
  }
  return { id };
}
async function deleteControl(event, id) {
  const db = identityDb(event);
  await db.transaction(async (tx) => {
    await tx.delete(remoteSearchTerms).where(eq(remoteSearchTerms.remoteControlId, id)).run();
    await tx.delete(links).where(eq(links.remoteControlId, id)).run();
    const result = await tx.delete(controls).where(eq(controls.id, id)).run();
    if (!result.rowsAffected) throw notFound();
  });
}

export { createControlDraft as a, controlId as c, deleteControl as d, getControl as g, listControls as l, saveControl as s };
//# sourceMappingURL=catalogDb.mjs.map
