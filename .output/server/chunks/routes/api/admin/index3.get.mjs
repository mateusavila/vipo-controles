import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import { r as requireAdmin } from '../../../_/requireAdmin.mjs';
import { i as identityDb } from '../../../_/identityDb.mjs';
import { sql, eq, asc } from 'drizzle-orm';
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

const index_get = defineEventHandler(async (event) => {
  await requireAdmin(event, true);
  return identityDb(event).select({
    id: identityUsers.id,
    name: identityUsers.name,
    email: identityUsers.email,
    blocked: identityUsers.blocked,
    pending: sql`${identityUsers.passwordHash} = ''`.mapWith(Boolean)
  }).from(identityUsers).where(eq(identityUsers.role, "member")).orderBy(asc(identityUsers.name), asc(identityUsers.email)).all();
});

export { index_get as default };
//# sourceMappingURL=index3.get.mjs.map
