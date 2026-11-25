export default defineEventHandler(async event => {
  await requireAdmin(event)
  const draft = await createControlDraft(event)
  setResponseStatus(event, 201)
  return draft
})
