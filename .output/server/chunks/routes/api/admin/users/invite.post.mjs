import { d as defineEventHandler, r as readValidatedBody, c as createError } from '../../../../nitro/nitro.mjs';
import { r as requireAdmin } from '../../../../_/requireAdmin.mjs';
import { p as passwordEmailConfig, s as sendPasswordEmail, i as identityEmailSchema } from '../../../../_/passwordEmail.mjs';
import { i as identityDb } from '../../../../_/identityDb.mjs';
import { eq } from 'drizzle-orm';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';
import { i as identityUsers } from '../../../../_/schema.mjs';
import 'unhead/server';
import '../../../../_/vue.mjs';
import 'unhead/legacy';
import 'unhead/plugins';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'nostics';
import 'uint8array-extras';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'drizzle-orm/sqlite-core';

const invitation = z.strictObject({
  name: z.string().trim().min(1).max(120),
  email: identityEmailSchema
});
const invite_post = defineEventHandler(async (event) => {
  await requireAdmin(event, true);
  const { name, email } = await readValidatedBody(event, invitation.parse);
  const config = passwordEmailConfig(event);
  const db = identityDb(event);
  await db.insert(identityUsers).values({ id: randomUUID(), name, email, passwordHash: "", role: "member" }).onConflictDoNothing({ target: identityUsers.email });
  const user = await db.select().from(identityUsers).where(eq(identityUsers.email, email)).get();
  if (!user || user.blocked || user.role !== "member" || user.passwordHash || user.name !== name) {
    throw createError({ statusCode: 409, message: "Este e-mail j\xE1 est\xE1 cadastrado. Para reenviar um convite pendente, use o mesmo nome e e-mail." });
  }
  if (!await sendPasswordEmail(event, user, "invite", config)) {
    throw createError({ statusCode: 429, message: "Aguarde um minuto antes de reenviar o convite." });
  }
  return { ok: true };
});

export { invite_post as default };
//# sourceMappingURL=invite.post.mjs.map
