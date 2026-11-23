<script setup lang="ts">
import { photoMaxBytes, remoteFields, type RemoteFields } from '~~/shared/catalog'

definePageMeta({ layout: 'admin', middleware: 'admin' })

const pageSize = 20
const page = ref(1)
const search = ref('')
const appliedSearch = ref('')
const query = computed(() => ({ q: appliedSearch.value, page: page.value, pageSize }))
const { data, status, error, refresh } = await useFetch('/api/admin/controls', { query })
const { data: brands, error: brandsError, refresh: refreshBrands } = await useFetch('/api/admin/brands')
const brandOptions = computed(() => (brands.value ?? []).map(brand => ({ label: brand.name, value: brand.id })))

const categories = [{ label: 'TV', value: 'tv' }, { label: 'Ar-condicionado', value: 'ac' }]
const showEditor = ref(false)
const loadingEditor = ref(false)
const saving = ref(false)
const deleting = ref(false)
const editingId = ref<string>()
const photoUrl = ref<string | null>(null)
const file = shallowRef<File>()
const removePhoto = ref(false)
const submitError = ref('')
const actionError = ref('')
const savedMessage = ref('')
const deleteTarget = ref<{ id: string, name: string }>()
const showDelete = ref(false)
const form = reactive<RemoteFields>(emptyForm())

function emptyForm(): RemoteFields {
  return { name: '', vipoCode: '', category: 'tv', originalRemoteCode: '', notes: '', active: true, compatibilities: [] }
}

function applyFilters() {
  page.value = 1
  appliedSearch.value = search.value.trim()
}

function resetFilters() {
  search.value = ''
  applyFilters()
}

function createControl() {
  Object.assign(form, emptyForm())
  editingId.value = undefined
  photoUrl.value = null
  file.value = undefined
  removePhoto.value = false
  submitError.value = ''
  actionError.value = ''
  savedMessage.value = ''
  showEditor.value = true
}

function errorMessage(error: unknown, fallback: string) {
  const request = error as { statusCode?: number }
  if (request.statusCode === 409) return 'Já existe um controle com esse código Vipo.'
  if (request.statusCode === 404) return 'Este controle já não está no catálogo.'
  if (request.statusCode === 400) return 'Revise os campos e confira o formato e o tamanho da foto.'
  return fallback
}

async function editControl(id: string) {
  loadingEditor.value = true
  actionError.value = ''
  try {
    const control = await $fetch(`/api/admin/controls/${id}`)
    createControl()
    editingId.value = id
    photoUrl.value = control.photoUrl
    Object.assign(form, {
      name: control.name,
      vipoCode: control.vipoCode,
      category: control.category,
      originalRemoteCode: control.originalRemoteCode ?? '',
      notes: control.notes ?? '',
      active: control.active,
      compatibilities: control.compatibilities.map(item => ({ brandId: item.brand.id, model: item.model })),
    })
  } catch (error) {
    actionError.value = errorMessage(error, 'Não foi possível abrir o controle.')
  } finally {
    loadingEditor.value = false
  }
}

async function save() {
  if (saving.value) return
  submitError.value = ''
  const validated = remoteFields.safeParse(form)
  if (!validated.success) {
    const issue = validated.error.issues[0]
    submitError.value = issue?.message ?? 'Confira os dados do controle.'
    return
  }
  if (file.value && file.value.size > photoMaxBytes) {
    submitError.value = 'A foto deve ter até 750 KiB.'
    return
  }

  saving.value = true
  try {
    const photo = file.value
      ? await fileToBase64(file.value)
      : removePhoto.value ? null : undefined
    const body = { ...validated.data, photo }
    if (editingId.value) await $fetch(`/api/admin/controls/${editingId.value}`, { method: 'PUT', body })
    else await $fetch('/api/admin/controls', { method: 'POST', body })
    showEditor.value = false
    savedMessage.value = 'Controle salvo.'
    await refresh()
  } catch (error) {
    submitError.value = errorMessage(error, 'Não foi possível salvar o controle.')
  } finally {
    saving.value = false
  }
}

