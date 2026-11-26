import { d as defineEventHandler } from '../../../nitro/nitro.mjs';
import { r as requireAdmin } from '../../../_/requireAdmin.mjs';
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
import '../../../_/identityDb.mjs';
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'drizzle-orm';
import '../../../_/schema.mjs';
import 'drizzle-orm/sqlite-core';

const me_get = defineEventHandler(async (event) => {
  const { role } = await requireAdmin(event);
  return { ok: true, role };
});

export { me_get as default };
//# sourceMappingURL=me.get.mjs.map
