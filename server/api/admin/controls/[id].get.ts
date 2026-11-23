export default defineEventHandler(async event => {
  await requireAdmin(event)
  return getControl(event, controlId(event))
})
