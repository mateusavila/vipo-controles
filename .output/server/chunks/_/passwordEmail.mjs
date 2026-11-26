import { u as useRuntimeConfig, c as createError } from '../nitro/nitro.mjs';
import { i as identityDb } from './identityDb.mjs';
import { randomBytes, createHash } from 'node:crypto';
import { sql } from 'drizzle-orm';
import { z } from 'zod';
import { i as identityUsers, a as identityPasswordTokens } from './schema.mjs';

const identityEmailSchema = z.string().trim().toLowerCase().email().max(254);
const passwordTokenSchema = z.string().regex(/^[A-Za-z0-9_-]{43}$/);
const hashPasswordToken = (token) => createHash("sha256").update(token).digest("hex");
function passwordEmailConfig(event) {
  const { webhookUrl, webhookSecret, appUrl } = useRuntimeConfig(event).identity;
  if (!webhookUrl || !webhookSecret) {
    throw createError({ statusCode: 503, message: "Configure o webhook de e-mail do n8n." });
  }
  return { webhookUrl, webhookSecret, appUrl };
}
async function sendPasswordEmail(event, user, purpose, config) {
  var _a, _b, _c;
  const token = randomBytes(32).toString("base64url");
  const now = Date.now();
  const db = identityDb(event);
  const issued = await db.run(sql`
    INSERT INTO identity_password_tokens (token_hash, user_id, session_version, created_at)
    SELECT ${hashPasswordToken(token)}, id, session_version, ${now}
    FROM ${identityUsers}
    WHERE id = ${user.id} AND blocked = 0 AND session_version = ${user.sessionVersion}
      AND NOT EXISTS (
        SELECT 1 FROM ${identityPasswordTokens}
        WHERE user_id = ${user.id} AND session_version = ${user.sessionVersion}
          AND created_at > ${now - 6e4}
      )
  `);
  if (!issued.rowsAffected) return false;
  const buttonUrl = new URL("/confirmar-email", config.appUrl);
  buttonUrl.searchParams.set("token", token);
  try {
    await $fetch.raw(config.webhookUrl, {
      method: "POST",
      headers: { "X-Webhook-Secret": config.webhookSecret },
      body: {
        name: user.name,
        email: user.email,
        token,
        empresa: "Vipo",
        logo: "https://vipo-controles.vercel.app/logo-vipo-email.png",
        logoWidth: 80,
        logoHeight: 36,
        headerBgColor: "#F8FAFC",
        bodyBgColor: "#ffffff",
        footerBgColor: "#232324",
        headerTextColor: "#314158",
        bodyTextColor: "#314158",
        footerTextColor: "#ffffff",
        subject: "Confirme seu e-mail!",
        title: purpose === "invite" ? `Ol\xE1, ${user.name}! Boas-vindas ao Vipo Controles.` : `Ol\xE1, ${user.name}! Vamos trocar sua senha?`,
        text: purpose === "invite" ? "<p>Confirme seu e-mail e crie uma senha para acessar o painel administrativo do Vipo Controles.</p>" : "<p>Confirme seu e-mail para cadastrar uma nova senha de acesso ao painel administrativo do Vipo Controles.</p><p>Se voc\xEA n\xE3o solicitou a troca, pode ignorar esta mensagem.</p>",
        buttonLabel: "Confirme seu e-mail",
        buttonUrl: buttonUrl.href,
        buttonBgColor: "#00A63E",
        buttonTextColor: "#ffffff",
        footerText: '<p>Desenvolvido por <a href="https://www.mateusavila.com.br" target="_blank" rel="noopener noreferrer">Mateus \xC1vila</a></p>'
      },
      timeout: 1e4,
      retry: 0,
      redirect: "error"
    });
  } catch (error) {
    const failure = error;
    console.error("[passwordEmail] Falha na chamada ao n8n", {
      status: (_a = failure.response) == null ? void 0 : _a.status,
      cause: (_b = failure.cause) == null ? void 0 : _b.name,
      code: (_c = failure.cause) == null ? void 0 : _c.code
    });
    throw createError({ statusCode: 502, message: "O n8n n\xE3o confirmou o envio. Aguarde um minuto antes de tentar novamente." });
  }
  return true;
}

export { passwordTokenSchema as a, hashPasswordToken as h, identityEmailSchema as i, passwordEmailConfig as p, sendPasswordEmail as s };
//# sourceMappingURL=passwordEmail.mjs.map
