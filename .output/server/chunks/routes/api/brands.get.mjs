import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import { l as listBrands } from '../../_/brandDb.mjs';
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
import 'drizzle-orm';
import 'zod';
import '../../_/catalog-schema.mjs';
import 'drizzle-orm/sqlite-core';

const brands_get = defineEventHandler((event) => listBrands(event));

export { brands_get as default };
//# sourceMappingURL=brands.get.mjs.map
