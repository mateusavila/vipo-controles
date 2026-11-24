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
    const columns = await tx.execute('PRAGMA table_info(remote_controls)')
    if (!columns.rows.some(column => column.name === 'models')) {
      await tx.execute("ALTER TABLE remote_controls ADD COLUMN models TEXT NOT NULL DEFAULT '[]'")
    }
    await tx.execute(`CREATE TABLE IF NOT EXISTS remote_control_brands (
      remote_control_id TEXT NOT NULL REFERENCES remote_controls(id) ON DELETE CASCADE,
      brand_id TEXT NOT NULL REFERENCES brands(id) ON DELETE RESTRICT,
      PRIMARY KEY (remote_control_id, brand_id)
    )`)
    await tx.execute('CREATE INDEX IF NOT EXISTS remote_control_brands_brand_id_idx ON remote_control_brands (brand_id)')

    if (compatibilities.rows.length) {
      if (legacy) {
        await tx.execute(`INSERT INTO brands (id, name)
          SELECT lower(hex(randomblob(4)) || '-' || hex(randomblob(2)) || '-4' ||
            substr(hex(randomblob(2)), 2) || '-8' || substr(hex(randomblob(2)), 2) || '-' || hex(randomblob(6))),
            MIN(trim(brand))
          FROM remote_compatibilities
          GROUP BY trim(brand) COLLATE NOCASE
          ON CONFLICT (name) DO NOTHING`)
      }
      const brandSource = legacy
        ? 'JOIN brands ON brands.name = trim(compatibility.brand)'
        : 'JOIN brands ON brands.id = compatibility.brand_id'
      await tx.execute(`INSERT INTO remote_control_brands (remote_control_id, brand_id)
        SELECT DISTINCT compatibility.remote_control_id, brands.id
        FROM remote_compatibilities compatibility ${brandSource}
        WHERE true
        ON CONFLICT (remote_control_id, brand_id) DO NOTHING`)
      await tx.execute(`UPDATE remote_controls SET models = (
        SELECT json_group_array(model) FROM (
          SELECT MIN(trim(compatibility.model)) AS model
          FROM remote_compatibilities compatibility
          WHERE compatibility.remote_control_id = remote_controls.id AND trim(compatibility.model) <> ''
          GROUP BY trim(compatibility.model) COLLATE NOCASE
          ORDER BY model COLLATE NOCASE
        )
      )
      WHERE EXISTS (
        SELECT 1 FROM remote_compatibilities compatibility
        WHERE compatibility.remote_control_id = remote_controls.id
      )`)
      await tx.execute('DROP TABLE remote_compatibilities')
    }
    await tx.commit()
  } finally {
    tx.close()
  }
  console.log('Banco preparado.')
} finally {
  client.close()
}