function fileToBase64(image: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = () => reject(reader.error)
    reader.onload = () => resolve(String(reader.result).split(',')[1] ?? '')
    reader.readAsDataURL(image)
  })
}

function askDelete(control: { id: string, name: string }) {
  deleteTarget.value = control
  actionError.value = ''
  savedMessage.value = ''
  showDelete.value = true
}

async function deleteSelected() {
  if (!deleteTarget.value || deleting.value) return
  deleting.value = true
  actionError.value = ''
  try {
    await $fetch(`/api/admin/controls/${deleteTarget.value.id}`, { method: 'DELETE' })
    showDelete.value = false
    savedMessage.value = 'Controle apagado.'
    if (page.value > 1 && data.value?.items.length === 1) page.value--
    else await refresh()
  } catch (error) {
    showDelete.value = false
    actionError.value = errorMessage(error, 'Não foi possível apagar o controle.')
  } finally {
    deleting.value = false
  }
}
</script>

<template>
  <div class="space-y-5">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <h1 class="text-2xl font-semibold">Controles</h1>
      <UButton icon="i-lucide-plus" :disabled="loadingEditor" @click="createControl">Novo controle</UButton>
    </div>

    <form class="admin-panel" @submit.prevent="applyFilters">
      <UFormField label="Buscar controles">
        <UInput v-model="search" class="w-full" type="search" maxlength="160" placeholder="Nome, marca, modelo ou código" />
      </UFormField>
      <div class="flex gap-2">
        <UButton type="submit" icon="i-lucide-search">Buscar</UButton>
        <UButton type="button" color="neutral" variant="ghost" @click="resetFilters">Limpar</UButton>
      </div>
    </form>

    <UAlert v-if="actionError" color="error" :title="actionError" role="alert" />
    <p v-if="savedMessage" role="status" class="text-sm text-success">{{ savedMessage }}</p>

    <section class="admin-panel" aria-label="Lista de controles">
      <UAlert v-if="error" color="error" title="Não foi possível carregar os controles." />
      <p v-else-if="status === 'pending'">Carregando…</p>
      <p v-else-if="!data?.items.length">Nenhum controle encontrado.</p>
      <div v-else class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead>
            <tr>
              <th class="p-2">Código Vipo</th><th class="p-2">Nome</th><th class="p-2">Categoria</th>
              <th class="p-2">Aparelhos compatíveis</th><th class="p-2">Status</th><th class="p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data.items" :key="item.id" class="border-t border-default">
              <td class="p-2">{{ item.vipoCode }}</td>
              <td class="p-2 font-medium">{{ item.name }}</td>
              <td class="p-2">{{ item.category === 'tv' ? 'TV' : 'Ar-condicionado' }}</td>
              <td class="p-2">
                {{ item.compatibilities.map(model => [model.brand.name, model.model].join(' ')).join(', ') || '—' }}
              </td>
              <td class="p-2"><UBadge :color="item.active ? 'success' : 'neutral'" variant="soft">{{ item.active ? 'Ativo' : 'Inativo' }}</UBadge></td>
              <td class="p-2">
                <div class="flex gap-1">
                  <UButton size="sm" variant="ghost" :disabled="loadingEditor" @click="editControl(item.id)">Editar</UButton>
                  <UButton size="sm" variant="ghost" color="error" :disabled="loadingEditor" @click="askDelete(item)">Apagar</UButton>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <UPagination v-if="data && data.total > pageSize" v-model:page="page" :total="data.total" :items-per-page="pageSize" />
    </section>

    <UModal v-model:open="showEditor" :title="editingId ? 'Editar controle' : 'Novo controle'" :dismissible="!saving" :close="!saving">
      <template #body>
        <form class="space-y-4" @submit.prevent="save">
          <fieldset :disabled="saving" class="space-y-4">
            <UFormField label="Nome" required>
              <UInput v-model="form.name" class="w-full" maxlength="160" required />
            </UFormField>
            <div class="grid gap-3 sm:grid-cols-2">
              <UFormField label="Código Vipo" required>
                <UInput v-model="form.vipoCode" class="w-full" maxlength="60" required />
              </UFormField>
              <UFormField label="Categoria" required>
                <USelect v-model="form.category" :items="categories" class="w-full" />
              </UFormField>
            </div>

            <UFormField label="Código do controle original">
              <UInput v-model="form.originalRemoteCode" class="w-full" maxlength="80" />
            </UFormField>
            <section class="space-y-2" aria-label="Aparelhos compatíveis">
              <h3 class="text-sm font-semibold">Aparelhos compatíveis</h3>
              <div v-if="brandsError" class="flex flex-wrap items-center gap-2">
                <p class="text-sm text-error">Não foi possível carregar as marcas.</p>
                <UButton type="button" size="sm" variant="ghost" @click="() => refreshBrands()">Tentar novamente</UButton>
              </div>
              <p v-else-if="!brandOptions.length" class="text-sm text-muted">
                Cadastre uma marca em <NuxtLink to="/admin/marcas" class="underline">Marcas</NuxtLink> para adicionar aparelhos.
              </p>
              <div v-for="(item, index) in form.compatibilities" :key="index" class="grid grid-cols-[1fr_1fr_auto] items-end gap-2">
                <UFormField label="Marca" required><USelect v-model="item.brandId" :items="brandOptions" placeholder="Selecione" class="w-full" required /></UFormField>
                <UFormField label="Modelo ou linha" required><UInput v-model="item.model" class="w-full" maxlength="140" required /></UFormField>
                <UButton type="button" icon="i-lucide-trash-2" color="neutral" variant="ghost" :aria-label="`Remover aparelho ${index + 1}`" @click="void (form.compatibilities.splice(index, 1))" />
              </div>
              <UButton type="button" color="neutral" variant="outline" icon="i-lucide-plus" :disabled="!brandOptions.length || form.compatibilities.length >= 100" @click="void (form.compatibilities.push({ brandId: '', model: '' }))">Adicionar aparelho</UButton>
            </section>

            <UFormField label="Foto">
              <div v-if="photoUrl && !removePhoto && !file" class="mb-2 space-y-2">
                <img :src="photoUrl" alt="Foto atual do controle" class="max-h-40 max-w-full rounded object-contain" />
                <UButton type="button" size="sm" color="neutral" variant="ghost" @click="void (removePhoto = true)">Remover foto atual</UButton>
              </div>
              <UButton v-if="removePhoto && !file" type="button" size="sm" color="neutral" variant="ghost" @click="void (removePhoto = false)">Manter foto atual</UButton>
              <UFileUpload v-model="file" accept="image/jpeg,image/png,image/webp,image/avif" :label="photoUrl ? 'Escolher nova foto' : 'Escolher foto'" description="JPG, PNG, WebP ou AVIF de até 750 KiB" class="w-full" />
            </UFormField>

            <UFormField label="Observações"><UTextarea v-model="form.notes" class="w-full" maxlength="2000" /></UFormField>
            <USwitch v-model="form.active" label="Exibir no catálogo público" />
          </fieldset>
          <UAlert v-if="submitError" color="error" :title="submitError" role="alert" />
          <div class="flex justify-end gap-2">
            <UButton type="button" color="neutral" variant="ghost" :disabled="saving" @click="void (showEditor = false)">Cancelar</UButton>
            <UButton type="submit" :loading="saving">Salvar</UButton>
          </div>
        </form>
      </template>
    </UModal>

    <UModal v-model:open="showDelete" title="Apagar controle" :dismissible="!deleting" :close="!deleting"
      :description="`O controle ${deleteTarget?.name ?? ''} e sua foto serão apagados permanentemente.`">
      <template #footer>
        <UButton color="neutral" variant="ghost" :disabled="deleting" @click="void (showDelete = false)">Cancelar</UButton>
        <UButton color="error" :loading="deleting" @click="deleteSelected">Apagar controle</UButton>
      </template>
    </UModal>
  </div>
</template>
