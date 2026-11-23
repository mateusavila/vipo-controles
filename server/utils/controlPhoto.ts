import { photoMaxBytes } from '../../shared/catalog'

export function controlPhoto(encoded: string, id: string) {
  const bytes = Buffer.from(encoded, 'base64')
  const mime = detectMime(bytes)
  if (!mime || bytes.length > photoMaxBytes) {
    throw createError({ statusCode: 400, message: 'Use JPG, PNG, WebP ou AVIF de até 750 KiB.' })
  }

  return {
    photoUrl: `/api/controls/${id}/photo`,
    photoBytes: bytes,
    photoMime: mime,
  }
}

function detectMime(bytes: Buffer) {
  if (bytes.subarray(0, 8).toString('hex') === '89504e470d0a1a0a') return 'image/png'
  if (bytes.subarray(0, 3).toString('hex') === 'ffd8ff') return 'image/jpeg'
  if (bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP') return 'image/webp'
  if (bytes.length < 16 || bytes.toString('ascii', 4, 8) !== 'ftyp') return
  const boxSize = bytes.readUInt32BE(0)
  if (boxSize < 16 || boxSize > bytes.length || boxSize % 4) return
  for (let offset = 8; offset < boxSize; offset += 4) {
    if (offset === 12) continue
    const brand = bytes.toString('ascii', offset, offset + 4)
    if (brand === 'avif' || brand === 'avis') return 'image/avif'
  }
}
