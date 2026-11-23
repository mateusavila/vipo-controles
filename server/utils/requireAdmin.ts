import { eq } from 'drizzle-orm'
import type { H3Event } from 'h3'
import { identityUsers } from '../database/schema'

export async function requireAdmin(event: H3Event) {
  const { user } = await requireUserSession(event)
  const current = await identityDb(event).select().from(identityUsers).where(eq(identityUsers.id, user.id)).get()
  if (!current || current.blocked || current.role !== 'superadmin' || current.sessionVersion !== user.sessionVersion) {
    await clearUserSession(event)
    throw createError({ statusCode: 401, message: 'Entre novamente para acessar o painel.' })
  }
}
