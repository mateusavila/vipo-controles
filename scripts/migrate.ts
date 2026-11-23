import { createClient } from '@libsql/client'

const url = process.env.NUXT_IDENTITY_DATABASE_URL
if (!url) throw new Error('Defina NUXT_IDENTITY_DATABASE_URL.')

const client = createClient({ url, authToken: process.env.NUXT_IDENTITY_DATABASE_TOKEN || undefined })
try {
  await client.batch([
    `CREATE TABLE IF NOT EXISTS identity_users (
      id TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL, role TEXT NOT NULL DEFAULT 'member',
      blocked INTEGER NOT NULL DEFAULT 0, session_version INTEGER NOT NULL DEFAULT 1
    )`,
    `CREATE TABLE IF NOT EXISTS remote_controls (
      id TEXT PRIMARY KEY NOT NULL, vipo_code TEXT NOT NULL UNIQUE,
      category TEXT NOT NULL CHECK (category IN ('tv', 'ac')),
      name TEXT NOT NULL, original_remote_code TEXT, photo_url TEXT,
      photo_bytes BLOB, photo_mime TEXT, notes TEXT, active INTEGER NOT NULL DEFAULT 1
    )`,
    `CREATE TABLE IF NOT EXISTS brands (
      id TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL COLLATE NOCASE UNIQUE
    )`,
    `CREATE TABLE IF NOT EXISTS search_terms (
      id TEXT PRIMARY KEY NOT NULL, term TEXT NOT NULL, normalized_term TEXT NOT NULL UNIQUE,
      search_count INTEGER NOT NULL DEFAULT 1, zero_result_count INTEGER NOT NULL DEFAULT 0,
      last_searched_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CHECK (search_count >= 1 AND zero_result_count BETWEEN 0 AND search_count)
    )`,
    `CREATE TABLE IF NOT EXISTS remote_search_terms (
      remote_control_id TEXT NOT NULL REFERENCES remote_controls(id) ON DELETE CASCADE,
      search_term_id TEXT NOT NULL REFERENCES search_terms(id) ON DELETE CASCADE,
      search_count INTEGER NOT NULL,
      PRIMARY KEY (remote_control_id, search_term_id)
    )`,
  ], 'write')
  const { rows } = await client.execute('PRAGMA table_info(remote_controls)')
  for (const [name, type] of [['photo_bytes', 'BLOB'], ['photo_mime', 'TEXT']]) {
    if (!rows.some(column => column.name === name)) {
      await client.execute(`ALTER TABLE remote_controls ADD COLUMN ${name} ${type}`)
    }
  }
  const tx = await client.transaction('write')
  try {
    const compatibilities = await tx.execute('PRAGMA table_info(remote_compatibilities)')
    const legacy = compatibilities.rows.some(column => column.name === 'brand')
    if (legacy) await tx.execute('ALTER TABLE remote_compatibilities RENAME TO remote_compatibilities_legacy')
    await tx.execute(`CREATE TABLE IF NOT EXISTS remote_compatibilities (
      id TEXT PRIMARY KEY NOT NULL,
      remote_control_id TEXT NOT NULL REFERENCES remote_controls(id) ON DELETE CASCADE,
      brand_id TEXT NOT NULL REFERENCES brands(id) ON DELETE RESTRICT,
      model TEXT NOT NULL
    )`)
    await tx.execute(`CREATE UNIQUE INDEX IF NOT EXISTS remote_compatibilities_control_brand_id_model_unique
      ON remote_compatibilities (remote_control_id, brand_id, model)`)
    if (legacy) {
      await tx.execute(`INSERT INTO brands (id, name)
        SELECT lower(hex(randomblob(4)) || '-' || hex(randomblob(2)) || '-4' ||
          substr(hex(randomblob(2)), 2) || '-8' || substr(hex(randomblob(2)), 2) || '-' || hex(randomblob(6))),
          MIN(trim(brand))
        FROM remote_compatibilities_legacy
        GROUP BY trim(brand) COLLATE NOCASE
        ON CONFLICT (name) DO NOTHING`)
      await tx.execute(`INSERT INTO remote_compatibilities (id, remote_control_id, brand_id, model)
        SELECT MIN(legacy.id), legacy.remote_control_id, brands.id, legacy.model
        FROM remote_compatibilities_legacy legacy
        JOIN brands ON brands.name = trim(legacy.brand)
        GROUP BY legacy.remote_control_id, brands.id, legacy.model`)
      await tx.execute('DROP TABLE remote_compatibilities_legacy')
    }
    await tx.execute('CREATE INDEX IF NOT EXISTS remote_compatibilities_brand_id_model_idx ON remote_compatibilities (brand_id, model)')
    await tx.execute('CREATE INDEX IF NOT EXISTS remote_compatibilities_model_idx ON remote_compatibilities (model)')
    await tx.commit()
  } finally {
    tx.close()
  }
  console.log('Banco preparado.')
} finally {
  client.close()
}
