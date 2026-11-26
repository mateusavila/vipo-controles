import { eq } from 'drizzle-orm'
import type { H3Event } from 'h3'
import { identityUsers } from '../database/schema'

export async function requireAdmin(event: H3Event, superadminOnly = false) {
  const { user } = await requireUserSession(event)
  const current = await identityDb(event).select().from(identityUsers).where(eq(identityUsers.id, user.id)).get()
  if (!current || current.blocked || !current.passwordHash || current.sessionVersion !== user.sessionVersion) {
    await clearUserSession(event)
    throw createError({ statusCode: 401, message: 'Entre novamente para acessar o painel.' })
  }
  if (superadminOnly && current.role !== 'superadmin') {
    throw createError({ statusCode: 403, message: 'Somente superadministradores podem convidar usuários.' })
  }
  return current
}
