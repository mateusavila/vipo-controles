<script setup lang="ts">
import type { ToggleGroupItem } from '@nuxt/ui';

const search = defineModel<string>({ required: true })
const template = defineModel<string>('template', { required: true })

const items = ref<ToggleGroupItem[]>([
  {
    value: 'grid',
    icon: 'i-lucide-layout-grid',
    'aria-label': 'Grade'
  },
  {
    value: 'carousel',
    icon: 'i-lucide-gallery-horizontal',
    'aria-label': 'Carrossel'
  },
])
</script>

<template>
  <div class="w-full flex justify-between items-center gap-5">
    <input type="search" name="search" id="search" v-model="search" class="searchbox bg-no-repeat w-[calc(100%-100px)] block bg-white border-slate-200 border-2 rounded-[8px] pl-10 pr-6 py-3 bg-position-[10px_center] bg-size-[24px_auto]" maxlength="160" aria-label="Buscar por código, marca ou modelo" placeholder="Busque por código, marca ou modelo">
    <div class="w-20">
      <UToggleGroup v-model="template" :items="items" size="xl" color="neutral" />
    </div>
  </div>
</template>

<style>
.searchbox {
  background-image: url('/search.svg');
}
</style>
