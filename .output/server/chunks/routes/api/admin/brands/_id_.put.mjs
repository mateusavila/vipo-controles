import { d as defineEventHandler } from '../../../../nitro/nitro.mjs';
import { r as requireAdmin } from '../../../../_/requireAdmin.mjs';
import { s as saveBrand } from '../../../../_/brandDb.mjs';
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
import '../../../../_/identityDb.mjs';
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'drizzle-orm';
import '../../../../_/schema.mjs';
import 'drizzle-orm/sqlite-core';
import 'zod';
import '../../../../_/catalog-schema.mjs';

const _id__put = defineEventHandler(async (event) => {
  await requireAdmin(event);
  return saveBrand(event, true);
});

export { _id__put as default };
//# sourceMappingURL=_id_.put.mjs.map
