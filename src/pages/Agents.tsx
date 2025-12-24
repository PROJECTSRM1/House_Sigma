// src/pages/Agents.tsx
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import agentsData from "../data/agents";
import styles from "./Agent.module.css";

// Image compressor helpers (their types are unknown to us here)
import {
  compressImageFile,
  compressImageFiles,
  getFileSizeKB,
} from "@/pages/ImageCompressor";

import FloatingChatButton from "../components/floatingWindowChatBot";
import ChatBot from "../components/chatbot";

/* Types */
export type Agent = {
  id: number;
  name: string;
  role: string;
  province: string;
  area: string;
  languages: string[];
  avatar?: string; // local image URL
  phone: string;
};

const PROVINCES = ["Ontario", "British Columbia", "Alberta"] as const;

/* Simple inline SVG placeholder (blank box) */
const SVG_PLACEHOLDER =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><rect width='100%' height='100%' fill='%23f6f7f8'/></svg>";

/**
 * Global caches (module-level).
 */
const compressedUrlCache = new Map<string, string>();
const compressingUrls = new Set<string>();

/**
 * Small typed wrappers around imported helpers.
 * We don't change the original exports — we only provide typed views to avoid `any`.
 */
type CompressResult = string | Blob | File;
const typedCompressImageFile = compressImageFile as unknown as (input: File | string) => Promise<CompressResult>;
const typedCompressImageFiles = compressImageFiles as unknown as (input: string[]) => Promise<unknown>;
const typedGetFileSizeKB = getFileSizeKB as unknown as (f: File) => Promise<number>;

/**
 * Convert a Blob -> File (useful because helpers may expect File)
 */
function blobToFile(blob: Blob, filename = "image"): File {
  try {
    return new File([blob], filename, { type: blob.type || "image/jpeg" });
  } catch {
    // Some older environments may not allow `File` constructor; fallback to Blob cast
    return blob as unknown as File;
  }
}

/**
 * Fetch a URL and return a Blob (or null).
 */
async function fetchBlob(url: string): Promise<Blob | null> {
  try {
    const resp = await fetch(url, { method: "GET", cache: "force-cache" });
    if (!resp.ok) return null;
    return await resp.blob();
  } catch {
    return null;
  }
}

/**
 * Get size in KB for a Blob/File/dataURL string.
 * Prefer calling the provided helper if it expects File; otherwise fallback.
 */
async function sizeKBOf(input: string | Blob | File): Promise<number | null> {
  // If input is a data URL string, estimate from base64
  if (typeof input === "string") {
    if (input.startsWith("data:")) {
      const base64 = input.split(",")[1] || "";
      const approxBytes = Math.ceil((base64.length * 3) / 4);
      return Math.round(approxBytes / 1024);
    } else {
      // it's a remote URL string - try fetch blob and measure
      const b = await fetchBlob(input);
      if (!b) return null;
      return Math.round((b.size || 0) / 1024);
    }
  }

  // For Blob/File: try the helper (if available) by passing a File
  try {
    const fileLike = input instanceof File ? input : blobToFile(input as Blob, "avatar");
    const maybe = await typedGetFileSizeKB(fileLike);
    if (typeof maybe === "number") return Math.round(maybe);
  } catch {
    // fallback to blob.size
  }

  try {
    const size = (input as Blob).size || 0;
    return Math.round(size / 1024);
  } catch {
    return null;
  }
}

/**
 * Compress a single URL and, if beneficial, store compressed data URL in cache.
 * This function fetches the original as a Blob -> File and calls the compressor with File.
 */
async function compressAndCacheUrl(url: string, bump: () => void): Promise<void> {
  if (!url) return;
  if (compressedUrlCache.has(url)) return;
  if (compressingUrls.has(url)) return;
  compressingUrls.add(url);

  try {
    // fetch blob of original so we can pass File to helpers that expect File
    const originalBlob = await fetchBlob(url);
    const originalFile = originalBlob
      ? blobToFile(originalBlob, "original.jpg")
      : undefined;

    const originalSizeKB = originalFile
      ? await sizeKBOf(originalFile)
      : await sizeKBOf(url);

    let compressedOutput: CompressResult | undefined;

    if (originalFile) {
      try {
        const maybe = await typedCompressImageFile(originalFile);
        compressedOutput = maybe;
      } catch {
        compressedOutput = undefined;
      }
    }

    if (!compressedOutput) {
      try {
        const maybe2 = await typedCompressImageFile(url);
        compressedOutput = maybe2;
      } catch {
        compressedOutput = undefined;
      }
    }

    if (!compressedOutput) return;

    let compressedDataUrl: string | undefined;

    if (typeof compressedOutput === "string") {
      compressedDataUrl = compressedOutput;
    } else if (
      compressedOutput instanceof File ||
      compressedOutput instanceof Blob
    ) {
      compressedDataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(new Error("failed-to-read-blob"));
        reader.readAsDataURL(compressedOutput as Blob);
      });
    }

    if (!compressedDataUrl) return;

    const compressedSizeKB = await sizeKBOf(compressedDataUrl);

    console.log("Original Size:", originalSizeKB, "KB", url);
    console.log("Compressed Size:", compressedSizeKB, "KB", url);

    const shouldUseCompressed =
      compressedSizeKB !== null &&
      originalSizeKB !== null &&
      compressedSizeKB < originalSizeKB;

    if (shouldUseCompressed) {
      compressedUrlCache.set(url, compressedDataUrl);
      console.log("✅ Using compressed version for:", url);
      bump();
    }
  } finally {
    compressingUrls.delete(url);
  }
}

