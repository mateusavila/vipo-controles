export default defineEventHandler(async event => {
  await requireAdmin(event)
  await deleteControl(event, controlId(event))
  return { ok: true }
})
