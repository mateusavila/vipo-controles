import { createHash, randomBytes } from 'node:crypto'
import { sql } from 'drizzle-orm'
import type { H3Event } from 'h3'
import { z } from 'zod'
import { identityPasswordTokens, identityUsers } from '../database/schema'

export const identityEmailSchema = z.string().trim().toLowerCase().email().max(254)
export const passwordTokenSchema = z.string().regex(/^[A-Za-z0-9_-]{43}$/)
export const hashPasswordToken = (token: string) => createHash('sha256').update(token).digest('hex')

export function passwordEmailConfig(event: H3Event) {
  const { webhookUrl, webhookSecret, appUrl } = useRuntimeConfig(event).identity
  if (!webhookUrl || !webhookSecret) {
    throw createError({ statusCode: 503, message: 'Configure o webhook de e-mail do n8n.' })
  }
  return { webhookUrl, webhookSecret, appUrl }
}

export async function sendPasswordEmail(
  event: H3Event,
  user: typeof identityUsers.$inferSelect,
  purpose: 'invite' | 'reset',
  config: ReturnType<typeof passwordEmailConfig>,
) {
  const token = randomBytes(32).toString('base64url')
  const now = Date.now()
  const db = identityDb(event)
  // Reserve the send before contacting the webhook, including across server instances.
  const issued = await db.run(sql`
    INSERT INTO identity_password_tokens (token_hash, user_id, session_version, created_at)
    SELECT ${hashPasswordToken(token)}, id, session_version, ${now}
    FROM ${identityUsers}
    WHERE id = ${user.id} AND blocked = 0 AND session_version = ${user.sessionVersion}
      AND NOT EXISTS (
        SELECT 1 FROM ${identityPasswordTokens}
        WHERE user_id = ${user.id} AND session_version = ${user.sessionVersion}
          AND created_at > ${now - 60_000}
      )
  `)
  if (!issued.rowsAffected) return false

  const buttonUrl = new URL('/confirmar-email', config.appUrl)
  buttonUrl.searchParams.set('token', token)

  try {
    await $fetch.raw(config.webhookUrl, {
      method: 'POST',
      headers: { 'X-Webhook-Secret': config.webhookSecret },
      body: {
        name: user.name,
        email: user.email,
        token,
        empresa: 'Vipo',
        logo: 'https://vipo-controles.vercel.app/logo-vipo-email.png',
        logoWidth: 80,
        logoHeight: 36,
        headerBgColor: '#F8FAFC',
        bodyBgColor: '#ffffff',
        footerBgColor: '#232324',
        headerTextColor: '#314158',
        bodyTextColor: '#314158',
        footerTextColor: '#ffffff',
        subject: 'Confirme seu e-mail!',
        title: purpose === 'invite'
          ? `Olá, ${user.name}! Boas-vindas ao Vipo Controles.`
          : `Olá, ${user.name}! Vamos trocar sua senha?`,
        text: purpose === 'invite'
          ? '<p>Confirme seu e-mail e crie uma senha para acessar o painel administrativo do Vipo Controles.</p>'
          : '<p>Confirme seu e-mail para cadastrar uma nova senha de acesso ao painel administrativo do Vipo Controles.</p><p>Se você não solicitou a troca, pode ignorar esta mensagem.</p>',
        buttonLabel: 'Confirme seu e-mail',
        buttonUrl: buttonUrl.href,
        buttonBgColor: '#00A63E',
        buttonTextColor: '#ffffff',
        footerText: '<p>Desenvolvido por <a href="https://www.mateusavila.com.br" target="_blank" rel="noopener noreferrer">Mateus Ávila</a></p>',
      },
      timeout: 10_000,
      retry: 0,
      redirect: 'error',
    })
  } catch(error) {
    // A timeout can occur after delivery. Keep the token usable if the email arrives.
    const failure = error as {
        response?: { status: number }
        cause?: { name?: string; code?: string }
      }

      console.error('[passwordEmail] Falha na chamada ao n8n', {
        status: failure.response?.status,
        cause: failure.cause?.name,
        code: failure.cause?.code,
      })
    throw createError({ statusCode: 502, message: 'O n8n não confirmou o envio. Aguarde um minuto antes de tentar novamente.' })
  }
  return true
}
