<script setup lang="ts">
defineProps<{
  color?: string
  html?: string
  size?: 'small' | 'default'
}>()
</script>

<template>
  <div
    v-if="html !== undefined"
    class="font-text leading-[160%]"
    :class="[color ?? 'text-black', size === 'small' ? 'md:text-[16px] text-[14px]' : 'md:text-[20px] text-[16px]']"
    v-html="html"
  />

  <p
    v-else
    class="font-text leading-[160%]"
    :class="[color ?? 'text-black', size === 'small' ? 'md:text-[16px] text-[14px]' : 'md:text-[20px] text-[16px]']"
  >
    <slot />
  </p>
</template>

<style>
p b {
  font-weight: bold;
}
ul {
  list-style-type: disc;
  padding-left: 20px;
  li {
    margin-block: 4px;
  }
}
</style>
