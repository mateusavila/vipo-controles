import { createHash } from 'node:crypto'
import { createClient } from '@libsql/client'

function createControls(table: string) {
  return `CREATE TABLE IF NOT EXISTS ${table} (
      id TEXT PRIMARY KEY NOT NULL, vipo_code TEXT NOT NULL UNIQUE,
      category TEXT NOT NULL CHECK (category IN ('tv', 'ac', 'receptor')),
      name TEXT NOT NULL, original_remote_code TEXT, photo_url TEXT,
      photo_bytes BLOB, photo_mime TEXT, notes TEXT,
      models TEXT NOT NULL DEFAULT '[]', active INTEGER NOT NULL DEFAULT 1, is_draft INTEGER NOT NULL DEFAULT 0
    )`
}

function createSearchLinks(table: string, parent: string) {
  return `CREATE TABLE IF NOT EXISTS ${table} (
      remote_control_id TEXT NOT NULL REFERENCES ${parent}(id) ON DELETE CASCADE,
      search_term_id TEXT NOT NULL REFERENCES search_terms(id) ON DELETE CASCADE,
      search_count INTEGER NOT NULL,
      PRIMARY KEY (remote_control_id, search_term_id)
    )`
}

function createBrandLinks(table: string, parent: string) {
  return `CREATE TABLE IF NOT EXISTS ${table} (
      remote_control_id TEXT NOT NULL REFERENCES ${parent}(id) ON DELETE CASCADE,
      brand_id TEXT NOT NULL REFERENCES brands(id) ON DELETE RESTRICT,
      PRIMARY KEY (remote_control_id, brand_id)
    )`
}

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
    `CREATE TABLE IF NOT EXISTS identity_password_tokens (
      token_hash TEXT PRIMARY KEY NOT NULL,
      user_id TEXT NOT NULL REFERENCES identity_users(id) ON DELETE CASCADE,
      session_version INTEGER NOT NULL,
      created_at INTEGER NOT NULL
    )`,
    'CREATE INDEX IF NOT EXISTS identity_password_tokens_user_idx ON identity_password_tokens (user_id, session_version, created_at)',
    `CREATE TRIGGER IF NOT EXISTS identity_password_tokens_cleanup
      AFTER UPDATE OF session_version ON identity_users
      WHEN OLD.session_version <> NEW.session_version
      BEGIN
        DELETE FROM identity_password_tokens WHERE user_id = NEW.id;
      END`,
    createControls('remote_controls'),
    `CREATE TABLE IF NOT EXISTS brands (
      id TEXT PRIMARY KEY NOT NULL, name TEXT NOT NULL COLLATE NOCASE UNIQUE
    )`,
    `CREATE TABLE IF NOT EXISTS search_terms (
      id TEXT PRIMARY KEY NOT NULL, term TEXT NOT NULL, normalized_term TEXT NOT NULL UNIQUE,
      search_count INTEGER NOT NULL DEFAULT 1, zero_result_count INTEGER NOT NULL DEFAULT 0,
      last_searched_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CHECK (search_count >= 1 AND zero_result_count BETWEEN 0 AND search_count)
    )`,
    createSearchLinks('remote_search_terms', 'remote_controls'),
    `CREATE TABLE IF NOT EXISTS control_image_analyses (
      id TEXT PRIMARY KEY NOT NULL,
      control_id TEXT NOT NULL,
      photo_hash TEXT NOT NULL DEFAULT '',
      state TEXT NOT NULL CHECK (state IN ('running', 'done', 'failed')),
      result TEXT,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )`,
    'CREATE INDEX IF NOT EXISTS control_image_analyses_created_idx ON control_image_analyses (created_at)',
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
    await tx.execute(createBrandLinks('remote_control_brands', 'remote_controls'))
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
    if (!columns.rows.some(column => column.name === 'is_draft')) {
      await tx.execute('ALTER TABLE remote_controls ADD COLUMN is_draft INTEGER NOT NULL DEFAULT 0')
    }

    const schema = await tx.execute("SELECT sql FROM sqlite_master WHERE type = 'table' AND name = 'remote_controls'")
    if (!String(schema.rows[0]?.sql).includes("'receptor'")) {
      const controlColumns = 'id, vipo_code, category, name, original_remote_code, photo_url, photo_bytes, photo_mime, notes, models, active, is_draft'
      await tx.execute(createControls('remote_controls_new'))
      await tx.execute(createBrandLinks('remote_control_brands_new', 'remote_controls_new'))
      await tx.execute(createSearchLinks('remote_search_terms_new', 'remote_controls_new'))

      await tx.execute(`INSERT INTO remote_controls_new (${controlColumns}) SELECT ${controlColumns} FROM remote_controls`)
      await tx.execute(`INSERT INTO remote_control_brands_new (remote_control_id, brand_id)
        SELECT remote_control_id, brand_id FROM remote_control_brands`)
      await tx.execute(`INSERT INTO remote_search_terms_new (remote_control_id, search_term_id, search_count)
        SELECT remote_control_id, search_term_id, search_count FROM remote_search_terms`)

      await tx.execute('DROP TABLE remote_control_brands')
      await tx.execute('DROP TABLE remote_search_terms')
      await tx.execute('DROP TABLE remote_controls')
      await tx.execute('ALTER TABLE remote_controls_new RENAME TO remote_controls')
      await tx.execute('ALTER TABLE remote_control_brands_new RENAME TO remote_control_brands')
      await tx.execute('ALTER TABLE remote_search_terms_new RENAME TO remote_search_terms')
      await tx.execute('CREATE INDEX remote_control_brands_brand_id_idx ON remote_control_brands (brand_id)')

      const check = await tx.execute('PRAGMA foreign_key_check')
      if (check.rows.length) throw new Error('A migração deixou vínculos inválidos.')
    }

    const analysisColumns = await tx.execute('PRAGMA table_info(control_image_analyses)')
    if (!analysisColumns.rows.some(column => column.name === 'photo_hash')) {
      await tx.execute("ALTER TABLE control_image_analyses ADD COLUMN photo_hash TEXT NOT NULL DEFAULT ''")
      const existing = await tx.execute("SELECT id, control_id FROM control_image_analyses WHERE state IN ('running', 'done')")
      for (const row of existing.rows) {
        const { rows } = await tx.execute({
          sql: 'SELECT photo_bytes FROM remote_controls WHERE id = ?',
          args: [row.control_id],
        })
        const bytes = rows[0]?.photo_bytes
        if (bytes instanceof ArrayBuffer || bytes instanceof Uint8Array) {
          const hash = createHash('sha256').update(new Uint8Array(bytes)).digest('hex')
          await tx.execute({
            sql: 'UPDATE control_image_analyses SET photo_hash = ? WHERE id = ?',
            args: [hash, row.id],
          })
        }
      }
    }
    await tx.execute('DROP INDEX IF EXISTS control_image_analyses_once')
    await tx.execute(`CREATE UNIQUE INDEX IF NOT EXISTS control_image_analyses_once_per_photo
      ON control_image_analyses (control_id, photo_hash) WHERE state IN ('running', 'done')`)
    await tx.commit()
  } finally {
    tx.close()
  }
  console.log('Banco preparado.')
} finally {
  client.close()
}
