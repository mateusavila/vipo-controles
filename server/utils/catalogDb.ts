import { and, asc, count, eq, exists, getTableColumns, inArray, or, sql, type SQL, type SQLWrapper } from 'drizzle-orm'
import type { H3Event } from 'h3'
import { z } from 'zod'
import { photoMaxBytes, remoteFields } from '../../shared/catalog'
import { brands, remoteControlBrands, remoteControls, remoteSearchTerms, searchTerms } from '../database/schema'

const controls = remoteControls
const links = remoteControlBrands
const { photoBytes: _bytes, photoMime: _mime, ...controlFields } = getTableColumns(controls)

const filter = z.string().trim().max(160).optional()
const defaultPageSize = 20
const listQuery = z.object({
  page: z.coerce.number().int().min(1).max(1_000_000).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(defaultPageSize),
  q: filter,
  name: filter,
  brand: filter,
  brandId: z.uuid().optional(),
  model: filter,
  vipoCode: filter,
  track: z.enum(['0', '1']).optional(),
})

const writeInput = remoteFields.extend({
  photo: z.union([
    z.null(),
    z.string().max(Math.ceil(photoMaxBytes / 3) * 4).regex(/^[A-Za-z0-9+/]+={0,2}$/),
  ]).optional(),
})

function contains(field: SQLWrapper, value: string) {
  const escaped = value.replace(/[\\%_]/g, '\\$&')
  return sql`${field} LIKE ${`%${escaped}%`} ESCAPE '\\'`
}

type Db = ReturnType<typeof identityDb>
type ControlRow = Pick<typeof controls.$inferSelect, keyof typeof controlFields>

async function attachBrands(db: Db, rows: ControlRow[]) {
  if (!rows.length) return []
  const matches = await db.select({
    remoteControlId: links.remoteControlId,
    brand: { id: brands.id, name: brands.name },
  }).from(links).innerJoin(brands, eq(brands.id, links.brandId))
    .where(inArray(links.remoteControlId, rows.map(row => row.id)))
    .orderBy(asc(brands.name), asc(brands.id)).all()

  const byControl = new Map<string, { id: string, name: string }[]>()
  for (const { remoteControlId, brand } of matches) {
    const items = byControl.get(remoteControlId) ?? []
    items.push(brand)
    byControl.set(remoteControlId, items)
  }

  return rows.map(row => ({ ...row, brands: byControl.get(row.id) ?? [] }))
}

type ListQuery = z.output<typeof listQuery>

const firstCatalogPage = defineCachedFunction(
  (event: H3Event) => queryControls(event, true, listQuery.parse({})),
  { name: 'public-controls-first-page', getKey: () => 'default', maxAge: 60, swr: false },
)

export async function listControls(event: H3Event, publicOnly: boolean) {
  const query = await getValidatedQuery(event, listQuery.parse)
  if (publicOnly && query.page === 1 && query.pageSize === defaultPageSize && query.track !== '1'
    && !query.q && !query.name && !query.brand && !query.brandId && !query.model && !query.vipoCode) {
    return firstCatalogPage(event)
  }

  return queryControls(event, publicOnly, query)
}

async function queryControls(event: H3Event, publicOnly: boolean, query: ListQuery) {
  const { page, pageSize, name, brand, brandId, model, vipoCode, track, q } = query
  const db = identityDb(event)
  const term = q?.replace(/\s+/g, ' ')
  const fields: SQL[] = []
  if (publicOnly) fields.push(eq(controls.active, true))
  if (name) fields.push(contains(controls.name, name))
  if (vipoCode) fields.push(eq(controls.vipoCode, vipoCode.toUpperCase()))
  const brandMatch = (...terms: (SQL | undefined)[]) =>
    exists(db.select({ id: brands.id }).from(links).innerJoin(brands, eq(brands.id, links.brandId))
      .where(and(eq(links.remoteControlId, controls.id), ...terms)))
  const modelMatch = (value: string) =>
    sql`EXISTS (SELECT 1 FROM json_each(${controls.models}) AS models WHERE ${contains(sql`models.value`, value)})`

  if (brand || brandId) {
    fields.push(brandMatch(
      brand ? contains(brands.name, brand) : undefined,
      brandId ? eq(links.brandId, brandId) : undefined,
    ))
  }
  if (model) fields.push(modelMatch(model))
  if (term) {
    const controlText = sql`${controls.name} || ' ' || ${controls.vipoCode} || ' ' || coalesce(${controls.originalRemoteCode}, '') || ' ' || coalesce(${controls.notes}, '') || ' ' || CASE WHEN ${controls.category} = 'tv' THEN 'tv televisão' ELSE 'ac ar condicionado ar-condicionado' END`
    for (const word of term.split(' ')) {
      fields.push(or(contains(controlText, word), brandMatch(contains(brands.name, word)), modelMatch(word))!)
    }
  }
  const where = and(...fields)
  const [rows, totals] = await Promise.all([
    db.select(controlFields).from(controls).where(where).orderBy(asc(controls.name), asc(controls.id))
      .limit(pageSize).offset((page - 1) * pageSize).all(),
    db.select({ total: count() }).from(controls).where(where).get(),
  ])

  const selectedBrand = publicOnly && track === '1' && page === 1 && !term && brandId
    ? await db.select({ name: brands.name }).from(brands).where(eq(brands.id, brandId)).get()
    : undefined
  const searchLabel = term ?? [name, brand || selectedBrand?.name, model, vipoCode].filter(Boolean).join(' ')
  if (publicOnly && track === '1' && page === 1 && searchLabel) {
    await recordSearch(db, searchLabel, where)
  }

  return { items: await attachBrands(db, rows), total: totals?.total ?? 0, page, pageSize }
}

