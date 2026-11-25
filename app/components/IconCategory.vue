<script setup lang="ts">
import type { Control } from '~~/shared/types'

const props = defineProps<{
  item: Control
}>()

const categories = {
  tv: { label: 'TV', icon: 'i-lucide-tv' },
  ac: { label: 'Ar-condicionado', icon: 'i-lucide-air-vent' },
  receptor: { label: 'Receptor', icon: 'i-lucide-satellite-dish' },
} satisfies Record<Control['category'], { label: string; icon: string }>

const category = computed(() => categories[props.item.category])
</script>

<template>
  <UTooltip :text="category.label">
    <span class="inline-flex shrink-0 rounded text-muted" tabindex="0">
      <UIcon :name="category.icon" class="size-4" aria-hidden="true" />
      <span class="sr-only">{{ category.label }}</span>
    </span>
  </UTooltip>
</template>
