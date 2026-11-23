<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin' })

const { data, error, status } = await useFetch('/api/admin/dashboard')
</script>

<template>
  <h1 class="text-2xl font-semibold">Dashboard</h1>
  <UAlert v-if="error" title="Não foi possível carregar o relatório." color="error" />
  <p v-else-if="status === 'pending'">Carregando…</p>
  <div v-else-if="data" class="space-y-5">
    <section class="admin-panel">
      <h2 class="text-lg font-semibold">Controles mais encontrados</h2>
      <p class="text-sm text-muted">Cada busca conta uma vez para cada controle encontrado, mesmo que ele apareça em outra página de resultados.</p>
      <p v-if="!data.controls.length">Ainda não há buscas com resultados.</p>
      <div v-else class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead>
            <tr><th class="p-2">Código Vipo</th><th class="p-2">Controle</th><th class="p-2">Buscas</th><th class="p-2">Principais termos</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in data.controls" :key="row.id" class="border-t border-default">
              <td class="p-2">{{ row.vipoCode }}</td>
              <td class="p-2">{{ row.name }}</td>
              <td class="p-2">{{ row.searchCount }}</td>
              <td class="p-2">
                <ul class="flex flex-wrap gap-1">
                  <li v-for="item in row.terms" :key="item.term">
                    <UBadge color="neutral" variant="soft">{{ item.term }} ({{ item.searchCount }})</UBadge>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <section class="admin-panel mt-2">
      <h2 class="text-lg font-semibold">Termos mais buscados</h2>
      <p v-if="!data.terms.length">As buscas aparecerão aqui conforme o catálogo for consultado.</p>
      <div v-else class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead>
            <tr><th class="p-2">Termo</th><th class="p-2">Buscas</th><th class="p-2">Sem resultado</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in data.terms" :key="row.id" class="border-t border-default">
              <td class="p-2">{{ row.term }}</td>
              <td class="p-2">{{ row.searchCount }}</td>
              <td class="p-2">{{ row.zeroResultCount }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>
