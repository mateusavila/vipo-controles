import { z } from 'zod';

const PASSWORD_MIN_LENGTH = 12;
function passwordRequirements(password) {
  return [
    { key: "length", met: password.length >= PASSWORD_MIN_LENGTH && password.length <= 128 },
    { key: "lowercase", met: /[a-z]/.test(password) },
    { key: "uppercase", met: /[A-Z]/.test(password) },
    { key: "numbers", met: /[0-9]/.test(password) },
    { key: "symbols", met: /[^\p{L}\p{N}\s]/u.test(password) }
  ];
}
const isStrongPassword = (password) => passwordRequirements(password).every((rule) => rule.met);
function strongPasswordSchema(message = "Use ao menos 12 caracteres, mai\xFAscula, min\xFAscula, n\xFAmero e s\xEDmbolo.") {
  return z.string({ error: message }).min(PASSWORD_MIN_LENGTH, message).max(128, message).refine(isStrongPassword, message);
}

export { PASSWORD_MIN_LENGTH as P, isStrongPassword as i, passwordRequirements as p, strongPasswordSchema as s };
//# sourceMappingURL=passwordPolicy.mjs.map
