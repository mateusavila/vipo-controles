import { and, eq } from 'drizzle-orm'
import { identityPasswordTokens, identityUsers } from '../database/schema'

export function validPasswordToken(token: string) {
  return and(
    eq(identityPasswordTokens.tokenHash, hashPasswordToken(token)),
    eq(identityPasswordTokens.userId, identityUsers.id),
    eq(identityPasswordTokens.sessionVersion, identityUsers.sessionVersion),
    eq(identityUsers.blocked, false),
  )
}
