<script setup lang="ts">
import type { Control } from '~~/shared/types';

defineProps<{
  data: Control
}>()

const limit = shallowRef(6)
</script>

<template>
  <div class="w-full flex bg-white rounded-[12px] shadow sm:flex-nowrap flex-wrap">
    <div class="sm:w-24 w-full flex justify-center p-4 bg-slate-100 sm:rounded-l-[12px] sm:rounded-t-none rounded-t-[12px]">
      <img
        v-if="data.photoUrl"
        :src="data.photoUrl"
        :alt="data.name"
        class="sm:max-w-16 max-w-full lg:h-full h-auto max-h-50 object-cover sm:rounded-l-[12px] sm:rounded-t-none rounded-t-[12px]">
    </div>
    <div class="w-full p-6 rounded-r-[12px] flex flex-col justify-center">
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
