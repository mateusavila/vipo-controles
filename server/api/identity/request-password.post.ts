import { eq } from 'drizzle-orm'
import { z } from 'zod'
import { identityEmailSchema } from '../../utils/passwordEmail'
import { identityUsers } from '../../database/schema'

const request = z.object({ email: identityEmailSchema })

export default defineEventHandler(async (event) => {
  const { email } = await readValidatedBody(event, request.parse)
  const config = passwordEmailConfig(event)
  const user = await identityDb(event).select().from(identityUsers).where(eq(identityUsers.email, email)).get()

  if (user && !user.blocked) {
    try {
      await sendPasswordEmail(event, user, 'reset', config)
    } catch {
      console.error('Falha ao processar o envio de e-mail de recuperação.')
    }
  }
  return { ok: true }
})
