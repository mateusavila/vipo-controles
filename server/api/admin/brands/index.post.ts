export default defineEventHandler(async event => {
  await requireAdmin(event)
  const brand = await saveBrand(event, false)
  setResponseStatus(event, 201)
  return brand
})
