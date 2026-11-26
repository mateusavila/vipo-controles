import { u as useRuntimeConfig, c as createError } from '../nitro/nitro.mjs';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

function identityDb(event) {
  const config = useRuntimeConfig(event).identity;
  if (!config.databaseUrl) throw createError({ statusCode: 503, message: "Configure o banco de identidade." });
  return drizzle(createClient({ url: config.databaseUrl, authToken: config.databaseToken || void 0 }));
}

export { identityDb as i };
//# sourceMappingURL=identityDb.mjs.map
