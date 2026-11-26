<script setup lang="ts">
useHead({ title: 'Trocar senha · Vipo Eletrônica' })
const email = ref('')
const pending = ref(false)
const sent = ref(false)
const error = ref('')

async function requestPassword() {
  if (pending.value) return
  pending.value = true
  error.value = ''
  try {
    await $fetch('/api/identity/request-password', { method: 'POST', body: { email: email.value } })
    sent.value = true
  } catch {
    error.value = 'Não foi possível registrar a solicitação. Tente novamente.'
  } finally {
    pending.value = false
  }
}
</script>

<template>
  <main class="mx-auto grid min-h-dvh max-w-md content-center p-5">
    <UCard>
      <template #header>
        <img src="/logo-vipo.webp" alt="Vipo Eletrônica" width="80" height="36" class="max-w-20 mx-auto mb-5">
        <h1 class="text-xl font-semibold text-center">Trocar senha</h1>
      </template>
      <form v-if="!sent" class="space-y-4" @submit.prevent="requestPassword">
        <p class="text-sm text-muted">Informe o e-mail da sua conta para receber o link de confirmação.</p>
        <UFormField label="E-mail" required>
          <UInput v-model="email" class="w-full" type="email" autocomplete="email" maxlength="254" required />
        </UFormField>
        <UAlert v-if="error" color="error" :title="error" role="alert" />
        <UButton type="submit" :loading="pending" block>Enviar link</UButton>
      </form>
      <UAlert v-else color="success" title="Confira sua caixa de entrada" description="Se houver uma conta ativa com esse e-mail, você receberá o link para definir uma nova senha." role="status" />
      <UButton class="mt-4" to="/login" variant="link" block>Voltar ao login</UButton>
    </UCard>
  </main>
</template>
