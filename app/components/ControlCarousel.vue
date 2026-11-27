<script setup lang="ts">
import type { Control, ControlsResponse } from '~~/shared/types'

const props = defineProps<{
  search: string
  brandId?: string
}>()

const viewport = useTemplateRef<HTMLDivElement>('viewport')
const items = ref<Control[]>([])
const index = ref(0)
const nextPage = ref(1)
const total = ref(0)
const pending = ref(false)
const error = ref(false)
const finished = ref(false)

let generation = 0
let resizeObserver: ResizeObserver | undefined

const request = $fetch as unknown as (
  url: string,
  options: { query: object, retry: number },
) => Promise<ControlsResponse>

async function load() {
  if (pending.value || finished.value) return

  const version = generation
  pending.value = true
  error.value = false

  try {
    const result = await request('/api/controls', {
      query: {
        q: props.search || undefined,
        brandId: props.brandId,
        page: nextPage.value,
        pageSize: 6,
      },
      retry: 0,
    })

    if (version !== generation) return

    const known = new Set(items.value.map(item => item.id))
    items.value.push(...result.items.filter(item => !known.has(item.id)))

    total.value = result.total
    finished.value =
      result.items.length < result.pageSize
      || nextPage.value * result.pageSize >= result.total

    nextPage.value++
  } catch {
    if (version === generation) error.value = true
  } finally {
    if (version === generation) pending.value = false
  }
}

function scrollToItem(position: number, behavior: ScrollBehavior = 'smooth') {
  const element = viewport.value
  if (!element) return

  element.scrollTo({
    left: position * element.clientWidth,
    behavior,
  })
}

function onScroll() {
  const element = viewport.value
  if (!element?.clientWidth) return

  index.value = Math.max(
    0,
    Math.min(
      items.value.length - 1,
      Math.round(element.scrollLeft / element.clientWidth),
    ),
  )

  // Carrega mais resultados antes de chegar ao último controle.
  if (items.value.length - index.value <= 3 && !error.value) {
    void load()
  }
}

async function next() {
  const version = generation
  const target = index.value + 1

  if (target >= items.value.length) {
    await load()
    await nextTick()
  }

  if (version === generation && target < items.value.length) {
    scrollToItem(target)
  }
}

function previous() {
  scrollToItem(Math.max(0, index.value - 1))
}

watch(
  () => [props.search, props.brandId],
  () => {
    generation++
    items.value = []
    index.value = 0
    nextPage.value = 1
    total.value = 0
    pending.value = false
    error.value = false
    finished.value = false

    scrollToItem(0, 'instant')
    void load()
  },
  { immediate: true },
)

onMounted(() => {
  if (!viewport.value) return

  resizeObserver = new ResizeObserver(() => {
    scrollToItem(index.value, 'instant')
  })

  resizeObserver.observe(viewport.value)
})

onBeforeUnmount(() => {
  generation++
  resizeObserver?.disconnect()
})
</script>

<template>
  <section
    class="mt-6 min-w-0 w-full max-w-full space-y-4 overflow-hidden"
    aria-label="Carrossel de controles"
    aria-roledescription="carrossel"
  >
    <div
      v-show="items.length"
      ref="viewport"
      class="carousel-viewport flex min-w-0 w-full max-w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
      tabindex="0"
      aria-label="Deslize para navegar pelos controles"
      @scroll.passive="onScroll"
      @keydown.left.prevent="previous"
      @keydown.right.prevent="next"
    >
      <div
        v-for="(item, position) in items"
        :key="item.id"
        class="w-full min-w-0 flex-none snap-start snap-always p-1"
        role="group"
        aria-roledescription="slide"
        :aria-label="`${position + 1} de ${total}`"
      >
        <Carouseltem :data="item" />
      </div>
    </div>

    <USkeleton
      v-if="pending && !items.length"
      class="h-80 w-full"
    />

    <UEmpty
      v-else-if="!items.length && !error"
      title="Nenhum controle encontrado"
    />

    <div
      v-if="error"
      role="alert"
      class="flex items-center gap-2"
    >
      <span>Não foi possível carregar os controles.</span>
      <UButton variant="outline" @click="load">
        Tentar novamente
      </UButton>
    </div>

    <div
      v-if="items.length"
      class="flex items-center justify-center gap-4"
    >
      <UButton
        icon="i-lucide-chevron-left"
        aria-label="Controle anterior"
        :disabled="index === 0"
        @click="previous"
      />

      <span aria-live="polite">
        {{ index + 1 }} de {{ total }}
      </span>

      <UButton
        icon="i-lucide-chevron-right"
        aria-label="Próximo controle"
        :loading="pending"
        :disabled="index + 1 >= items.length && finished"
        @click="next"
      />
    </div>
  </section>
</template>

<style scoped>
.carousel-viewport {
  scrollbar-width: none;
}

.carousel-viewport::-webkit-scrollbar {
  display: none;
}
</style>
