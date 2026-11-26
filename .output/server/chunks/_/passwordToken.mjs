import { h as hashPasswordToken } from './passwordEmail.mjs';
import { and, eq } from 'drizzle-orm';
import { a as identityPasswordTokens, i as identityUsers } from './schema.mjs';

function validPasswordToken(token) {
  return and(
    eq(identityPasswordTokens.tokenHash, hashPasswordToken(token)),
    eq(identityPasswordTokens.userId, identityUsers.id),
    eq(identityPasswordTokens.sessionVersion, identityUsers.sessionVersion),
    eq(identityUsers.blocked, false)
  );
}

export { validPasswordToken as v };
//# sourceMappingURL=passwordToken.mjs.map
