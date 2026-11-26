import { and, eq, inArray } from 'drizzle-orm'
import { identityPasswordTokens, identityUsers } from '../../../database/schema'

export default defineEventHandler(async (event) => {
  await requireAdmin(event, true)
  const id = getRouterParam(event, 'id') ?? ''
  const db = identityDb(event)
  const member = and(eq(identityUsers.id, id), eq(identityUsers.role, 'member'))
  const [, deleted] = await db.batch([
    db.delete(identityPasswordTokens).where(inArray(
      identityPasswordTokens.userId,
      db.select({ id: identityUsers.id }).from(identityUsers).where(member),
    )),
    db.delete(identityUsers).where(member).returning({ id: identityUsers.id }),
  ])

  if (!deleted.length) throw createError({ statusCode: 404, message: 'Membro não encontrado.' })
  return { ok: true }
})
