<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })
const { user } = useUserSession()
const { data: members, status, refresh } = await useFetch('/api/admin/users', {
  immediate: user.value?.role === 'superadmin',
})
type Member = NonNullable<typeof members.value>[number]

const showForm = ref(false)
const editing = ref<Member>()
const name = ref('')
const email = ref('')
const target = ref<Member>()
const showDelete = ref(false)
const pending = ref(false)
const pageError = ref('')
const modalError = ref('')
const notice = ref('')

const request = $fetch as unknown as (
  url: string,
  options: { method: 'POST' | 'PATCH' | 'DELETE', body?: { name: string, email: string } | { blocked: boolean } },
) => Promise<unknown>

function openForm(member?: Member) {
  editing.value = member
  name.value = member?.name ?? ''
  email.value = member?.email ?? ''
  modalError.value = ''
  showForm.value = true
}

function askDelete(member: Member) {
  target.value = member
  modalError.value = ''
  showDelete.value = true
}

async function mutate(action: () => Promise<unknown>, message: string, modal = false) {
  if (pending.value) return false
  pending.value = true
  pageError.value = ''
  modalError.value = ''
  notice.value = ''
  try {
    await action()
    notice.value = message
    return true
  } catch (failure) {
    const response = failure as { data?: { message?: string } }
    const error = modal ? modalError : pageError
    error.value = response.data?.message ?? 'Não foi possível concluir a ação.'
    return false
  } finally {
    // A delivery failure can leave a new member pending in the database.
    await refresh()
    pending.value = false
  }
}

async function save() {
  const member = editing.value
  const body = { name: name.value, email: email.value }
  const success = await mutate(
    () => member
      ? request(`/api/admin/users/${member.id}`, { method: 'PATCH', body })
      : request('/api/admin/users/invite', { method: 'POST', body }),
    member ? 'Dados do membro atualizados.' : `Convite enviado para ${body.email.trim().toLowerCase()}.`,
    true,
  )
  if (success) showForm.value = false
}

function resend({ name, email }: Member) {
  return mutate(
    () => request('/api/admin/users/invite', { method: 'POST', body: { name, email } }),
    `Convite reenviado para ${email}.`,
  )
}

function toggleAccess(member: Member) {
  return mutate(
    () => request(`/api/admin/users/${member.id}`, { method: 'PATCH', body: { blocked: !member.blocked } }),
    member.blocked ? 'Acesso desbloqueado.' : 'Acesso bloqueado.',
  )
}

async function confirmDelete() {
  const member = target.value
  if (!member) return
  const success = await mutate(
    () => request(`/api/admin/users/${member.id}`, { method: 'DELETE' }),
    'Membro apagado.',
    true,
  )
  if (success) showDelete.value = false
}
</script>

<template>
  <div class="flex flex-wrap items-center justify-between gap-2 mb-5">
    <h1 class="text-2xl font-semibold">Usuários</h1>
    <UButton v-if="user?.role === 'superadmin'" icon="i-lucide-plus" :disabled="pending" @click="openForm()">
      Convidar usuário
    </UButton>
  </div>

  <UAlert v-if="user?.role !== 'superadmin'" color="warning" title="Somente superadministradores podem gerenciar usuários." />
  <section v-else class="admin-panel">
    <UAlert v-if="pageError" color="error" :title="pageError" role="alert" />
    <UAlert v-if="notice" color="success" :title="notice" role="status" />
    <UAlert v-if="status === 'error'" color="error" title="Não foi possível carregar os usuários." />
    <p v-else-if="status === 'pending' && !members">Carregando…</p>
    <div v-else class="overflow-x-auto">
      <table class="w-full text-left text-sm">
        <thead>
          <tr>
            <th scope="col" class="p-2">Nome</th>
            <th scope="col" class="p-2">E-mail</th>
            <th scope="col" class="p-2">Status</th>
            <th scope="col" class="p-2 text-end">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in members" :key="member.id" class="border-t border-default">
            <td class="p-2">{{ member.name }}</td>
            <td class="p-2">{{ member.email }}</td>
            <td class="p-2">
              <UBadge v-if="member.blocked" color="error" variant="soft">Bloqueado</UBadge>
              <UBadge v-else-if="member.pending" color="warning" variant="soft">Pendente</UBadge>
              <UBadge v-else color="success" variant="soft">Ativo</UBadge>
            </td>
            <td class="p-2 text-end">
              <UDropdownMenu :modal="false" :content="{ align: 'end' }" :items="[
                { label: 'Editar', icon: 'i-lucide-pencil', onSelect: () => openForm(member) },
                { label: 'Reenviar convite', icon: 'i-lucide-mail', disabled: member.blocked || !member.pending, onSelect: () => resend(member) },
                { label: member.blocked ? 'Desbloquear acesso' : 'Bloquear acesso', icon: member.blocked ? 'i-lucide-unlock' : 'i-lucide-lock', onSelect: () => toggleAccess(member) },
                { label: 'Apagar', icon: 'i-lucide-trash-2', color: 'error', onSelect: () => askDelete(member) },
              ]">
                <UButton type="button" icon="i-lucide-ellipsis-vertical" color="neutral" variant="ghost"
                  :aria-label="`Ações de ${member.name}`" :disabled="pending" />
              </UDropdownMenu>
            </td>
          </tr>
          <tr v-if="!members?.length" class="border-t border-default">
            <td colspan="4" class="p-2 text-muted">Nenhum membro cadastrado.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <UModal v-model:open="showForm" :title="editing ? 'Editar usuário' : 'Convidar usuário'"
    :description="editing ? 'Atualize os dados do membro.' : 'O membro receberá um link para definir a senha.'"
    :dismissible="!pending" :close="!pending">
    <template #body>
      <form class="space-y-4" @submit.prevent="save">
        <UFormField label="Nome" required>
          <UInput v-model="name" class="w-full" autocomplete="name" maxlength="120" required :disabled="pending" />
        </UFormField>
        <UFormField label="E-mail" required>
          <UInput v-model="email" class="w-full" type="email" autocomplete="email" maxlength="254" required :disabled="pending" />
        </UFormField>
        <UAlert v-if="modalError" color="error" :title="modalError" role="alert" />
        <div class="flex justify-end gap-2">
          <UButton type="button" color="neutral" variant="ghost" :disabled="pending" @click="showForm = false">Cancelar</UButton>
          <UButton type="submit" :loading="pending">{{ editing ? 'Salvar' : 'Enviar convite' }}</UButton>
        </div>
      </form>
    </template>
  </UModal>

  <UModal v-model:open="showDelete" title="Apagar usuário" :description="`Apagar a conta de ${target?.name ?? 'este membro'}?`"
    :dismissible="!pending" :close="!pending">
    <template v-if="modalError" #body>
      <UAlert color="error" :title="modalError" role="alert" />
    </template>
    <template #footer>
      <UButton color="neutral" variant="ghost" :disabled="pending" @click="showDelete = false">Cancelar</UButton>
      <UButton color="error" :loading="pending" @click="confirmDelete">Apagar usuário</UButton>
    </template>
  </UModal>
</template>
