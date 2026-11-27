export default defineEventHandler(async event => {
  await requireAdmin(event)
  const result = await saveControl(event)
  setResponseStatus(event, 201)
  await rebuildPublicCatalog(event).catch(error => console.error("Catalog cache refresh failed", error))
  return result
})
