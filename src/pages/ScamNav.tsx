import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Search } from "lucide-react";
import logo from "/assets/logo.png";

import styles from "./ScamNav.module.css";

const ScamNav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (menuOpen && headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [menuOpen]);

  // Close menu when resizing to desktop
  useEffect(() => {
    function onResize() {
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
                  <img src={logo} alt="Logo" className={styles.logoImage} />
                </div>
              </NavLink>

              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : styles.navLink
                }
              >
                HouseSigma
              </NavLink>

              {/* DESKTOP NAV */}
              <nav className={styles.centerNav}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Homepage
                </NavLink>

                <NavLink
                  to="/blog-lm"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Blog
                </NavLink>

                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  Contact Us
                </NavLink>

                <NavLink
                  to="/faq"
                  className={({ isActive }) =>
                    isActive ? styles.activeNavLink : styles.navLink
                  }
                >
                  FAQ
                </NavLink>
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
            <NavLink to="/" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
              Homepage
            </NavLink>

            <NavLink to="/blog-lm" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
              Blog
            </NavLink>

            <NavLink to="/contact-us" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
              Contact Us
            </NavLink>

            <NavLink to="/faq" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
              FAQ
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default ScamNav;
