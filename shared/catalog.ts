import { z } from 'zod'

export const photoMaxBytes = 750 * 1024

export const remoteFields = z.object({
  name: z.string().trim().min(1, 'Informe o nome.').max(160),
  vipoCode: z.string().trim().min(1, 'Informe o código Vipo.').max(60).transform(value => value.toUpperCase()),
  category: z.enum(['tv', 'ac']),
  originalRemoteCode: z.string().trim().max(80),
  notes: z.string().trim().max(2000),
  active: z.boolean(),
  compatibilities: z.array(z.object({
    brandId: z.uuid({ error: 'Selecione a marca.' }),
    model: z.string().trim().min(1, 'Informe o modelo ou a linha.').max(140),
  })).max(100),
})

export type RemoteFields = z.input<typeof remoteFields>
