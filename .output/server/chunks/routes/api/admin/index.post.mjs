import { d as defineEventHandler, s as setResponseStatus } from '../../../nitro/nitro.mjs';
import { r as requireAdmin } from '../../../_/requireAdmin.mjs';
import { s as saveBrand } from '../../../_/brandDb.mjs';
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
import 'zod';
import '../../../_/catalog-schema.mjs';

const index_post = defineEventHandler(async (event) => {
  await requireAdmin(event);
  const brand = await saveBrand(event, false);
  setResponseStatus(event, 201);
  return brand;
});

export { index_post as default };
//# sourceMappingURL=index.post.mjs.map
