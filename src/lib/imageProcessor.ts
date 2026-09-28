// EXIF Data Stripping for Customer Privacy
import sharp from 'sharp';

export async function stripExifData(buffer: Buffer): Promise<Buffer> {
  return sharp(buffer)
    .rotate() // Auto-rotate based on EXIF before stripping
    .withMetadata({ orientation: undefined })
    .toBuffer();
}

export async function processUpload(buffer: Buffer, maxWidth = 1200): Promise<Buffer> {
  const stripped = await stripExifData(buffer);
  return sharp(stripped)
    .resize(maxWidth, null, { withoutEnlargement: true })
    .webp({ quality: 85 })
    .toBuffer();
}
