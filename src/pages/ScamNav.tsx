import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Home, Search } from "lucide-react";
import logo from "/assets/logo.png";
import HOME from "/assets/HOME.png";
import styles from "./ScamNav.module.css";

const ScamNav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const {
        t: t
      } = useTranslation();

      if (menuOpen && headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [menuOpen]);

   const { t } = useTranslation();

  // Close menu when resizing to desktop
  useEffect(() => {
    function onResize() {
      const {
        t: t
      } = useTranslation();

      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  const headerClass = `${styles.header} ${menuOpen ? styles.menuOpen : ""}`.trim();

  return (
    <>
      <header className={headerClass} ref={headerRef}>
        <div className={styles.container}>
          <div className={styles.navWrapper}>

            {/* LEFT SECTION */}
            <div className={styles.leftSection}>
              <NavLink to="/" className={styles.logo}>
                <div className={styles.logoBox}>
                  <img src={HOME} alt="Logo" className={styles.logoImage} />
                </div>
              </NavLink>

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : styles.navLink
                }
              >{t("homenest")}</NavLink>

              {/* DESKTOP NAV */}
              <nav className={styles.centerNav}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >{t("homepage")}</NavLink>

                <NavLink
                  to="/blog-lm"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >{t("blog")}</NavLink>

                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >{t("contact_us")}</NavLink>

                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >{t("faq")}</NavLink>
              </nav>
            </div>

            {/* RIGHT SECTION – HAMBURGER */}
            <button
              className={styles.menuToggle}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={styles.bar} />
            </button>

          </div>
        </div>

        {/* MOBILE SLIDE MENU */}
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <NavLink to="/" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>{t("homepage")}</NavLink>

            <NavLink to="/blog-lm" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>{t("blog")}</NavLink>

            <NavLink to="/contact-us" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>{t("contact_us")}</NavLink>

            <NavLink to="/faq" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>{t("faq")}</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default ScamNav;
