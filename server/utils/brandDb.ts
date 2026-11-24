import { asc, eq, notExists, and } from 'drizzle-orm'
import type { H3Event } from 'h3'
import { z } from 'zod'
import { brands, remoteControlBrands } from '../database/schema'

const input = z.object({ name: z.string().trim().min(1).max(100) })

function brandNotFound() {
  return createError({ statusCode: 404, message: 'Marca não encontrada.' })
}

function brandId(event: H3Event) {
  const id = z.uuid().safeParse(getRouterParam(event, 'id'))
  if (!id.success) throw brandNotFound()
  return id.data
}

export async function listBrands(event: H3Event) {
  return identityDb(event).select().from(brands).orderBy(asc(brands.name), asc(brands.id)).all()
}

export async function saveBrand(event: H3Event, editing: boolean) {
  const { name } = await readValidatedBody(event, input.parse)
  const id = editing ? brandId(event) : crypto.randomUUID()
  const db = identityDb(event)
  try {
    const row = editing
      ? await db.update(brands).set({ name }).where(eq(brands.id, id)).returning().get()
      : await db.insert(brands).values({ id, name }).returning().get()
    if (!row) throw brandNotFound()
    return row
  } catch (error) {
    const cause = error instanceof Error && error.cause instanceof Error ? error.cause : error
    if (cause instanceof Error && cause.message.includes('UNIQUE constraint failed: brands.name')) {
      throw createError({ statusCode: 409, message: 'Já existe uma marca com esse nome.' })
    }
    throw error
  }
}

export async function deleteBrand(event: H3Event) {
  const id = brandId(event)
  const db = identityDb(event)
  return db.transaction(async tx => {
    const linked = tx.select({ id: remoteControlBrands.brandId }).from(remoteControlBrands)
      .where(eq(remoteControlBrands.brandId, id))
    const result = await tx.delete(brands).where(and(eq(brands.id, id), notExists(linked))).run()
    if (result.rowsAffected) return { ok: true }
    if (!await tx.select({ id: brands.id }).from(brands).where(eq(brands.id, id)).get()) throw brandNotFound()
    throw createError({ statusCode: 409, message: 'Remova o vínculo com os controles antes de apagar esta marca.' })
  })
}
