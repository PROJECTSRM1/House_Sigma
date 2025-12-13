// compress-avatars.mjs
import fs from "fs";
import path from "path";
import sharp from "sharp";

const __dirname = process.cwd(); // assumes you run: node compress-avatars.mjs from project root

// INPUT & OUTPUT FOLDERS – change if needed
const INPUT_DIR = path.join(__dirname, "src", "assets", "alberta_images");
const OUTPUT_DIR = path.join(__dirname, "src", "assets", "agents_optimized");

// Target size for avatars (matches your <img width={160} height={160}>)
const TARGET_WIDTH = 160;
const TARGET_HEIGHT = 160;

// Compression settings – tune quality if needed
const OUTPUT_FORMAT = "webp"; // "webp" is usually smaller than jpeg
const QUALITY = 60; // lower = smaller file. Try 50–70 range.

async function ensureOutputDir() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log("Created output directory:", OUTPUT_DIR);
  }
}

function isImageFile(fileName) {
  const ext = path.extname(fileName).toLowerCase();
  return [".png", ".jpg", ".jpeg", ".webp"].includes(ext);
}

async function compressOne(fileName) {
  const inputPath = path.join(INPUT_DIR, fileName);
  const baseName = path.parse(fileName).name; // without extension
  const outputFileName = `${baseName}.${OUTPUT_FORMAT}`;
  const outputPath = path.join(OUTPUT_DIR, outputFileName);

  try {
    const inputBuffer = fs.readFileSync(inputPath);
    const inputKB = Math.round(inputBuffer.length / 1024);

    const sharpInstance = sharp(inputBuffer).resize(TARGET_WIDTH, TARGET_HEIGHT, {
      fit: "cover",
    });

    let outputSharp = sharpInstance;
    if (OUTPUT_FORMAT === "webp") {
      outputSharp = sharpInstance.webp({ quality: QUALITY });
    } else if (OUTPUT_FORMAT === "jpeg" || OUTPUT_FORMAT === "jpg") {
      outputSharp = sharpInstance.jpeg({ quality: QUALITY });
    } else if (OUTPUT_FORMAT === "png") {
      outputSharp = sharpInstance.png({ compressionLevel: 9 });
    }

    const outputBuffer = await outputSharp.toBuffer();
    fs.writeFileSync(outputPath, outputBuffer);

    const outputKB = Math.round(outputBuffer.length / 1024);

    console.log(
      `${fileName} -> ${outputFileName} | ${inputKB} KB -> ${outputKB} KB`
    );
  } catch (err) {
    console.error("Failed to compress:", fileName, err.message);
  }
}

async function main() {
  console.log("Input folder:", INPUT_DIR);
  console.log("Output folder:", OUTPUT_DIR);

  await ensureOutputDir();

  const files = fs.readdirSync(INPUT_DIR).filter(isImageFile);
  if (!files.length) {
    console.log("No images found in", INPUT_DIR);
    return;
  }

  console.log(`Found ${files.length} images. Compressing...\n`);

  for (const file of files) {
    await compressOne(file);
  }

  console.log("\nDone! Check:", OUTPUT_DIR);
}

main().catch((err) => {
  console.error("Unexpected error:", err);
});
