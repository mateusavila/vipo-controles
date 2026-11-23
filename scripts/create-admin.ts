import { createClient } from '@libsql/client'
import { Hash } from '@adonisjs/hash'
import { Scrypt } from '@adonisjs/hash/drivers/scrypt'
const hash = new Hash(new Scrypt({}))
const url = process.env.NUXT_IDENTITY_DATABASE_URL
const email = process.env.SEED_ADMIN_EMAIL?.trim().toLowerCase()
const name = process.env.SEED_ADMIN_NAME?.trim()
const password = process.env.SEED_ADMIN_PASSWORD
if (!url || !email || !name || !password || password.length < 12) throw new Error('Defina banco, SEED_ADMIN_EMAIL, SEED_ADMIN_NAME e SEED_ADMIN_PASSWORD (mínimo 12 caracteres).')
const db = createClient({ url, authToken: process.env.NUXT_IDENTITY_DATABASE_TOKEN || undefined })
await db.execute({ sql: 'INSERT INTO identity_users (id,name,email,password_hash,role) VALUES (?,?,?,?,?)', args: [crypto.randomUUID(),name,email,await hash.make(password),'superadmin'] })
db.close()
console.log('Superadmin criado. Remova SEED_ADMIN_PASSWORD do ambiente.')
