import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
export const identityUsers = sqliteTable('identity_users', {
  id: text('id').primaryKey(), name: text('name').notNull(), email: text('email').notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: text('role', { enum: ['superadmin', 'member'] }).notNull().default('member'),
  blocked: integer('blocked', { mode: 'boolean' }).notNull().default(false),
  sessionVersion: integer('session_version').notNull().default(1)
})


export * from './catalog-schema'
