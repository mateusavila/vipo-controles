import { d as defineEventHandler, r as readValidatedBody, c as createError, h as clearUserSession } from '../../../nitro/nitro.mjs';
import { i as identityDb } from '../../../_/identityDb.mjs';
import { v as validPasswordToken } from '../../../_/passwordToken.mjs';
import { h as hashPassword } from '../../../_/password.mjs';
import { exists, sql } from 'drizzle-orm';
import { z } from 'zod';
import { a as passwordTokenSchema } from '../../../_/passwordEmail.mjs';
import { s as strongPasswordSchema } from '../../../_/passwordPolicy.mjs';
import { a as identityPasswordTokens, i as identityUsers } from '../../../_/schema.mjs';
import 'unhead/server';
import '../../../_/vue.mjs';
import 'unhead/legacy';
import 'unhead/plugins';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'nostics';
import 'uint8array-extras';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@libsql/client';
import 'drizzle-orm/libsql';
import '@adonisjs/hash';
import '@adonisjs/hash/drivers/scrypt';
import 'drizzle-orm/sqlite-core';

const request = z.object({
  token: passwordTokenSchema,
  password: strongPasswordSchema(),
  confirmation: z.string().max(128)
}).refine((data) => data.password === data.confirmation, {
  path: ["confirmation"],
  message: "As senhas precisam ser iguais."
});
const setPassword_post = defineEventHandler(async (event) => {
  const { token, password } = await readValidatedBody(event, request.parse);
  const db = identityDb(event);
  const tokenMatch = db.select({ token: identityPasswordTokens.tokenHash }).from(identityPasswordTokens).where(validPasswordToken(token));
  const valid = await db.select({ id: identityUsers.id }).from(identityUsers).where(exists(tokenMatch)).get();
  if (!valid) throw createError({ statusCode: 400, message: "Token inv\xE1lido ou j\xE1 utilizado." });
  const updated = await db.update(identityUsers).set({
    passwordHash: await hashPassword(password),
    sessionVersion: sql`${identityUsers.sessionVersion} + 1`
  }).where(exists(tokenMatch)).returning({ id: identityUsers.id }).get();
  if (!updated) throw createError({ statusCode: 400, message: "Token inv\xE1lido ou j\xE1 utilizado." });
  await clearUserSession(event);
  return { ok: true };
});

export { setPassword_post as default };
//# sourceMappingURL=set-password.post.mjs.map
