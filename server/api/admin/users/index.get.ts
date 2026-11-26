import { asc, eq, sql } from 'drizzle-orm'
import { identityUsers } from '../../../database/schema'

export default defineEventHandler(async (event) => {
  await requireAdmin(event, true)
  return identityDb(event).select({
    id: identityUsers.id,
    name: identityUsers.name,
    email: identityUsers.email,
    blocked: identityUsers.blocked,
    pending: sql<boolean>`${identityUsers.passwordHash} = ''`.mapWith(Boolean),
  }).from(identityUsers)
    .where(eq(identityUsers.role, 'member'))
    .orderBy(asc(identityUsers.name), asc(identityUsers.email))
    .all()
})
