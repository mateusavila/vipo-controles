<script setup lang="ts">
const props = defineProps<{ password: string }>()
const { strength, score, maxScore, assessment } = usePasswordStrength({ password: toRef(props, 'password') })
</script>

<template>
  <div class="mt-2 space-y-2" aria-live="polite">
    <UProgress :color="assessment.color" :model-value="score" :max="maxScore" size="sm" :aria-label="assessment.text" />
    <p class="text-xs font-medium">{{ assessment.text }}</p>
    <ul class="space-y-1" aria-label="Requisitos da senha">
      <li v-for="rule in strength" :key="rule.key" class="flex items-center gap-1 text-xs" :class="rule.met ? 'text-success' : 'text-muted'">
        <UIcon :name="rule.met ? 'i-lucide-circle-check-big' : 'i-lucide-circle-x'" class="size-4" aria-hidden="true" />
        <span>{{ rule.text }}<span class="sr-only"> · {{ rule.met ? 'Atendido' : 'Pendente' }}</span></span>
      </li>
    </ul>
  </div>
</template>
