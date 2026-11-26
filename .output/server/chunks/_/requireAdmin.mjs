import { j as requireUserSession, h as clearUserSession, c as createError } from '../nitro/nitro.mjs';
import { i as identityDb } from './identityDb.mjs';
import { eq } from 'drizzle-orm';
import { i as identityUsers } from './schema.mjs';

async function requireAdmin(event, superadminOnly = false) {
  const { user } = await requireUserSession(event);
  const current = await identityDb(event).select().from(identityUsers).where(eq(identityUsers.id, user.id)).get();
  if (!current || current.blocked || !current.passwordHash || current.sessionVersion !== user.sessionVersion) {
    await clearUserSession(event);
    throw createError({ statusCode: 401, message: "Entre novamente para acessar o painel." });
  }
  if (superadminOnly && current.role !== "superadmin") {
    throw createError({ statusCode: 403, message: "Somente superadministradores podem convidar usu\xE1rios." });
  }
  return current;
}

export { requireAdmin as r };
//# sourceMappingURL=requireAdmin.mjs.map
