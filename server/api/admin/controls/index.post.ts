export default defineEventHandler(async event => {
  await requireAdmin(event)
  const result = await saveControl(event)
  setResponseStatus(event, 201)
  return result
})
