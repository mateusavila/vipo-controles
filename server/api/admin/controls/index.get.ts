export default defineEventHandler(async event => {
  await requireAdmin(event)
  return listControls(event, false)
})