async function recordSearch(db: Db, label: string, where: SQL | undefined) {
  const normalized = label.toLowerCase().replace(/\s+/g, ' ')
  const matches = db.select({ id: controls.id }).from(controls).where(where).getSQL()
  const zeroResults = sql<number>`CASE WHEN EXISTS (${matches}) THEN 0 ELSE 1 END`
  await db.batch([
    db.insert(searchTerms).values({
      term: label,
      normalizedTerm: normalized,
      zeroResultCount: zeroResults,
    }).onConflictDoUpdate({
      target: searchTerms.normalizedTerm,
      set: {
        searchCount: sql`${searchTerms.searchCount} + 1`,
        zeroResultCount: sql`${searchTerms.zeroResultCount} + excluded.zero_result_count`,
        lastSearchedAt: sql`CURRENT_TIMESTAMP`,
      },
    }),
    db.run(sql`
      INSERT INTO remote_search_terms (remote_control_id, search_term_id, search_count)
      SELECT matched.id, search_terms.id, 1
      FROM (${matches}) AS matched CROSS JOIN search_terms
      WHERE search_terms.normalized_term = ${normalized}
      ON CONFLICT (remote_control_id, search_term_id)
      DO UPDATE SET search_count = remote_search_terms.search_count + 1
    `),
  ])
}

export function controlId(event: H3Event) {
  const id = getRouterParam(event, 'id')
  if (!id || !z.uuid().safeParse(id).success) throw notFound()
  return id
}

function notFound() {
  return createError({ statusCode: 404, message: 'Controle não encontrado' })
}

export async function getControl(event: H3Event, id: string) {
  const db = identityDb(event)
  const row = await db.select(controlFields).from(controls).where(eq(controls.id, id)).get()
  if (!row) throw notFound()
  const [item] = await attachBrands(db, [row])
  return item!
}

export async function saveControl(event: H3Event, existingId?: string) {
  const { brandIds: selectedBrands, models, photo, ...fields } = await readValidatedBody(event, writeInput.parse)
  const id = existingId ?? crypto.randomUUID()
  const photoFields = photo === null
    ? { photoUrl: null, photoBytes: null, photoMime: null }
    : photo === undefined ? {} : controlPhoto(photo, id)
  const db = identityDb(event)
  const brandIds = [...new Set(selectedBrands)]
  const uniqueModels = [...new Map(models.map(model => [model.toLowerCase(), model])).values()]
  const values = { ...fields, ...photoFields, models: uniqueModels }

  try {
    await db.transaction(async tx => {
      if (brandIds.length) {
        const existingBrands = await tx.select({ id: brands.id }).from(brands).where(inArray(brands.id, brandIds)).all()
        if (existingBrands.length !== brandIds.length) {
          throw createError({ statusCode: 400, message: 'Uma das marcas selecionadas já não existe.' })
        }
      }
      if (existingId) {
        const result = await tx.update(controls).set(values)
          .where(eq(controls.id, id)).run()
        if (!result.rowsAffected) throw notFound()
        await tx.delete(links).where(eq(links.remoteControlId, id)).run()
      } else {
        await tx.insert(controls).values({ id, ...values }).run()
      }
      if (brandIds.length) {
        await tx.insert(links).values(brandIds.map(brandId => ({ remoteControlId: id, brandId }))).run()
      }
    })
  } catch (error) {
    const cause = error instanceof Error && error.cause instanceof Error ? error.cause : error
    if (cause instanceof Error && cause.message.includes('UNIQUE constraint failed: remote_controls.vipo_code')) {
      throw createError({ statusCode: 409, message: 'Código Vipo já cadastrado' })
    }
    throw error
  }

  return { id }
}

export async function deleteControl(event: H3Event, id: string) {
  const db = identityDb(event)
  await db.transaction(async tx => {
    await tx.delete(remoteSearchTerms).where(eq(remoteSearchTerms.remoteControlId, id)).run()
    await tx.delete(links).where(eq(links.remoteControlId, id)).run()
    const result = await tx.delete(controls).where(eq(controls.id, id)).run()
    if (!result.rowsAffected) throw notFound()
  })
}
