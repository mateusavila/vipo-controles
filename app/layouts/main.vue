<script lang="ts" setup>
useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      type: 'image/webp',
      href: '/logo-vipo.webp',
    },
  ],
})
</script>

<template>
  <main class="w-full bg-slate-50 font-open">
    <slot />
  </main>
</template>
