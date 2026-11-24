<script setup lang="ts">
const search = defineModel<string>({ required: true })
</script>

<template>
  <input type="search" name="search" id="search" v-model="search" class="searchbox bg-no-repeat w-full block bg-white border-slate-200 border-2 rounded-[8px] md:text-[20px] pl-12 pr-6 md:py-5 py-4 bg-position-[10px_center]" maxlength="160" aria-label="Buscar por código, marca ou modelo" placeholder="Busque por código, marca ou modelo">
</template>

<style>
.searchbox {
  background-image: url('/search.svg');
}
</style>
