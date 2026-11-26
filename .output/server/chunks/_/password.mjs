import { Hash } from '@adonisjs/hash';
import { Scrypt } from '@adonisjs/hash/drivers/scrypt';
import { k as useRuntimeConfig } from '../nitro/nitro.mjs';

let _hash;
function getHash() {
  if (!_hash) {
    const options = useRuntimeConfig().hash?.scrypt;
    const scrypt = new Scrypt(options);
    _hash = new Hash(scrypt);
  }
  return _hash;
}
async function hashPassword(password) {
  return await getHash().make(password);
}
async function verifyPassword(hashedPassword, plainPassword) {
  return await getHash().verify(hashedPassword, plainPassword);
}

export { hashPassword as h, verifyPassword as v };
//# sourceMappingURL=password.mjs.map
