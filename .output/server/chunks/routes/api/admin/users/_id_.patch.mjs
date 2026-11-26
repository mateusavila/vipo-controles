import { d as defineEventHandler, g as getRouterParam, r as readValidatedBody, c as createError } from '../../../../nitro/nitro.mjs';
import { r as requireAdmin } from '../../../../_/requireAdmin.mjs';
import { i as identityDb } from '../../../../_/identityDb.mjs';
import { and, eq, sql } from 'drizzle-orm';
import { z } from 'zod';
import { i as identityUsers } from '../../../../_/schema.mjs';
import { i as identityEmailSchema } from '../../../../_/passwordEmail.mjs';
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
import 'node:crypto';
import 'nostics';
import 'uint8array-extras';
import 'node:url';
import '@iconify/utils';
import 'consola';
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'drizzle-orm/sqlite-core';

const changes = z.union([
  z.strictObject({ name: z.string().trim().min(1).max(120), email: identityEmailSchema }),
  z.strictObject({ blocked: z.boolean() })
]);
const _id__patch = defineEventHandler(async (event) => {
  var _a;
  await requireAdmin(event, true);
  const id = (_a = getRouterParam(event, "id")) != null ? _a : "";
  const data = await readValidatedBody(event, changes.parse);
  const db = identityDb(event);
  const member = and(eq(identityUsers.id, id), eq(identityUsers.role, "member"));
  const changed = "email" in data ? sql`${identityUsers.email} <> ${data.email}` : sql`${identityUsers.blocked} <> ${Number(data.blocked)}`;
  const availableEmail = "email" in data ? sql`NOT EXISTS (SELECT 1 FROM identity_users AS other WHERE other.email = ${data.email} AND other.id <> ${id})` : void 0;
  const updated = await db.update(identityUsers).set({
    ...data,
    sessionVersion: sql`${identityUsers.sessionVersion} + CASE WHEN ${changed} THEN 1 ELSE 0 END`
  }).where(and(member, availableEmail)).returning({ id: identityUsers.id }).get();
  if (!updated) {
    const exists = await db.select({ id: identityUsers.id }).from(identityUsers).where(member).get();
    if (exists) throw createError({ statusCode: 409, message: "Este e-mail j\xE1 est\xE1 cadastrado." });
    throw createError({ statusCode: 404, message: "Membro n\xE3o encontrado." });
  }
  return { ok: true };
});

export { _id__patch as default };
//# sourceMappingURL=_id_.patch.mjs.map
