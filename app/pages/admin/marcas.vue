<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

// Keep brand mutations out of Nitro's route-union inference.
const requestBrand = $fetch as unknown as (
  url: string,
  options: { method: 'POST' | 'PUT' | 'DELETE', body?: { name: string } },
) => Promise<unknown>

const { data: brands, status, refresh } = await useFetch('/api/admin/brands')
const newName = ref('')
const editingId = ref<string>()
const editName = ref('')
const pending = ref(false)
const error = ref('')
const deleteTarget = ref<{ id: string, name: string }>()
const showDelete = ref(false)

function edit(brand: { id: string, name: string }) {
  editingId.value = brand.id
  editName.value = brand.name
  error.value = ''
}

function cancelEdit() {
  editingId.value = undefined
}

async function mutate(action: () => Promise<unknown>, after: () => void) {
  if (pending.value) return
  pending.value = true
  error.value = ''
  try {
    await action()
    after()
    await refresh()
  } catch (failure) {
    const response = failure as { data?: { message?: string }, statusCode?: number }
    error.value = response.statusCode === 409
      ? response.data?.message ?? 'A marca está em uso ou o nome já existe.'
      : 'Não foi possível alterar a marca. Confira o nome e tente novamente.'
  } finally {
    pending.value = false
  }
}

async function createBrand() {
  const name = newName.value.trim()
  if (!name) return
  await mutate(() => requestBrand('/api/admin/brands', { method: 'POST', body: { name } }), () => {
    newName.value = ''
  })
}

async function saveEdit(id: string) {
  const name = editName.value.trim()
  if (!name) return
  await mutate(() => requestBrand(`/api/admin/brands/${id}`, { method: 'PUT', body: { name } }), cancelEdit)
}

function askDelete(brand: { id: string, name: string }) {
  deleteTarget.value = brand
  showDelete.value = true
}

async function confirmDelete() {
  const id = deleteTarget.value?.id
  if (!id) return
  await mutate(() => requestBrand(`/api/admin/brands/${id}`, { method: 'DELETE' }), () => {
    if (editingId.value === id) cancelEdit()
  })
  showDelete.value = false
}
</script>

<template>
  <h1 class="text-2xl font-semibold">Marcas</h1>
  <section class="admin-panel">
    <UAlert v-if="error" color="error" :title="error" role="alert" />
    <UAlert v-if="status === 'error'" color="error" title="Não foi possível carregar as marcas." />
    <p v-else-if="status === 'pending'">Carregando…</p>
    <table class="w-full text-left text-sm">
      <thead><tr><th scope="col" class="p-2">Nome</th><th scope="col" class="p-2 text-end">Ações</th></tr></thead>
      <tbody>
        <tr v-for="brand in brands" :key="brand.id" class="border-t border-default">
          <td colspan="2" v-if="editingId === brand.id" class="p-2">
            <form class="flex flex-wrap gap-2" @submit.prevent="saveEdit(brand.id)">
              <UInput v-model="editName" aria-label="Nome da marca" maxlength="100" required :disabled="pending" />
              <UButton type="submit" :disabled="pending || !editName.trim()">Salvar</UButton>
              <UButton type="button" color="neutral" variant="ghost" :disabled="pending" @click="cancelEdit">Cancelar</UButton>
            </form>
          </td>
          <template v-else>
            <td class="p-2">{{ brand.name }}</td>
            <td class="p-2 text-end">
              <UDropdownMenu :modal="false" :items="[
                { label: 'Editar', icon: 'i-lucide-pencil', onSelect: () => edit(brand) },
                { label: 'Apagar', icon: 'i-lucide-trash-2', color: 'error', onSelect: () => askDelete(brand) },
              ]" :content="{ align: 'end' }">
                <UButton type="button" icon="i-lucide-ellipsis-vertical" color="neutral" variant="ghost"
                  :aria-label="`Ações de ${brand.name}`" :disabled="pending" />
              </UDropdownMenu>
            </td>
          </template>
        </tr>
        <tr class="border-t border-default">
          <td colspan="2" class="p-2">
            <form class="flex flex-wrap gap-2" @submit.prevent="createBrand">
              <UInput v-model="newName" aria-label="Nova marca" placeholder="Nova marca" maxlength="100" required :disabled="pending" />
              <UButton type="submit" icon="i-lucide-plus" :disabled="pending || !newName.trim()">Adicionar</UButton>
            </form>
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  <UModal v-model:open="showDelete" title="Apagar marca" :description="`Apagar ${deleteTarget?.name ?? 'esta marca'}?`" :dismissible="!pending" :close="!pending">
    <template #footer>
      <UButton color="neutral" variant="ghost" :disabled="pending" @click="void (showDelete = false)">Cancelar</UButton>
      <UButton color="error" :loading="pending" @click="confirmDelete">Apagar marca</UButton>
    </template>
  </UModal>
</template>
