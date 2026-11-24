<script setup lang="ts">
defineProps<{
  brands: { id: string, name: string }[]
}>()

const selected = defineModel<string | undefined>()
</script>

<template>
  <div v-if="brands.length" role="group" aria-label="Filtrar por marca" class="mt-4 flex flex-wrap items-center justify-center gap-2">
    <UButton type="button" size="sm" :variant="selected ? 'outline' : 'solid'" :aria-pressed="!selected"
      @click="void (selected = undefined)">
      Todas as marcas
    </UButton>
    <UButton v-for="brand in brands" :key="brand.id" type="button" size="sm"
      :variant="selected === brand.id ? 'solid' : 'outline'" :aria-pressed="selected === brand.id"
      @click="void (selected = brand.id)">
      {{ brand.name }}
    </UButton>
  </div>
</template>
