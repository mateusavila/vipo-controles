<script setup lang="ts">
import type { Control } from '~~/shared/types';

defineProps<{
  data: Control
}>()

const limit = shallowRef(10)
</script>

<template>
  <div class="w-full min-w-0 flex bg-white rounded-[12px] shadow flex-wrap">
    <div class="w-full flex justify-center p-4 bg-slate-100 sm:rounded-t-none rounded-t-[12px]">
      <img
        v-if="data.photoUrl"
        :src="data.photoUrl"
        :alt="data.name"
        class="w-full h-auto max-h-100 block sm:max-w-60 max-w-40 object-contain">
    </div>
    <div class="w-full min-h-52 wrap:anywhere p-6 rounded-r-[12px] flex flex-col justify-center">
      <p class="my-1.5">Código: <IconCategory :item="data" /> <strong>{{data.vipoCode}}</strong></p>
      <p class="my-1.5">Marca(s): <strong>{{ data.brands.map(({name}) => name).join(", ")}}</strong></p>
      <template v-if="data.models.length">
        <p class="my-1.5">Modelos(s): <strong>{{ data.models.slice(0, limit).join(", ")}}</strong>
          <template v-if="data.models.length > limit">
            &nbsp;<UBadge>+ {{data.models.length - limit}} modelos</UBadge>
          </template>
        </p>
      </template>
    </div>
  </div>
</template>
