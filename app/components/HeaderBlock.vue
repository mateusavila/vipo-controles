<script setup lang="ts">
defineProps<{
  noMargin?: boolean
}>()
</script>

<template>
  <header class="relative flex flex-wrap items-center content-center justify-between w-full h-20 bg-[#301e10] lg:px-10 sx:px-4 px-2.5" :class="[noMargin ? 'mb-0' : 'mb-10']">
    <slot />
  </header>
</template>
