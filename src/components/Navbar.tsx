import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Home, Search, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import LoginModal from "../pages/Login";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (menuOpen && headerRef.current && !headerRef.current.contains(target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [menuOpen]);

  // Close the mobile menu when viewport becomes large
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((s) => !s);

  const headerClass = `${styles.header} ${menuOpen ? styles.menuOpen : ""}`.trim();

  return (
    <>
      <header
        className={headerClass}
        ref={(el) => {
          headerRef.current = el;
        }}
        aria-hidden={false}
      >
        <div className={styles.container}>
          <div className={styles.navWrapper}>
            {/* LEFT */}
            <div className={styles.leftSection}>
              <NavLink to="/" className={styles.logo}>
                <div className={styles.logoBox}>
                  <Home className={styles.logoIcon} />
                </div>
              </NavLink>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={styles.provinceDropdown}>
                    ON <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="start"
                  sideOffset={8}
                  className={styles.dropdownContent}
                >
                  {/* Convert dropdown items into NavLink navigation */}
                  <DropdownMenuItem asChild>
                    <NavLink to="/province/on">Ontario (ON)</NavLink>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <NavLink to="/province/bc">British Columbia (BC)</NavLink>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <NavLink to="/province/ab">Alberta (AB)</NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Desktop search box - hidden on small screens */}
              <div className={styles.searchBox} role="search">
                <Search className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Address, Street Name or Listing#"
                  className={styles.searchInput}
                />
              </div>
            </div>

            {/* CENTER NAV (desktop) */}
            <nav className={styles.centerNav} aria-label="Primary">
              <NavLink
                to="/map-search"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : styles.navLink
                }
              >
                Map Search
              </NavLink>

              <NavLink
                to="/market-trends"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : styles.navLink
                }
              >
                Market Trends
              </NavLink>

              <NavLink
                to="/home-valuation"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : styles.navLink
                }
              >
                Home Valuation
              </NavLink>

              <NavLink
                to="/agents"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : styles.navLink
                }
              >
                Agents
              </NavLink>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={styles.toolsButton}>
                    Tools <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  sideOffset={10}
                  className={`${styles.dropdownContent} ${styles.toolsDropdown}`}
                >
                  <DropdownMenuItem asChild>
                    <NavLink to="/blog">Blog</NavLink>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <NavLink to="/recommend-communities">Recommend Communities</NavLink>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* RIGHT */}
            <div className={styles.rightSection}>
              {/* Mobile hamburger toggle */}
              <button
                className={styles.menuToggle}
                onClick={toggleMenu}
                aria-controls="mobileMenu"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                type="button"
              >
                <span className={styles.bar} aria-hidden />
              </button>

              <Button
                onClick={() => setShowLogin(true)}
                variant="outline"
                size="sm"
                className="border-white/80 bg-transparent text-white hover:bg-white hover:text-primary transition-colors"
              >
                Log in
              </Button>

              <NavLink to="/join">
                <Button size="sm" className="bg-white text-primary hover:bg-white/90">
                  Join
                </Button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Mobile slide-down panel */}
        <div id="mobileMenu" className={styles.mobileMenu} aria-hidden={!menuOpen}>
          <div className={styles.mobileExtras}>
            <div className={styles.searchBox} style={{ display: "flex", flex: 1 }} role="search">
              <Search className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Address, Street Name or Listing#"
                className={styles.searchInput}
              />
            </div>
          </div>

          {/* Mobile nav (separate from desktop) */}
          <nav className={styles.mobileNav} aria-label="Mobile Primary">
            <NavLink
              to="/map-search"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? `${styles.mobileNavLink} ${styles.activeNavLink}` : styles.mobileNavLink
              }
            >
              Map Search
            </NavLink>

            <NavLink
              to="/market-trends"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? `${styles.mobileNavLink} ${styles.activeNavLink}` : styles.mobileNavLink
              }
            >
              Market Trends
            </NavLink>

            <NavLink
              to="/home-valuation"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? `${styles.mobileNavLink} ${styles.activeNavLink}` : styles.mobileNavLink
              }
            >
              Home Valuation
            </NavLink>

            <NavLink
              to="/agents"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? `${styles.mobileNavLink} ${styles.activeNavLink}` : styles.mobileNavLink
              }
            >
              Agents
            </NavLink>

            <div className={styles.mobileToolsWrap}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={`${styles.mobileNavLink} ${styles.toolsButton}`} style={{ textAlign: "left" }}>
                    Tools <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" sideOffset={6} className={styles.dropdownContent}>
                  <DropdownMenuItem asChild>
                    <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
                      Blog
                    </NavLink>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <NavLink to="/recommend-communities" onClick={() => setMenuOpen(false)}>
                      Recommend Communities
                    </NavLink>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                      Contact Us
                    </NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </div>
      </header>

      {/* LOGIN MODAL */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
};

export default Navbar;
