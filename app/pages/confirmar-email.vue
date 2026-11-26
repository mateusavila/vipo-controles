<script setup lang="ts">
import { isStrongPassword, PASSWORD_MIN_LENGTH } from '#shared/passwordPolicy'

useHead({ title: 'Confirme seu e-mail · Vipo Eletrônica' })
const route = useRoute()
const token = computed(() => typeof route.query.token === 'string' ? route.query.token : '')
const password = ref('')
const confirmation = ref('')
const pending = ref(false)
const error = ref('')
const { clear } = useUserSession()
const { data: verification, status, refresh } = await useFetch('/api/identity/password-token', {
  method: 'POST',
  body: computed(() => ({ token: token.value })),
  server: false,
})

async function savePassword() {
  if (pending.value || !verification.value?.valid) return
  error.value = ''
  if (!isStrongPassword(password.value)) {
    error.value = 'A senha precisa atender a todos os requisitos.'
    return
  }
  if (password.value !== confirmation.value) {
    error.value = 'As senhas precisam ser iguais.'
    return
  }

  pending.value = true
  try {
    await $fetch('/api/identity/set-password', {
      method: 'POST',
      body: { token: token.value, password: password.value, confirmation: confirmation.value },
    })
    await clear().catch(() => undefined)
    await navigateTo('/login', { replace: true })
  } catch (failure) {
    const response = failure as { statusCode?: number }
    if (response.statusCode === 400) await refresh()
    error.value = 'Não foi possível salvar a senha. Confira os dados e tente novamente.'
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <main class="mx-auto grid min-h-dvh max-w-md content-center p-5">
    <UCard>
      <template #header><h1 class="text-xl font-semibold">Confirme seu e-mail</h1></template>
      <UAlert v-if="!token || (status === 'success' && !verification?.valid)" color="error" title="Token inválido ou já utilizado" description="Se precisar de outro link, solicite a troca de senha." role="alert" />
      <UAlert v-else-if="status === 'error'" color="error" title="Não foi possível conferir o link. Recarregue a página." role="alert" />
      <p v-else-if="status !== 'success'" role="status" class="text-sm text-muted">Validando link…</p>
      <form v-else class="space-y-4" @submit.prevent="savePassword">
        <UFormField label="Nova senha" required>
          <UInput v-model="password" class="w-full" type="password" autocomplete="new-password" :minlength="PASSWORD_MIN_LENGTH" maxlength="128" required />
          <PasswordStrength :password="password" />
        </UFormField>
        <UFormField label="Confirme a nova senha" required>
          <UInput v-model="confirmation" class="w-full" type="password" autocomplete="new-password" maxlength="128" required />
        </UFormField>
        <UAlert v-if="error" color="error" :title="error" role="alert" />
        <UButton type="submit" :loading="pending" block>Salvar senha</UButton>
      </form>
      <UButton class="mt-4" :to="verification?.valid ? '/login' : '/trocar-senha'" variant="link" block>
        {{ verification?.valid ? 'Voltar ao login' : 'Solicitar outro link' }}
      </UButton>
    </UCard>
  </main>
</template>
