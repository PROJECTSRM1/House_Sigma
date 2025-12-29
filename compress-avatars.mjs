import fs from "fs";
import path from "path";
import sharp from "sharp";

const __dirname = process.cwd();

/* =====================================================
   CONFIG — TUNED FOR REAL ESTATE LISTING IMAGES
===================================================== */

// Input folder (your original images)
const INPUT_DIR = path.join(__dirname, "public", "assets", "Property_images");

// Output folder (optimized images)
const OUTPUT_DIR = path.join(
  __dirname,
  "public",
  "assets",
  "images_optimized"
);

// Target size → matches listing cards (16:9)
const TARGET_WIDTH = 720;
const TARGET_HEIGHT = 405;

// JPEG output settings
const OUTPUT_FORMAT = "jpg";

// Quality tuning → keeps images ~80–100 KB
const JPEG_QUALITY = 72;

// Enable progressive JPEG (better perceived loading)
const PROGRESSIVE = true;

/* =====================================================
   HELPERS
===================================================== */

function ensureOutputDir() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log("✅ Created output directory:", OUTPUT_DIR);
  }
}

function isImageFile(fileName) {
  return [".jpg", ".jpeg", ".png", ".webp"].includes(
    path.extname(fileName).toLowerCase()
  );
}

/* =====================================================
   IMAGE COMPRESSION
===================================================== */

async function compressOne(fileName) {
  const inputPath = path.join(INPUT_DIR, fileName);
  const baseName = path.parse(fileName).name;
  const outputFileName = `${baseName}.${OUTPUT_FORMAT}`;
  const outputPath = path.join(OUTPUT_DIR, outputFileName);

  try {
    const inputBuffer = fs.readFileSync(inputPath);
    const inputKB = Math.round(inputBuffer.length / 1024);

    const outputBuffer = await sharp(inputBuffer)
      .resize(TARGET_WIDTH, TARGET_HEIGHT, {
        fit: "cover",
        position: "centre",
      })
      .jpeg({
        quality: JPEG_QUALITY,
        progressive: PROGRESSIVE,
        mozjpeg: true,
      })
      .toBuffer();

    fs.writeFileSync(outputPath, outputBuffer);

    const outputKB = Math.round(outputBuffer.length / 1024);

    console.log(
      `${fileName} → ${outputFileName} | ${inputKB} KB → ${outputKB} KB`
    );
  } catch (err) {
    console.error("❌ Failed:", fileName, err.message);
  }
}

/* =====================================================
   MAIN
===================================================== */

async function main() {
  console.log("📂 Input :", INPUT_DIR);
  console.log("📂 Output:", OUTPUT_DIR);

  ensureOutputDir();

  const files = fs.readdirSync(INPUT_DIR).filter(isImageFile);

  if (!files.length) {
    console.log("⚠️ No images found.");
    return;
  }

  console.log(`🖼️ Found ${files.length} images. Optimizing...\n`);

  for (const file of files) {
    await compressOne(file);
  }

  console.log("\n✅ Optimization complete!");
}

main().catch((err) => {
  console.error("Unexpected error:", err);
});