/* -------------------- AgentCard -------------------- */
function AgentCard({ agent }: { agent: Agent }): JSX.Element {
  const baseUrl = agent.avatar;
  const cachedCompressed = baseUrl ? compressedUrlCache.get(baseUrl) : undefined;

  const [src, setSrc] = useState<string>(() => {
    if (cachedCompressed) return cachedCompressed;
    if (baseUrl) return baseUrl;
    return SVG_PLACEHOLDER;
  });

  const [errored, setErrored] = useState(false);

  useEffect(() => {
    if (cachedCompressed && !errored) {
      setSrc(cachedCompressed);
    } else if (baseUrl && !errored) {
      setSrc(baseUrl);
    }
  }, [cachedCompressed, baseUrl, errored]);

  const handleImgError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      if (errored) return;
      setErrored(true);
      e.currentTarget.src = SVG_PLACEHOLDER;
      setSrc(SVG_PLACEHOLDER);
    },
    [errored]
  );

  return (
    <article className={styles.agentCard}>
      <div className={styles.avatarWrap}>
        <img
          src={src}
          alt={agent.name}
          className={styles.avatar}
          loading="eager"
          decoding="async"
          width={160}
          height={160}
          onError={handleImgError}
        />
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.agentName}>{agent.name}</h3>

        <p className={styles.agentRole}>{agent.role}</p>

        {/* 📞 Phone Number BELOW role */}
        <p className={styles.agentPhone}>
          <a href={`tel:${agent.phone}`}>{agent.phone}</a>
        </p>
      </div>
    </article>
  );
}

/* -------------------- end AgentCard -------------------- */

/* -------------------- CustomSelect and Filters -------------------- */

