import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import agentsData from "../data/agents";
import styles from "./Agent.module.css";

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
  avatar?: string;
};

const PROVINCES = ["Ontario", "British Columbia", "Alberta"] as const;

/* Simple inline SVG placeholder (blank box) */
const SVG_PLACEHOLDER =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><rect width='100%' height='100%' fill='%23f6f7f8'/></svg>";

/**
 * Global cache of successfully loaded image URLs.
 * This avoids re-downloading the same avatar if components re-mount.
 */
const loadedUrlCache = new Set<string>();

/* -------------------- AgentCard: show placeholder until image is loaded -------------------- */
function AgentCard({ agent }: { agent: Agent }): JSX.Element {
  const [loaded, setLoaded] = useState<boolean>(() => {
    // if URL already known-loaded, start as loaded
    return !!(agent.avatar && loadedUrlCache.has(agent.avatar));
  });
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    // If there's no avatar, nothing to load.
    const url = agent.avatar;
    if (!url) return;

    // If it's already cached as loaded, we are done.
    if (loadedUrlCache.has(url)) {
      setLoaded(true);
      return;
    }

    let isMounted = true;
    const img = new Image();

    const onLoad = () => {
      if (!isMounted) return;
      loadedUrlCache.add(url);
      setLoaded(true);
    };
    const onError = () => {
      if (!isMounted) return;
      setErrored(true);
    };

    img.onload = onLoad;
    img.onerror = onError;
    // start immediate parallel download
    img.src = url;

    return () => {
      isMounted = false;
      // remove listeners to be safe
      img.onload = null;
      img.onerror = null;
    };
  }, [agent.avatar]);

  // Defensive DOM-level error handler (should rarely trigger because we preload)
  const handleImgError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      if (errored) return;
      setErrored(true);
      const imgEl = e.currentTarget;
      imgEl.onerror = null;
      imgEl.src = SVG_PLACEHOLDER;
    },
    [errored]
  );

  // show placeholder while not loaded or errored; else show agent.avatar
  const displaySrc = loaded && agent.avatar && !errored ? agent.avatar : SVG_PLACEHOLDER;

  return (
    <article className={styles.agentCard}>
      <div className={styles.avatarWrap}>
        <img
          src={displaySrc}
          alt={agent.name}
          className={styles.avatar}
          // since we preload via Image(), using "eager" or "auto" doesn't matter much, but eager hints browser
          loading="eager"
          decoding="async"
          width={160}
          height={160}
          onError={handleImgError}
          style={{
            objectFit: "cover",
            transition: "opacity 200ms ease, transform 200ms ease",
            opacity: displaySrc === SVG_PLACEHOLDER ? 0.7 : 1,
            transform: "none",
          }}
        />
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.agentName}>{agent.name}</h3>
        <p className={styles.agentRole}>{agent.role}</p>
      </div>
    </article>
  );
}
/* -------------------- end AgentCard -------------------- */

/* -------------------- CustomSelect and Filters (unchanged logic from your app) -------------------- */

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

  // derive agents matching province
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
      Array.from(new Set(provinceAgents.flatMap((a) => a.languages))).sort(),
    [provinceAgents]
  );

  // Filtered result (no visibleCount slicing — show all at once)
  const filtered = useMemo(() => {
    return provinceAgents.filter((a) => {
      const matchArea = selectedArea ? a.area === selectedArea : true;
      const matchLang = selectedLanguage ? a.languages.includes(selectedLanguage) : true;
      return matchArea && matchLang;
    });
  }, [provinceAgents, selectedArea, selectedLanguage]);

  /* ------------------ Preload all avatars immediately (start parallel downloads) ------------------ */
  useEffect(() => {
    // preload all avatar URLs for the current filtered list
    const urls = Array.from(new Set(filtered.map((a) => a.avatar).filter(Boolean) as string[]));
    const imgs: HTMLImageElement[] = [];

    urls.forEach((u) => {
      // if already cached by our global set, skip creating a new Image; the AgentCard will reflect loaded state
      if (u && !loadedUrlCache.has(u)) {
        const img = new Image();
        img.src = u;
        // record onload to populate global cache (helps if AgentCard mounts later)
        img.onload = () => loadedUrlCache.add(u);
        img.onerror = () => {
          /* ignore errors here; AgentCard will show placeholder */
        };
        imgs.push(img);
      }
    });

    // cleanup: let browser continue but remove onload listeners to avoid memory leaks
    return () => {
      imgs.forEach((im) => {
        im.onload = null;
        im.onerror = null;
      });
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

          {filtered.length === 0 && <p className={styles.noResults}>No agents found.</p>}
        </section>
      </main>
      <Footer />

      {openChat && <ChatBot onClose={() => setOpenChat(false)} />}
      <FloatingChatButton onOpen={() => setOpenChat(true)} />
    </>
  );
}