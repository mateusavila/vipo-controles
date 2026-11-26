import { eq } from 'drizzle-orm'
import { randomUUID } from 'node:crypto'
import { z } from 'zod'
import { identityEmailSchema } from '../../../utils/passwordEmail'
import { identityUsers } from '../../../database/schema'

const invitation = z.strictObject({
  name: z.string().trim().min(1).max(120),
  email: identityEmailSchema,
})

export default defineEventHandler(async (event) => {
  await requireAdmin(event, true)
  const { name, email } = await readValidatedBody(event, invitation.parse)
  const config = passwordEmailConfig(event)
  const db = identityDb(event)

  await db.insert(identityUsers)
    .values({ id: randomUUID(), name, email, passwordHash: '', role: 'member' })
    .onConflictDoNothing({ target: identityUsers.email })

  const user = await db.select().from(identityUsers).where(eq(identityUsers.email, email)).get()
  if (!user || user.blocked || user.role !== 'member' || user.passwordHash || user.name !== name) {
    throw createError({ statusCode: 409, message: 'Este e-mail já está cadastrado. Para reenviar um convite pendente, use o mesmo nome e e-mail.' })
  }

  if (!await sendPasswordEmail(event, user, 'invite', config)) {
    throw createError({ statusCode: 429, message: 'Aguarde um minuto antes de reenviar o convite.' })
  }
  return { ok: true }
})
