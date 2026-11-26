import { d as defineEventHandler, r as readValidatedBody } from '../../../nitro/nitro.mjs';
import { p as passwordEmailConfig, s as sendPasswordEmail, i as identityEmailSchema } from '../../../_/passwordEmail.mjs';
import { i as identityDb } from '../../../_/identityDb.mjs';
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
import 'drizzle-orm/sqlite-core';

const request = z.object({ email: identityEmailSchema });
const requestPassword_post = defineEventHandler(async (event) => {
  const { email } = await readValidatedBody(event, request.parse);
  const config = passwordEmailConfig(event);
  const user = await identityDb(event).select().from(identityUsers).where(eq(identityUsers.email, email)).get();
  if (user && !user.blocked) {
    try {
      await sendPasswordEmail(event, user, "reset", config);
    } catch {
      console.error("Falha ao processar o envio de e-mail de recupera\xE7\xE3o.");
    }
  }
  return { ok: true };
});

export { requestPassword_post as default };
//# sourceMappingURL=request-password.post.mjs.map
