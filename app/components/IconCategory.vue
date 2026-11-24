<script setup lang="ts">
import type { Control } from '~~/shared/types';

defineProps<{
  item: Control
}>()
</script>

<template>
  <UTooltip :text="item.category === 'tv' ? 'TV' : 'Ar-condicionado'">
    <span class="inline-flex shrink-0 rounded text-muted" tabindex="0">
      <UIcon :name="item.category === 'tv' ? 'i-lucide-tv' : 'i-lucide-air-vent'" class="size-4" aria-hidden="true" />
      <span class="sr-only">{{ item.category === 'tv' ? 'TV' : 'Ar-condicionado' }}</span>
    </span>
  </UTooltip>
</template>
