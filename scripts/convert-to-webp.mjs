import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const assetsDir = './src/assets';
const files = readdirSync(assetsDir);

const pngFiles = files.filter(f => extname(f).toLowerCase() === '.png' && f !== 'logo.png' && f !== 'react.svg' && f !== 'vite.svg');

console.log(`\n🖼️  Converting ${pngFiles.length} PNG files to WebP...\n`);

let totalOriginal = 0;
let totalConverted = 0;

for (const file of pngFiles) {
  const inputPath = join(assetsDir, file);
  const outputName = basename(file, '.png') + '.webp';
  const outputPath = join(assetsDir, outputName);

  const originalSize = statSync(inputPath).size;
  totalOriginal += originalSize;

  try {
    await sharp(inputPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);

    const newSize = statSync(outputPath).size;
    totalConverted += newSize;

    const saving = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
    console.log(`✅ ${file} → ${outputName}  |  ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB  (${saving}% smaller)`);
  } catch (err) {
    console.error(`❌ Failed: ${file}`, err.message);
  }
}

const totalSaving = (((totalOriginal - totalConverted) / totalOriginal) * 100).toFixed(1);
console.log(`\n🎉 Total: ${(totalOriginal/1024/1024).toFixed(2)}MB → ${(totalConverted/1024/1024).toFixed(2)}MB  (${totalSaving}% saved)\n`);
