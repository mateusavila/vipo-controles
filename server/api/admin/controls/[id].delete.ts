export default defineEventHandler(async event => {
  await requireAdmin(event)
  await deleteControl(event, controlId(event))
  await rebuildPublicCatalog(event).catch(error => console.error("Catalog cache refresh failed", error))
  return { ok: true }
})
