import { sql } from 'drizzle-orm'
import { blob, check, index, integer, primaryKey, sqliteTable, text, uniqueIndex } from 'drizzle-orm/sqlite-core'

export const remoteControls = sqliteTable('remote_controls', {
  id: text('id').primaryKey().notNull().$defaultFn(() => crypto.randomUUID()),
  vipoCode: text('vipo_code').notNull().unique(),
  category: text('category', { enum: ['tv', 'ac'] }).notNull(),
  name: text('name').notNull(),
  originalRemoteCode: text('original_remote_code'),
  photoUrl: text('photo_url'),
  photoBytes: blob('photo_bytes', { mode: 'buffer' }),
  photoMime: text('photo_mime'),
  notes: text('notes'),
  active: integer('active', { mode: 'boolean' }).notNull().default(true),
}, table => [
  check('remote_controls_category_check', sql`${table.category} IN ('tv', 'ac')`),
])

export const brands = sqliteTable('brands', {
  id: text('id').primaryKey().notNull().$defaultFn(() => crypto.randomUUID()),
  name: text('name').notNull().unique(),
})

export const remoteCompatibilities = sqliteTable('remote_compatibilities', {
  id: text('id').primaryKey().notNull().$defaultFn(() => crypto.randomUUID()),
  remoteControlId: text('remote_control_id').notNull()
    .references(() => remoteControls.id, { onDelete: 'cascade' }),
  brandId: text('brand_id').notNull().references(() => brands.id, { onDelete: 'restrict' }),
  model: text('model').notNull(),
}, table => [
  uniqueIndex('remote_compatibilities_control_brand_id_model_unique')
    .on(table.remoteControlId, table.brandId, table.model),
  index('remote_compatibilities_brand_id_model_idx').on(table.brandId, table.model),
  index('remote_compatibilities_model_idx').on(table.model),
])

export const searchTerms = sqliteTable('search_terms', {
  id: text('id').primaryKey().notNull().$defaultFn(() => crypto.randomUUID()),
  term: text('term').notNull(),
  normalizedTerm: text('normalized_term').notNull().unique(),
  searchCount: integer('search_count').notNull().default(1),
  zeroResultCount: integer('zero_result_count').notNull().default(0),
  lastSearchedAt: text('last_searched_at').notNull().default(sql`CURRENT_TIMESTAMP`),
}, table => [
  check('search_terms_counts_check',
    sql`${table.searchCount} >= 1 AND ${table.zeroResultCount} BETWEEN 0 AND ${table.searchCount}`),
])

export const remoteSearchTerms = sqliteTable('remote_search_terms', {
  remoteControlId: text('remote_control_id').notNull()
    .references(() => remoteControls.id, { onDelete: 'cascade' }),
  searchTermId: text('search_term_id').notNull()
    .references(() => searchTerms.id, { onDelete: 'cascade' }),
  searchCount: integer('search_count').notNull(),
}, table => [
  primaryKey({ columns: [table.remoteControlId, table.searchTermId] }),
])
