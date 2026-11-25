export default defineEventHandler(async event => {
  await requireAdmin(event)
  return analyzeControlPhoto(event, controlId(event))
})
