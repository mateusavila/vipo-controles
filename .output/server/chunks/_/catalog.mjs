import { z } from 'zod';

const photoMaxBytes = 750 * 1024;
const pngUploadMaxBytes = 3 * 1024 * 1024;
const remoteFields = z.object({
  vipoCode: z.string().trim().min(1, "Informe o c\xF3digo Vipo.").max(60).transform((value) => value.toUpperCase()),
  category: z.enum(["tv", "ac", "receptor"]),
  notes: z.string().trim().max(2e3),
  active: z.boolean(),
  brandIds: z.array(z.uuid({ error: "Selecione uma marca v\xE1lida." })).max(100),
  models: z.array(z.string().trim().min(1, "Informe o modelo ou a linha.").max(140)).max(100)
});

export { photoMaxBytes as a, pngUploadMaxBytes as p, remoteFields as r };
//# sourceMappingURL=catalog.mjs.map
