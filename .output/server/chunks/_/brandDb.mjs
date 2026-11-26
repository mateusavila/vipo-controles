import { c as createError, r as readValidatedBody, g as getRouterParam } from '../nitro/nitro.mjs';
import { i as identityDb } from './identityDb.mjs';
import { eq, and, notExists, asc } from 'drizzle-orm';
import { z } from 'zod';
import { a as remoteControlBrands, b as brands } from './catalog-schema.mjs';

const input = z.object({ name: z.string().trim().min(1).max(100) });
function brandNotFound() {
  return createError({ statusCode: 404, message: "Marca n\xE3o encontrada." });
}
function brandId(event) {
  const id = z.uuid().safeParse(getRouterParam(event, "id"));
  if (!id.success) throw brandNotFound();
  return id.data;
}
async function listBrands(event) {
  return identityDb(event).select().from(brands).orderBy(asc(brands.name), asc(brands.id)).all();
}
async function saveBrand(event, editing) {
  const { name } = await readValidatedBody(event, input.parse);
  const id = editing ? brandId(event) : crypto.randomUUID();
  const db = identityDb(event);
  try {
    const row = editing ? await db.update(brands).set({ name }).where(eq(brands.id, id)).returning().get() : await db.insert(brands).values({ id, name }).returning().get();
    if (!row) throw brandNotFound();
    return row;
  } catch (error) {
    const cause = error instanceof Error && error.cause instanceof Error ? error.cause : error;
    if (cause instanceof Error && cause.message.includes("UNIQUE constraint failed: brands.name")) {
      throw createError({ statusCode: 409, message: "J\xE1 existe uma marca com esse nome." });
    }
    throw error;
  }
}
async function deleteBrand(event) {
  const id = brandId(event);
  const db = identityDb(event);
  return db.transaction(async (tx) => {
    const linked = tx.select({ id: remoteControlBrands.brandId }).from(remoteControlBrands).where(eq(remoteControlBrands.brandId, id));
    const result = await tx.delete(brands).where(and(eq(brands.id, id), notExists(linked))).run();
    if (result.rowsAffected) return { ok: true };
    if (!await tx.select({ id: brands.id }).from(brands).where(eq(brands.id, id)).get()) throw brandNotFound();
    throw createError({ statusCode: 409, message: "Remova o v\xEDnculo com os controles antes de apagar esta marca." });
  });
}

export { deleteBrand as d, listBrands as l, saveBrand as s };
//# sourceMappingURL=brandDb.mjs.map
