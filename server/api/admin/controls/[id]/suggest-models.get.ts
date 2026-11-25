export default defineEventHandler(async event => {
  await requireAdmin(event)
  return getControlImageAnalysis(event, controlId(event))
})
