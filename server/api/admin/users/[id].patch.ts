import { and, eq, sql } from 'drizzle-orm'
import { z } from 'zod'
import { identityUsers } from '../../../database/schema'
import { identityEmailSchema } from '../../../utils/passwordEmail'

const changes = z.union([
  z.strictObject({ name: z.string().trim().min(1).max(120), email: identityEmailSchema }),
  z.strictObject({ blocked: z.boolean() }),
])

export default defineEventHandler(async (event) => {
  await requireAdmin(event, true)
  const id = getRouterParam(event, 'id') ?? ''
  const data = await readValidatedBody(event, changes.parse)
  const db = identityDb(event)
  const member = and(eq(identityUsers.id, id), eq(identityUsers.role, 'member'))
  const changed = 'email' in data
    ? sql`${identityUsers.email} <> ${data.email}`
    : sql`${identityUsers.blocked} <> ${Number(data.blocked)}`

  const availableEmail = 'email' in data
    ? sql`NOT EXISTS (SELECT 1 FROM identity_users AS other WHERE other.email = ${data.email} AND other.id <> ${id})`
    : undefined
  const updated = await db.update(identityUsers).set({
    ...data,
    sessionVersion: sql`${identityUsers.sessionVersion} + CASE WHEN ${changed} THEN 1 ELSE 0 END`,
  }).where(and(member, availableEmail)).returning({ id: identityUsers.id }).get()

  if (!updated) {
    const exists = await db.select({ id: identityUsers.id }).from(identityUsers).where(member).get()
    if (exists) throw createError({ statusCode: 409, message: 'Este e-mail já está cadastrado.' })
    throw createError({ statusCode: 404, message: 'Membro não encontrado.' })
  }
  return { ok: true }
})
