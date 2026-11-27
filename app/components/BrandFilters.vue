<script setup lang="ts">
defineProps<{
  brands: { id: string, name: string }[]
}>()

const selected = defineModel<string | undefined>()
</script>

<template>
  <div v-if="brands.length" role="group" aria-label="Filtrar por marca" class="lg:mt-10 mt-6 flex flex-wrap items-center justify-center gap-2">
    <UButton class="sm:w-full sm:justify-center" type="button" color="neutral" :variant="selected ? 'outline' : 'solid'" :aria-pressed="!selected"
      @click="void (selected = undefined)">
      Todas as marcas
    </UButton>
    <UButton class="sm:w-full sm:justify-center" v-for="brand in brands" color="neutral" :key="brand.id" type="button" :variant="selected === brand.id ? 'solid' : 'outline'" :aria-pressed="selected === brand.id"
      @click="void (selected = brand.id)">
      {{ brand.name }}
    </UButton>
  </div>
</template>
