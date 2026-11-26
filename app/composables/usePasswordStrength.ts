import { computed, type Ref } from 'vue'
import { passwordRequirements } from '#shared/passwordPolicy'

const labels = {
  length: 'Entre 12 e 128 caracteres',
  lowercase: 'Uma letra minúscula',
  uppercase: 'Uma letra maiúscula',
  numbers: 'Um número',
  symbols: 'Um símbolo',
}

export function usePasswordStrength({ password }: { password: Ref<string> }) {
  const strength = computed(() => passwordRequirements(password.value).map(rule => ({
    ...rule,
    text: labels[rule.key as keyof typeof labels],
  })))
  const score = computed(() => strength.value.filter(rule => rule.met).length)
  const maxScore = computed(() => strength.value.length)

  const assessment = computed(() => {
    if (!password.value) return { color: 'neutral', text: 'Digite uma senha' } as const
    if (score.value < 3) return { color: 'error', text: 'Senha fraca' } as const
    if (score.value < maxScore.value) return { color: 'warning', text: 'Senha média' } as const
    return { color: 'success', text: 'Senha forte' } as const
  })

  return { strength, score, maxScore, assessment }
}
