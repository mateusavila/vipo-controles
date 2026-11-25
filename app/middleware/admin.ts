export default defineNuxtRouteMiddleware(async () => {
  const request = useRequestFetch()
  try {
    await request('/api/identity/me')
  } catch (error) {
    const { statusCode } = error as { statusCode?: number }
    if (statusCode === 401) return navigateTo('/login')

    throw createError({
      statusCode: 503,
      message: 'Não foi possível verificar a sessão. Tenta recarregar a página.',
    })
  }
})
