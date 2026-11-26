import { d as defineEventHandler, c as createError, a as setResponseHeader, b as send } from '../../../../nitro/nitro.mjs';
import { i as identityDb } from '../../../../_/identityDb.mjs';
import { c as controlId } from '../../../../_/catalogDb.mjs';
import { r as requireAdmin } from '../../../../_/requireAdmin.mjs';
import { eq } from 'drizzle-orm';
import { r as remoteControls } from '../../../../_/catalog-schema.mjs';
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
import 'sharp';
import '../../../../_/catalog.mjs';
import 'zod';
import '../../../../_/schema.mjs';
import 'drizzle-orm/sqlite-core';

const photo_get = defineEventHandler(async (event) => {
  const photo = await identityDb(event).select({
    bytes: remoteControls.photoBytes,
    mime: remoteControls.photoMime,
    active: remoteControls.active
  }).from(remoteControls).where(eq(remoteControls.id, controlId(event))).get();
  if (!(photo == null ? void 0 : photo.bytes) || !photo.mime) {
    throw createError({ statusCode: 404, message: "Foto n\xE3o encontrada" });
  }
  if (!photo.active) await requireAdmin(event);
  setResponseHeader(event, "Cache-Control", photo.active ? "public, no-cache" : "private, no-store");
  setResponseHeader(event, "X-Content-Type-Options", "nosniff");
  return send(event, photo.bytes, photo.mime);
});

export { photo_get as default };
//# sourceMappingURL=photo.get.mjs.map
