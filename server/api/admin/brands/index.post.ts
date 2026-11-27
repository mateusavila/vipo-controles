export default defineEventHandler(async event => {
  await requireAdmin(event)
  const brand = await saveBrand(event, false)
  setResponseStatus(event, 201)
  await rebuildPublicCatalog(event).catch(error => console.error("Catalog cache refresh failed", error))
  return brand
})
