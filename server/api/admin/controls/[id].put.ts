export default defineEventHandler(async event => {
  await requireAdmin(event)
  return saveControl(event, controlId(event))
})
