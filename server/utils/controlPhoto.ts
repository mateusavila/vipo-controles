import sharp from 'sharp'
import { photoMaxBytes, pngUploadMaxBytes } from '../../shared/catalog'

export async function controlPhoto(encoded: string, id: string) {
  const input = Buffer.from(encoded, 'base64')
  const mime = detectMime(input)
  if (!mime) throw createError({ statusCode: 400, message: 'Use uma foto JPG, PNG, WebP ou AVIF válida.' })

  let bytes = input
  let outputMime = mime
  if (mime === 'image/png') {
    if (input.length > pngUploadMaxBytes) {
      throw createError({ statusCode: 400, message: 'O PNG deve ter até 3 MiB.' })
    }

    try {
      bytes = await sharp(input, { limitInputPixels: 16_000_000 })
        .webp({ quality: 88, alphaQuality: 100 })
        .toBuffer()
      outputMime = 'image/webp'
    } catch {
      throw createError({ statusCode: 400, message: 'Não foi possível converter o PNG. Confira se a imagem abre normalmente e se tem até 16 megapixels.' })
    }
  }

  if (bytes.length > photoMaxBytes) {
    throw createError({
      statusCode: 400,
      message: mime === 'image/png'
        ? 'A foto ficou acima de 750 KiB após a conversão. Envie um PNG com dimensões menores.'
        : 'Fotos em JPG, WebP ou AVIF devem ter até 750 KiB.',
    })
  }

  return {
    photoUrl: `/api/controls/${id}/photo`,
    photoBytes: bytes,
    photoMime: outputMime,
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
