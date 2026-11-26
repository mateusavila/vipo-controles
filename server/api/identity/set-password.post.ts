import { exists, sql } from 'drizzle-orm'
import { z } from 'zod'
import { passwordTokenSchema } from '../../utils/passwordEmail'
import { strongPasswordSchema } from '#shared/passwordPolicy'
import { identityPasswordTokens, identityUsers } from '../../database/schema'

const request = z.object({
  token: passwordTokenSchema,
  password: strongPasswordSchema(),
  confirmation: z.string().max(128),
}).refine(data => data.password === data.confirmation, {
  path: ['confirmation'],
  message: 'As senhas precisam ser iguais.',
})

export default defineEventHandler(async (event) => {
  const { token, password } = await readValidatedBody(event, request.parse)
  const db = identityDb(event)
  const tokenMatch = db.select({ token: identityPasswordTokens.tokenHash })
    .from(identityPasswordTokens).where(validPasswordToken(token))
  const valid = await db.select({ id: identityUsers.id }).from(identityUsers).where(exists(tokenMatch)).get()
  if (!valid) throw createError({ statusCode: 400, message: 'Token inválido ou já utilizado.' })

  const updated = await db.update(identityUsers).set({
    passwordHash: await hashPassword(password),
    sessionVersion: sql`${identityUsers.sessionVersion} + 1`,
  }).where(exists(tokenMatch)).returning({ id: identityUsers.id }).get()

  if (!updated) throw createError({ statusCode: 400, message: 'Token inválido ou já utilizado.' })
  await clearUserSession(event)
  return { ok: true }
})
