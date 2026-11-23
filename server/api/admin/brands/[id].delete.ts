export default defineEventHandler(async event => {
  await requireAdmin(event)
  return deleteBrand(event)
})
