// src/utils/ImageCompressor.ts
// Standalone image compressor utility.
// - Compresses files larger than `maxSizeKB` down to <= `maxSizeKB`
// - Files <= maxSizeKB remain unchanged
// - Returns a Promise<File>

export type CompressOptions = {
  maxSizeKB?: number;       // target size after compression (default 300 KB)
  maxDimension?: number;    // max width/height for resizing (default 1920)
  mimeType?: string;        // output type (default "image/jpeg")
  convertPngToJpeg?: boolean; // convert PNG → JPEG (default true)
};

export function getFileSizeKB(file: File | Blob): number {
  return Math.round(file.size / 1024);
}

/**
 * Compress a single image file.
 * Behavior:
 *  - If file.size <= maxSizeKB -> returns original (no compression)
 *  - Otherwise, resizes if needed and reduces JPEG quality (binary search)
 *    until size <= maxSizeKB (or best effort after iterations)
 */
export async function compressImageFile(
  file: File,
  opts: CompressOptions = {}
): Promise<File> {
  const {
    maxSizeKB = 300,
    maxDimension = 1920,
    mimeType = "image/jpeg",
    convertPngToJpeg = true,
  } = opts;

  const targetBytes = maxSizeKB * 1024;

  // If already <= target, return original immediately.
  if (file.size <= targetBytes) return file;

  // Only attempt for image types
  if (!file.type.startsWith("image/")) return file;

  // Load image
  const img = await loadImageFromFile(file);

  // Resize preserving aspect ratio if needed
  const { width: iw, height: ih } = img;
  let scale = 1;
  if (Math.max(iw, ih) > maxDimension) {
    scale = maxDimension / Math.max(iw, ih);
  }

  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(iw * scale));
  canvas.height = Math.max(1, Math.round(ih * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas not supported");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  // Choose output mime (convert PNG -> JPEG if requested for better compression)
  const outputMime =
    file.type === "image/png" && convertPngToJpeg ? "image/jpeg" : mimeType;

  // First attempt with high quality
  const firstBlob = await canvasToBlob(canvas, outputMime, 0.95);
  if (!firstBlob) throw new Error("Failed to create blob from canvas");

  // If already below target after resize + high quality, return it
  if (firstBlob.size <= targetBytes) {
    return blobToFile(firstBlob, file.name, outputMime);
  }

  // Binary search for quality between 0.1 and 0.95 to reach targetBytes
  let low = 0.1;
  let high = 0.95;
  let bestBlob: Blob | null = firstBlob;

  for (let i = 0; i < 10; i++) {
    const q = (low + high) / 2;
    const trial = await canvasToBlob(canvas, outputMime, q);
    if (!trial) break;

    if (trial.size <= targetBytes) {
      // trial is within target — keep it and try increase quality
      bestBlob = trial;
      low = q;
    } else {
      // too large — lower quality
      high = q;
    }
    if (high - low < 0.01) break;
  }

  if (bestBlob) {
    return blobToFile(bestBlob, file.name, outputMime);
  } else {
    return file;
  }
}

/**
 * Compress multiple files (only images). Files <= maxSizeKB are passed through.
 */
export async function compressImageFiles(
  files: File[],
  opts: CompressOptions = {}
): Promise<File[]> {
  const out: File[] = [];
  for (const f of files) {
    if (!f.type.startsWith("image/")) {
      out.push(f);
      continue;
    }
    try {
      const compressed = await compressImageFile(f, opts);
      out.push(compressed);
    } catch (err) {
      console.error("compressImageFile error:", err);
      out.push(f);
    }
  }
  return out;
}

/* ---------- helpers ---------- */

function loadImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Failed to load image"));
    };
    img.src = url;
  });
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  mimeType: string,
  quality: number
): Promise<Blob | null> {
  return new Promise((resolve) => {
    if (canvas.toBlob) {
      canvas.toBlob((b) => resolve(b), mimeType, quality);
    } else {
      try {
        const dataURL = canvas.toDataURL(mimeType, quality);
        resolve(dataURLToBlob(dataURL));
      } catch {
        resolve(null);
      }
    }
  });
}

function dataURLToBlob(dataURL: string): Blob {
  const parts = dataURL.split(",");
  const meta = parts[0];
  const base64 = parts[1] ?? "";
  const mime = meta.match(/:(.*?);/)?.[1] ?? "image/png";
  const binary = atob(base64);
  const len = binary.length;
  const arr = new Uint8Array(len);
  for (let i = 0; i < len; i++) arr[i] = binary.charCodeAt(i);
  return new Blob([arr], { type: mime });
}

function blobToFile(blob: Blob, filename: string, mimeType?: string): File {
  return new File([blob], filename, { type: mimeType ?? blob.type });
}
