<script setup lang="ts">
defineProps<{
  beforeTitle: string,
  title: string
}>()
</script>

<template>
  <h1 class="font-headline text-center text-white">
    <span class="lg:text-[24px] xs:text-[18px] text-[16px] xs:leading-8 leading-7">{{beforeTitle}}</span><br>
    <span class="md:text-[80px] sm:text-[60px] xs:text-[40px] text-[30px] font-bold md:leading-23 sm:leading-15 leading-10">{{title}}</span></h1>
</template>
