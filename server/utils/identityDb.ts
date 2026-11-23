import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'
import type { H3Event } from 'h3'
export function identityDb(event: H3Event) {
  const config = useRuntimeConfig(event).identity
  if (!config.databaseUrl) throw createError({ statusCode: 503, message: 'Configure o banco de identidade.' })
  return drizzle(createClient({ url: config.databaseUrl, authToken: config.databaseToken || undefined }))
}
