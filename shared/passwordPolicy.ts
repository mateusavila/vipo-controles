import { z } from 'zod'
export const PASSWORD_MIN_LENGTH = 12
export function passwordRequirements(password: string) {
  return [
    { key: 'length', met: password.length >= PASSWORD_MIN_LENGTH && password.length <= 128 },
    { key: 'lowercase', met: /[a-z]/.test(password) },
    { key: 'uppercase', met: /[A-Z]/.test(password) },
    { key: 'numbers', met: /[0-9]/.test(password) },
    { key: 'symbols', met: /[^\p{L}\p{N}\s]/u.test(password) },
  ]
}
export const isStrongPassword = (password: string) => passwordRequirements(password).every(rule => rule.met)
export function strongPasswordSchema(message = 'Use ao menos 12 caracteres, maiúscula, minúscula, número e símbolo.') {
  return z.string({ error: message }).min(PASSWORD_MIN_LENGTH, message).max(128, message).refine(isStrongPassword, message)
}
