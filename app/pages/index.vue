<script setup lang="ts">
useHead({
  title: 'Busca mostruário • Vipo Eletrônica'
})
useSeoMeta({
  description: 'Busque aqui no nosso mostruário.',
})

const search = ref('')
const template = ref('grid')
const carouselOpened = ref(false)
const appliedSearch = ref('')
const brandId = ref<string>()
const page = ref(1)
const track = ref(false)
const query = computed(() => ({
  q: appliedSearch.value || undefined,
  brandId: brandId.value,
  page: page.value,
}))

const [{ data, pending, error, refresh }, { data: brands, error: brandsError, refresh: refreshBrands }] = await Promise.all([
  useFetch('/api/controls', {
    key: 'public-catalog',
    query,
    watch: false,
    retry: 0,
    onRequest({ options }) {
      if (!track.value) return
      track.value = false
      options.query = { ...options.query, track: '1' }
    },
  }),
  useFetch('/api/brands'),
])

function loadControls(recordSearch = false) {
  track.value = recordSearch
  if (template.value === 'grid') return refresh()
  if (recordSearch) {
    return $fetch('/api/controls', {
      query: { q: appliedSearch.value || undefined, brandId: brandId.value, track: '1', pageSize: 1 },
      retry: 0,
    }).catch(() => {})
  }
  return Promise.resolve()
}

watch(template, value => {
  if (value === 'carousel') carouselOpened.value = true
  if (value === 'grid') void loadControls()
})

function submitSearch() {
  appliedSearch.value = search.value.trim()
  page.value = 1
  return loadControls(Boolean(appliedSearch.value || brandId.value))
}

function selectBrand(id: string | undefined) {
  if (id === brandId.value && !search.value && !appliedSearch.value && page.value === 1) return
  brandId.value = id
  search.value = ''
  appliedSearch.value = ''
  page.value = 1
  return loadControls(Boolean(id))
}

function changePage(value: number) {
  page.value = value
  return loadControls()
}

function clearEmptySearch(value: string) {
  if (value === '' && appliedSearch.value) {
    appliedSearch.value = ''
    page.value = 1
    return loadControls()
  }
}
</script>

<template>
  <NuxtLayout name="main">
    <Header />
    <main class="w-almost-full-mobile mx-auto lg:py-10 py-6 min-h-dvh">
      <form class="mx-auto flex max-w-7xl items-stretch gap-2" role="search" @submit.prevent="submitSearch">
        <BigSearch v-model="search" v-model:template="template" @update:model-value="clearEmptySearch" />
      </form>
      <div class="w-full min-w-0 mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_12.5rem] lg:gap-10 gap-6">
        <section class="min-w-0 w-full sm:order-1 order-2" aria-label="Resultados da busca" :aria-busy="pending">
          <template v-if="template === 'grid'">
            <Grid v-if="pending">
              <USkeleton v-for="i in 12" :key="i" class="h-58 w-full" />
            </Grid>
            <div v-else-if="error" class="mt-6 text-center">
              <UAlert color="error" title="Não foi possível carregar os controles." />
              <UButton type="button" class="mt-3" variant="outline" @click="() => loadControls()">Tentar novamente</UButton>
            </div>
            <Grid v-else-if="data?.items.length">
              <ControlItem v-for="item in data.items" :key="item.id" :data="item" />
            </Grid>
            <UEmpty v-else title="Nenhum controle encontrado" class="mt-6" />

            <div v-if="data && data.total > data.pageSize && !error" class="mt-8 flex max-w-full justify-center overflow-x-auto">
              <UPagination :page="page" :total="data.total" :items-per-page="data.pageSize"
                :sibling-count="1" :disabled="pending" @update:page="changePage">
                <template #first>
                  <UButton icon="i-lucide-chevrons-left" color="neutral" variant="outline"
                    aria-label="Primeira página" :disabled="pending || page <= 1" />
                </template>
                <template #prev>
                  <UButton icon="i-lucide-chevron-left" color="neutral" variant="outline"
                    aria-label="Página anterior" :disabled="pending || page <= 1" />
                </template>
                <template #next>
                  <UButton icon="i-lucide-chevron-right" color="neutral" variant="outline"
                    aria-label="Próxima página" :disabled="pending || page >= Math.ceil(data.total / data.pageSize)" />
                </template>
                <template #last>
                  <UButton icon="i-lucide-chevrons-right" color="neutral" variant="outline"
                    aria-label="Última página" :disabled="pending || page >= Math.ceil(data.total / data.pageSize)" />
                </template>
              </UPagination>
            </div>
          </template>
          <div v-if="carouselOpened" v-show="template === 'carousel'">
            <ControlCarousel :search="appliedSearch" :brand-id="brandId" />
          </div>
        </section>
        <aside class="min-w-0 w-full sm:order-2 order-1">
          <template v-if="brands">
            <BrandFilters :model-value="brandId" :brands="brands" @update:model-value="selectBrand" />
          </template>
          <template v-else>
            <div class="mt-4 flex items-center justify-center gap-2 text-sm">
              <span>Não foi possível carregar as marcas.</span>
              <UButton type="button" size="xs" variant="ghost" @click="() => refreshBrands()">Tentar novamente</UButton>
            </div>
          </template>
        </aside>
      </div>
    </main>
    <Footer />
  </NuxtLayout>
</template>
