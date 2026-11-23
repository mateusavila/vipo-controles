import { eq } from 'drizzle-orm'
import { remoteControls } from '../../../database/schema'

export default defineEventHandler(async event => {
  const photo = await identityDb(event).select({
    bytes: remoteControls.photoBytes,
    mime: remoteControls.photoMime,
    active: remoteControls.active,
  }).from(remoteControls).where(eq(remoteControls.id, controlId(event))).get()

  if (!photo?.bytes || !photo.mime) {
    throw createError({ statusCode: 404, message: 'Foto não encontrada' })
  }
  if (!photo.active) await requireAdmin(event)
  setResponseHeader(event, 'Cache-Control', photo.active ? 'public, no-cache' : 'private, no-store')
  setResponseHeader(event, 'X-Content-Type-Options', 'nosniff')
  return send(event, photo.bytes, photo.mime)
})
