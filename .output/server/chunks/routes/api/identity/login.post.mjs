import { d as defineEventHandler, r as readValidatedBody, c as createError, h as clearUserSession, i as setUserSession } from '../../../nitro/nitro.mjs';
import { i as identityDb } from '../../../_/identityDb.mjs';
import { v as verifyPassword } from '../../../_/password.mjs';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { i as identityUsers } from '../../../_/schema.mjs';
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

const credentials = z.object({ email: z.string().trim().toLowerCase().email(), password: z.string().min(1).max(256) });
const login_post = defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, credentials.parse);
  const user = await identityDb(event).select().from(identityUsers).where(eq(identityUsers.email, email)).get();
  if (!user || user.blocked || !user.passwordHash || !await verifyPassword(user.passwordHash, password)) {
    throw createError({ statusCode: 401, message: "E-mail ou senha inv\xE1lidos." });
  }
  await clearUserSession(event);
  await setUserSession(event, { user: { id: user.id, name: user.name, email: user.email, role: user.role, sessionVersion: user.sessionVersion } });
  return { ok: true };
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map
