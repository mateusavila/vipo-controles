<script setup lang="ts">
const email = ref('')
const password = ref('')
const error = ref('')
const busy = ref(false)
const { fetch: refreshSession } = useUserSession()
async function login() {
  busy.value = true
  error.value = ''
  try {
    await $fetch('/api/identity/login', { method: 'POST', body: { email: email.value, password: password.value } })
    await refreshSession()
    await navigateTo('/admin')
  } catch (failure) {
    const status = (failure as { statusCode?: number }).statusCode
    error.value = status === 401 ? 'E-mail ou senha inválidos.' : 'Não foi possível entrar. Confira a configuração do servidor.'
  } finally {
    busy.value = false
  }
}
</script>
<template>
  <main class="mx-auto grid min-h-dvh max-w-98 content-center p-5">
    <UCard>
      <template #header><h1 class="text-xl font-semibold">Administração · Vipo Eletrônica</h1></template>
      <form class="space-y-4" @submit.prevent="login">
        <UFormField label="E-mail"><UInput v-model="email" class="w-full" type="email" autocomplete="username" required /></UFormField>
        <UFormField label="Senha"><UInput v-model="password" class="w-full" type="password" autocomplete="current-password" required /></UFormField>
        <UAlert v-if="error" color="error" :title="error" role="alert" />
        <UButton type="submit" :loading="busy" block>Entrar</UButton>
        <UButton to="/trocar-senha" variant="link" block>Trocar senha</UButton>
      </form>
    </UCard>
  </main>
</template>
