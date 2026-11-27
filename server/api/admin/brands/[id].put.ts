export default defineEventHandler(async event => {
  await requireAdmin(event)
  const result = await saveBrand(event, true)
  await rebuildPublicCatalog(event).catch(error => console.error("Catalog cache refresh failed", error))
  return result
})
