import { d as defineEventHandler, g as getRouterParam, c as createError } from '../../../../nitro/nitro.mjs';
import { r as requireAdmin } from '../../../../_/requireAdmin.mjs';
import { i as identityDb } from '../../../../_/identityDb.mjs';
import { and, eq, inArray } from 'drizzle-orm';
import { i as identityUsers, a as identityPasswordTokens } from '../../../../_/schema.mjs';
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

const _id__delete = defineEventHandler(async (event) => {
  var _a;
  await requireAdmin(event, true);
  const id = (_a = getRouterParam(event, "id")) != null ? _a : "";
  const db = identityDb(event);
  const member = and(eq(identityUsers.id, id), eq(identityUsers.role, "member"));
  const [, deleted] = await db.batch([
    db.delete(identityPasswordTokens).where(inArray(
      identityPasswordTokens.userId,
      db.select({ id: identityUsers.id }).from(identityUsers).where(member)
    )),
    db.delete(identityUsers).where(member).returning({ id: identityUsers.id })
  ]);
  if (!deleted.length) throw createError({ statusCode: 404, message: "Membro n\xE3o encontrado." });
  return { ok: true };
});

export { _id__delete as default };
//# sourceMappingURL=_id_.delete.mjs.map
