export default defineNuxtRouteMiddleware(async () => {
  const request = useRequestFetch()
  try {
    await request('/api/identity/me')
  } catch {
    return navigateTo('/login')
  }
})
