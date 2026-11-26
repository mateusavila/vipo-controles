import { d as defineEventHandler, l as readBody } from '../../../nitro/nitro.mjs';
import { i as identityDb } from '../../../_/identityDb.mjs';
import { v as validPasswordToken } from '../../../_/passwordToken.mjs';
import { z } from 'zod';
import { a as passwordTokenSchema } from '../../../_/passwordEmail.mjs';
import { i as identityUsers, a as identityPasswordTokens } from '../../../_/schema.mjs';
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
import 'drizzle-orm';
import 'drizzle-orm/sqlite-core';

const request = z.object({ token: passwordTokenSchema });
const passwordToken_post = defineEventHandler(async (event) => {
  const parsed = request.safeParse(await readBody(event));
  if (!parsed.success) return { valid: false };
  const match = await identityDb(event).select({ id: identityUsers.id }).from(identityUsers).innerJoin(identityPasswordTokens, validPasswordToken(parsed.data.token)).get();
  return { valid: Boolean(match) };
});

export { passwordToken_post as default };
//# sourceMappingURL=password-token.post.mjs.map
