import { z } from 'zod'
import { passwordTokenSchema } from '../../utils/passwordEmail'
import { identityPasswordTokens, identityUsers } from '../../database/schema'

const request = z.object({ token: passwordTokenSchema })

export default defineEventHandler(async (event) => {
  const parsed = request.safeParse(await readBody(event))
  if (!parsed.success) return { valid: false }

  const match = await identityDb(event).select({ id: identityUsers.id }).from(identityUsers)
    .innerJoin(identityPasswordTokens, validPasswordToken(parsed.data.token))
    .get()
  return { valid: Boolean(match) }
})
