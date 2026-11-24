import { z } from 'zod'

export const photoMaxBytes = 750 * 1024

export const remoteFields = z.object({
  name: z.string().trim().min(1, 'Informe o nome.').max(160),
  vipoCode: z.string().trim().min(1, 'Informe o código Vipo.').max(60).transform(value => value.toUpperCase()),
  category: z.enum(['tv', 'ac']),
  originalRemoteCode: z.string().trim().max(80),
  notes: z.string().trim().max(2000),
  active: z.boolean(),
  brandIds: z.array(z.uuid({ error: 'Selecione uma marca válida.' })).max(100),
  models: z.array(z.string().trim().min(1, 'Informe o modelo ou a linha.').max(140)).max(100),
})

export type RemoteFields = z.input<typeof remoteFields>
