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
  return { name: '', vipoCode: '', category: 'tv', originalRemoteCode: '', notes: '', active: true, brandIds: [], models: [] }
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
      brandIds: control.brands.map(brand => brand.id),
      models: [...control.models],
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
      <div class="flex items-stretch gap-2">
        <UInput v-model="search" class="min-w-0 flex-1" maxlength="160" aria-label="Buscar controles"
          placeholder="Nome, marca, modelo ou código">
          <template #trailing>
            <UButton v-if="search || appliedSearch" type="button" icon="i-lucide-x" size="xs"
              color="neutral" variant="ghost" aria-label="Limpar busca" @click="resetFilters" />
          </template>
        </UInput>
        <UButton type="submit" icon="i-lucide-search">Buscar</UButton>
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
              <th scope="col" class="whitespace-nowrap p-2"># Vipo</th>
              <th scope="col" class="p-2">Nome</th>
              <th scope="col" class="p-2">Aparelhos compatíveis</th>
              <th scope="col" class="p-2 text-end">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data.items" :key="item.id" class="border-t border-default">
              <td class="p-2">{{ item.vipoCode }}</td>
              <td class="min-w-44 p-2">
                <div class="flex items-center gap-2">
                  <UIcon :name="item.active ? 'i-lucide-check' : 'i-lucide-minus'" aria-hidden="true"
                    class="size-4 shrink-0" :class="item.active ? 'text-success' : 'text-muted'" />
                  <span class="sr-only">{{ item.active ? 'Ativo' : 'Inativo' }}</span>
                  <IconCategory :item />
                  <button type="button" class="cursor-pointer rounded text-start font-medium hover:underline"
                    :disabled="loadingEditor" @click="editControl(item.id)">{{ item.name }}</button>
                </div>
              </td>
              <td class="p-2">
                <div>{{ item.brands.map(brand => brand.name).join(', ') || '—' }}</div>
                <div v-if="item.models.length" class="text-muted">{{ item.models.join(', ') }}</div>
              </td>
              <td class="p-2 text-end">
                <UDropdownMenu :modal="false" :items="[
                  { label: 'Editar', icon: 'i-lucide-pencil', onSelect: () => editControl(item.id) },
                  { label: 'Apagar', icon: 'i-lucide-trash-2', color: 'error', onSelect: () => askDelete(item) },
                ]" :content="{ align: 'end' }">
                  <UButton type="button" icon="i-lucide-ellipsis-vertical" color="neutral" variant="ghost"
                    :aria-label="`Ações de ${item.name}`" :disabled="loadingEditor" />
                </UDropdownMenu>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <UPagination v-if="data && data.total > pageSize" v-model:page="page" :total="data.total" :items-per-page="pageSize" />
    </section>

    <UModal v-model:open="showEditor" :title="editingId ? 'Editar controle' : 'Novo controle'" :dismissible="!saving" :close="!saving" :ui="{ content: 'max-w-4xl' }">
      <template #body>
        <form class="space-y-4" @submit.prevent="save">
          <fieldset :disabled="saving" class="grid items-start gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <div class="w-full min-w-0 max-w-72 md:max-w-none">
              <UFormField label="Foto">
                <div v-if="photoUrl && !removePhoto && !file" class="mb-2 space-y-2">
                  <img :src="photoUrl" alt="Foto atual do controle" class="aspect-[3/4] w-full rounded-lg bg-elevated object-contain" />
                  <UButton type="button" size="sm" color="neutral" variant="ghost" @click="void (removePhoto = true)">Remover foto atual</UButton>
                </div>
                <UButton v-if="removePhoto && !file" type="button" size="sm" color="neutral" variant="ghost" @click="void (removePhoto = false)">Manter foto atual</UButton>
                <UFileUpload v-model="file" accept="image/jpeg,image/png,image/webp,image/avif"
                  :label="photoUrl ? 'Escolher nova foto' : 'Escolher foto'"
                  description="JPG, PNG, WebP ou AVIF de até 750 KiB" layout="grid" class="w-full"
                  :ui="{ base: photoUrl && !removePhoto && !file ? '' : 'aspect-[3/4]', fileLeadingAvatar: '[&_img]:object-contain' }" />
              </UFormField>

            </div>
            <div class="min-w-0 space-y-4">
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
                <UFormField v-else label="Marcas">
                  <USelectMenu v-model="form.brandIds" :items="brandOptions" value-key="value" multiple
                    :disabled="!brandOptions.length" placeholder="Selecione as marcas" class="w-full" />
                </UFormField>
                <p v-if="!brandsError && !brandOptions.length" class="text-sm text-muted">
                  Cadastre uma marca em <NuxtLink to="/admin/marcas" class="underline">Marcas</NuxtLink> para selecioná-la aqui.
                </p>

                <UFormField label="Modelos ou linhas" description="Pressione Enter após digitar cada modelo.">
                  <UInputTags v-model="form.models" :max="100" :max-length="140" add-on-blur
                    placeholder="Ex.: Sky-7067" class="w-full" />
                </UFormField>
              </section>

              <UFormField label="Observações"><UTextarea v-model="form.notes" class="w-full" maxlength="2000" /></UFormField>
              <USwitch v-model="form.active" label="Exibir no catálogo público" />
            </div>
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
