import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { identityUsers } from '../../database/schema'

const credentials = z.object({ email: z.string().trim().toLowerCase().email(), password: z.string().min(1).max(256) })

export default defineEventHandler(async event => {
  const { email, password } = await readValidatedBody(event, credentials.parse)
  const user = await identityDb(event).select().from(identityUsers).where(eq(identityUsers.email, email)).get()
  if (!user || user.blocked || user.role !== 'superadmin' || !await verifyPassword(user.passwordHash, password)) {
    throw createError({ statusCode: 401, message: 'E-mail ou senha inválidos.' })
  }
  await clearUserSession(event)
  await setUserSession(event, { user: { id: user.id, name: user.name, email: user.email, role: user.role, sessionVersion: user.sessionVersion } })
  return { ok: true }
})
