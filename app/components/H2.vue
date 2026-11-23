<script setup lang="ts">
defineProps<{
  title: string,
  color?: string,
  noMargin?: boolean
}>()
</script>

<template>
  <h2 class="font-headline md:text-[20px] text-[16px] font-bold" :class="[color ?? 'text-black', noMargin ? 'mb-0' : 'mb-5']">{{title}}</h2>
</template>
