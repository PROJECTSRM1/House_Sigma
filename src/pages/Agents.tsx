import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import agentsData from "../data/agents";
import styles from "./Agent.module.css";

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

/* ---------------------- CustomSelect component ---------------------- */
/* Lightweight accessible custom dropdown that shows radio items in the panel.
   Props:
     - options: string[]
     - value: string
     - onChange: (value: string) => void
     - placeholder: string
     - width?: number (px) - width of the rendered button
     - menuWidth?: number (px) - width of the dropdown menu (white box)
*/
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

  // close when clicking outside
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!rootRef.current) return;
      if (rootRef.current.contains(e.target as Node)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  // keyboard interactions: Escape to close
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // compute button classes
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
          style={{ width: menuWidth ? `${menuWidth}px` : "100%" }} // <-- only menuWidth affects dropdown panel
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
                {/* custom radio visual */}
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
                  {/* custom radio visual */}
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
/* -------------------- end CustomSelect -------------------- */

/* -------------------- AgentCard (lazy load + fade) -------------------- */
function AgentCard({ agent }: { agent: Agent }): JSX.Element {
  const [isVisible, setIsVisible] = useState(false); // when near viewport
  const [loaded, setLoaded] = useState(false); // when img loaded
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // try to produce a smaller avatar URL for common providers (pravatar)
  function smallAvatar(url?: string | undefined) {
    if (!url) return "https://via.placeholder.com/160?text=Avatar";
    try {
      const u = new URL(url);
      const host = u.hostname.toLowerCase();
      if (host.includes("pravatar.cc") || host.includes("i.pravatar.cc")) {
        const newPath = u.pathname.replace(/\/\d{2,4}(?=\/|$)/, "/160");
        if (newPath !== u.pathname) {
          u.pathname = newPath;
          return u.toString();
        }
        u.searchParams.set("size", "160");
        return u.toString();
      }
    } catch {
      // not a full URL, fall back
    }
    return url;
  }

  useEffect(() => {
    const node = wrapRef.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            io.disconnect();
          }
        });
      },
      {
        root: null,
        rootMargin: "600px 0px 600px 0px", // preload well before coming into view
        threshold: 0.01,
      }
    );

    io.observe(node);

    return () => {
      io.disconnect();
    };
  }, []);

  const src = isVisible ? smallAvatar(agent.avatar) : undefined;
  const srcSet = isVisible
    ? `${smallAvatar(agent.avatar)} 160w, ${agent.avatar ?? ""} 320w`
    : undefined;

  return (
    <article className={styles.agentCard}>
      <div className={styles.avatarWrap} ref={wrapRef}>
        <img
          src={src}
          srcSet={srcSet}
          sizes="(max-width: 480px) 120px, 160px"
          alt={agent.name}
          className={`${styles.avatar} ${loaded ? styles.avatarLoaded : ""}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setLoaded(true);
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

/* Filters Component — uses CSS class for active pill and uses CustomSelect */
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
      {/* Province Pills */}
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

      {/* Custom Select Filters (replaces native selects) */}
      <div className={styles.filterRow}>
        <div className={styles.selectWrap}>
          <CustomSelect
            options={areas}
            value={selectedArea}
            onChange={setSelectedArea}
            placeholder="All areas"
            width={230} /* button width; menu width also follows */
            menuWidth={330} /* <-- only the dropdown menu will be wider */
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

export default function AgentsPage(): JSX.Element {
  const [activeProvince, setActiveProvince] = useState<string>(PROVINCES[0]);
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const loadingRef = useRef(false);
  const scrollDebounceRef = useRef<number | null>(null);

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

  const filtered = useMemo(() => {
    return provinceAgents.filter((a) => {
      const matchArea = selectedArea ? a.area === selectedArea : true;
      const matchLang = selectedLanguage ? a.languages.includes(selectedLanguage) : true;
      return matchArea && matchLang;
    });
  }, [provinceAgents, selectedArea, selectedLanguage]);

  const visibleAgents = filtered.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(12);
  }, [activeProvince, selectedArea, selectedLanguage]);

  const loadMore = (amount = 8) => {
    if (loadingRef.current) return;
    if (visibleCount >= filtered.length) return;

    loadingRef.current = true;

    setTimeout(() => {
      setVisibleCount((c) => Math.min(filtered.length, c + amount));
      loadingRef.current = false;
    }, 200);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const THRESHOLD_PX = 1000;
    function handleScroll() {
      if (scrollDebounceRef.current) window.clearTimeout(scrollDebounceRef.current);
      scrollDebounceRef.current = window.setTimeout(() => {
        const scrolledFromTop = window.scrollY || window.pageYOffset;
        const viewportHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        const distanceFromBottom = fullHeight - (scrolledFromTop + viewportHeight);
        if (distanceFromBottom <= THRESHOLD_PX) loadMore(8);
      }, 120);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollDebounceRef.current) window.clearTimeout(scrollDebounceRef.current);
    };
  }, [filtered.length, visibleCount]);

  return (
    <>
      <Navbar />
      <main className={styles.agentsPage}>
        <h1 className={styles.pageTitle}>Agents</h1>

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
          {visibleAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
          {filtered.length === 0 && <p className={styles.noResults}>No agents found.</p>}
        </section>
      </main>
      <Footer />
    </>
  );
}
