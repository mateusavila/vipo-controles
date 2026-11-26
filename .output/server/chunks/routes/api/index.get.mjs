import { d as defineEventHandler, a as setResponseHeader } from '../../nitro/nitro.mjs';
import { l as listControls } from '../../_/catalogDb.mjs';
import 'unhead/server';
import '../../_/vue.mjs';
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
import '../../_/identityDb.mjs';
import '@libsql/client';
import 'drizzle-orm/libsql';
import 'sharp';
import '../../_/catalog.mjs';
import 'zod';
import 'drizzle-orm';
import '../../_/catalog-schema.mjs';
import 'drizzle-orm/sqlite-core';

const index_get = defineEventHandler((event) => {
  setResponseHeader(event, "Cache-Control", "no-store");
  return listControls(event, true);
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