function CustomSelect({
  options,
  value,
  onChange,
  placeholder,
  width = 230,
  menuWidth,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  width?: number;
  menuWidth?: number;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!rootRef.current) return;
      if (rootRef.current.contains(e.target as Node)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const buttonClass =
    styles.customSelectButton +
    " " +
    ((value || open) ? styles.customSelectActive : "") +
    " " +
    (open ? styles.customSelectOpen : "");

  return (
    <div
      className={styles.customSelectWrap}
      ref={rootRef}
      style={{ width: `${width}px` }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        className={buttonClass}
        onClick={() => setOpen((s) => !s)}
      >
        <span className={styles.customSelectLabel}>{value || placeholder}</span>
        <span className={styles.customSelectArrow} aria-hidden>
          ▼
        </span>
      </button>

      {open && (
        <div
          className={styles.customSelectMenu}
          role="listbox"
          style={{ width: menuWidth ? `${menuWidth}px` : "100%" }}
        >
          <ul className={styles.customOptionsList}>
            <li key="__all__" className={styles.customOptionRow}>
              <label className={styles.customOption}>
                <input
                  type="radio"
                  name={`custom-${placeholder}`}
                  checked={value === ""}
                  onChange={() => {
                    onChange("");
                    setOpen(false);
                    buttonRef.current?.focus();
                  }}
                />
                <span className={styles.customRadio} />
                <span className={styles.customOptionLabel}>All areas</span>
              </label>
            </li>

            {options.map((opt) => (
              <li key={opt} className={styles.customOptionRow}>
                <label className={styles.customOption}>
                  <input
                    type="radio"
                    name={`custom-${placeholder}`}
                    checked={value === opt}
                    onChange={() => {
                      onChange(opt);
                      setOpen(false);
                      buttonRef.current?.focus();
                    }}
                  />
                  <span className={styles.customRadio} />
                  <span className={styles.customOptionLabel}>{opt}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Filters(props: {
  provinces: readonly string[];
  activeProvince: string;
  setActiveProvince: (p: string) => void;
  areas: string[];
  selectedArea: string;
  setSelectedArea: (a: string) => void;
  languages: string[];
  selectedLanguage: string;
  setSelectedLanguage: (l: string) => void;
}) {
  const {
    provinces,
    activeProvince,
    setActiveProvince,
    areas,
    selectedArea,
    setSelectedArea,
    languages,
    selectedLanguage,
    setSelectedLanguage,
  } = props;

  return (
    <section className={styles.filters}>
      <div className={styles.filterGroup}>
        {provinces.map((p) => {
          const isActive = p === activeProvince;

          return (
            <button
              key={p}
              type="button"
              className={styles.provinceBtn}
              onClick={() => setActiveProvince(p)}
            >
              <span
                className={`${styles.provinceInner} ${
                  isActive ? styles.provinceInnerActive : ""
                }`}
              >
                {p}
              </span>
            </button>
          );
        })}
      </div>

      <div className={styles.filterRow}>
        <div className={styles.selectWrap}>
          <CustomSelect
            options={areas}
            value={selectedArea}
            onChange={setSelectedArea}
            placeholder="All areas"
            width={230}
            menuWidth={330}
          />
        </div>

        <div className={styles.selectWrap}>
          <CustomSelect
            options={languages}
            value={selectedLanguage}
            onChange={setSelectedLanguage}
            placeholder="All languages"
            width={230}
          />
        </div>
      </div>
    </section>
  );
}

/* -------------------- AgentsPage (main) -------------------- */

export default function AgentsPage(): JSX.Element {
  const [activeProvince, setActiveProvince] = useState<string>(PROVINCES[0]);
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [openChat, setOpenChat] = useState(false);

  // This state is incremented whenever we add compressed items so that AgentCards re-render.
  const [, setCompressedVersionCounter] = useState(0);

  const provinceAgents = useMemo(
    () => (agentsData as Agent[]).filter((a) => a.province === activeProvince),
    [activeProvince]
  );

  const areas = useMemo(
    () => Array.from(new Set(provinceAgents.map((a) => a.area))).sort(),
    [provinceAgents]
  );

  const languages = useMemo(
    () =>
      Array.from(
        new Set(provinceAgents.flatMap((a) => a.languages))
      ).sort(),
    [provinceAgents]
  );

  const filtered = useMemo(() => {
    return provinceAgents.filter((a) => {
      const matchArea = selectedArea ? a.area === selectedArea : true;
      const matchLang = selectedLanguage ? a.languages.includes(selectedLanguage) : true;
      return matchArea && matchLang;
    });
  }, [provinceAgents, selectedArea, selectedLanguage]);

  // Pre-compress filtered agent avatars in background.
  useEffect(() => {
    let cancelled = false;
    const urls = Array.from(
      new Set(filtered.map((a) => a.avatar).filter(Boolean) as string[])
    );

    (async () => {
      const bump = () => {
        if (!cancelled) {
          setCompressedVersionCounter((c) => c + 1);
        }
      };

      // Attempt bulk compress first if helper exists
      const toCompress = urls.filter((u) => u && !compressedUrlCache.has(u));
      if (toCompress.length > 0) {
        try {
          const bulkResult = await typedCompressImageFiles(toCompress);

          if (Array.isArray(bulkResult) && bulkResult.length) {
            for (let i = 0; i < bulkResult.length; i++) {
              const entry = bulkResult[i] as unknown;

              // entry may be a string, or object with { original, compressed } or { data }
              let originalFromEntry: string | undefined;
              let compressedFromEntry: string | undefined;

              if (typeof entry === "string") {
                originalFromEntry = toCompress[i];
                compressedFromEntry = entry;
              } else if (entry && typeof entry === "object") {
                const obj = entry as Record<string, unknown>;
                if (typeof obj.original === "string") originalFromEntry = obj.original;
                if (typeof obj.compressed === "string") compressedFromEntry = obj.compressed;
                if (!compressedFromEntry && typeof obj.data === "string") compressedFromEntry = obj.data;
                // fallback to index mapping if original missing
                if (!originalFromEntry) originalFromEntry = toCompress[i];
              } else {
                // unknown shape -> skip
                originalFromEntry = toCompress[i];
              }

              if (originalFromEntry && compressedFromEntry && !compressedUrlCache.has(originalFromEntry)) {
                compressedUrlCache.set(originalFromEntry, compressedFromEntry);
              }
            }
            bump();
          }
        } catch {
          // ignore bulk helper failure and fallback to individual compression
        }
      }

      // Individual compress for any remaining
      await Promise.all(
        toCompress.map(async (u) => {
          try {
            if (!u) return;
            if (!compressedUrlCache.has(u)) {
              await compressAndCacheUrl(u, bump);
            }
          } catch {
            // swallow errors per-image to be resilient
          }
        })
      );
    })();

    return () => {
      cancelled = true;
    };
  }, [filtered]);

  return (
    <>
      <Navbar />
      <main className={styles.agentsPage}>
        <Filters
          provinces={PROVINCES}
          activeProvince={activeProvince}
          setActiveProvince={(p) => {
            setActiveProvince(p);
            setSelectedArea("");
            setSelectedLanguage("");
          }}
          areas={areas}
          selectedArea={selectedArea}
          setSelectedArea={setSelectedArea}
          languages={languages}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
        />

        <section className={styles.agentsGrid}>
          {filtered.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}

          {filtered.length === 0 && (
            <p className={styles.noResults}>No agents found.</p>
          )}
        </section>
      </main>
      <Footer />

      {openChat && <ChatBot onClose={() => setOpenChat(false)} />}
      <FloatingChatButton onOpen={() => setOpenChat(true)} />
    </>
  );
}
