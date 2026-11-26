<script setup lang="ts">
const route = useRoute()

const adminLinks = [
  { label: 'Dashboard', to: '/admin' },
  { label: 'Controles', to: '/admin/controles' },
  { label: 'Marcas', to: '/admin/marcas' },
]

function isActive(path: string) {
  if (path === '/admin') return route.path === path

  return route.path === path || route.path.startsWith(`${path}/`)
}
const { user, clear } = useUserSession()
async function logout() {
  await clear()
  await navigateTo('/login')
}
</script>
<template>
  <div class="admin-shell">
    <header class="admin-header">
      <nav class="flex flex-wrap gap-2" aria-label="Administração">
        <UButton
          v-for="link in user?.role === 'superadmin'
            ? [...adminLinks, { label: 'Usuários', to: '/admin/usuarios' }]
            : adminLinks"
          :key="link.to"
          :to="link.to"
          :exact="link.to === '/admin'"
          :color="isActive(link.to) ? 'primary' : 'neutral'"
          :variant="isActive(link.to) ? 'soft' : 'ghost'"
          :aria-current="isActive(link.to) ? 'page' : undefined"
        >
          {{ link.label }}
        </UButton>
      </nav>
      <UButton variant="outline" color="neutral" @click="logout">Sair</UButton>
    </header>
    <main class="admin-main"><slot /></main>
  </div>
</template>
<style src="~/assets/css/admin.css"></style>

<style>
body{
  background: none
}
</style>
