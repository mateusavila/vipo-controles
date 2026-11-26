export default defineEventHandler(async event => {
  const { role } = await requireAdmin(event)
  return { ok: true, role }
})
