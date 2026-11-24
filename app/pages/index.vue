<script setup lang="ts">
import type { Control } from '~~/shared/types';

useHead({
  title: 'Busca mostruário • Vipo Eletrônica'
})
useSeoMeta({
  description: 'Busque aqui no nosso mostruário.',
})

const search = ref('')

const { data, pending, error, refresh } = await useFetch('/api/controls')
</script>

<template>
  <NuxtLayout name="main">
    <Header />
    <main class="w-almost-full-mobile mx-auto py-10 min-h-dvh">
      <BigSearch v-model="search" />
      <template v-if="pending">
        <Grid>
          <USkeleton v-for="i in 6" :key="i" class="w-full h-50" />
        </Grid>
      </template>
      <template v-else>
        <template v-if="data && data.items">
          <Grid>
            <ControlItem v-for="item, index in data.items" :key="index" :data="item" />
          </Grid>
        </template>
        <template v-else>
          <UEmpty title="Nenhum controle encontrado" />
        </template>
      </template>
    </main>
    <Footer />
  </NuxtLayout>
</template>
