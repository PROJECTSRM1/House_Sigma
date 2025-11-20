import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import LoginModal from "../pages/Login";
import ResetPasswordModal from "../pages/ResetPasswordModal";
import logo from "@/assets/logo.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("ON");
  const headerRef = useRef<HTMLElement | null>(null);

  // GLOBAL LOGIN EVENT
  useEffect(() => {
    const handler = () => setShowLogin(true);
    window.addEventListener("open-login-modal", handler);
    return () => window.removeEventListener("open-login-modal", handler);
  }, []);

  const handleForgotPassword = () => {
    setShowLogin(false);
    setShowReset(true);
  };

  // Click outside closes menu
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

  // Close menu when screen becomes large
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
      <header className={headerClass} ref={(el) => (headerRef.current = el)}>
        <div className={styles.container}>
          <div className={styles.navWrapper}>

            {/* LEFT */}
            <div className={styles.leftSection}>
              <NavLink to="/" className={styles.logo}>
                <div className={styles.logoBox}>
                  <img src={logo} alt="Logo" className={styles.logoImage} />
                </div>
              </NavLink>

              {/* Province Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={styles.provinceDropdown}>
                    {selectedProvince} <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="start"
                  sideOffset={8}
                  className={styles.dropdownContent}
                >
                  <DropdownMenuItem
                    onClick={() => setSelectedProvince("ON")}
                    asChild
                  >
                    <NavLink to="/province/on">Ontario (ON)</NavLink>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onClick={() => setSelectedProvince("BC")}
                    asChild
                  >
                    <NavLink to="/province/bc">British Columbia (BC)</NavLink>
                  </DropdownMenuItem>

                  <DropdownMenuItem
                    onClick={() => setSelectedProvince("AB")}
                    asChild
                  >
                    <NavLink to="/province/ab">Alberta (AB)</NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Desktop search */}
              <div className={styles.searchBox}>
                <Search className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Address, Street Name or Listing#"
                  className={styles.searchInput}
                />
              </div>
            </div>

            {/* CENTER */}
            <nav className={styles.centerNav}>
              <NavLink
                to="/map-search"
                className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}
              >
                Map Search
              </NavLink>

              <NavLink
                to="/market-trends"
                className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}
              >
                Market Trends
              </NavLink>

              <NavLink
                to="/home-valuation"
                className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}
              >
                Home Valuation
              </NavLink>

              <NavLink
                to="/agents"
                className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}
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
              <button
                className={styles.menuToggle}
                onClick={toggleMenu}
                aria-expanded={menuOpen}
              >
                <span className={styles.bar} />
              </button>

              <Button
                onClick={() => setShowLogin(true)}
                variant="outline"
                size="sm"
                className="border-white/80 bg-transparent text-white hover:bg-white hover:text-primary"
              >
                Log in
              </Button>

              <NavLink to="/join">
                <Button size="sm" className="bg-white text-primary hover:bg-white/90 px-5 py-2">
                  Join
                </Button>
              </NavLink>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div id="mobileMenu" className={styles.mobileMenu} aria-hidden={!menuOpen}>
          <div className={styles.mobileExtras}>
            <div className={styles.searchBox}>
              <Search className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Address, Street Name or Listing#"
                className={styles.searchInput}
              />
            </div>
          </div>

          <nav className={styles.mobileNav}>
            <NavLink to="/map-search" onClick={() => setMenuOpen(false)} className={styles.mobileNavLink}>
              Map Search
            </NavLink>

            <NavLink to="/market-trends" onClick={() => setMenuOpen(false)} className={styles.mobileNavLink}>
              Market Trends
            </NavLink>

            <NavLink to="/home-valuation" onClick={() => setMenuOpen(false)} className={styles.mobileNavLink}>
              Home Valuation
            </NavLink>

            <NavLink to="/agents" onClick={() => setMenuOpen(false)} className={styles.mobileNavLink}>
              Agents
            </NavLink>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={`${styles.mobileNavLink} ${styles.toolsButton}`}>
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
          </nav>
        </div>
      </header>

      {/* LOGIN MODAL */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onForgotPassword={handleForgotPassword}
      />

      {/* RESET PASSWORD */}
      <ResetPasswordModal
        isOpen={showReset}
        closeReset={() => setShowReset(false)}
        onBackToLogin={() => {
          setShowReset(false);
          setShowLogin(true);
        }}
      />
    </>
  );
};

export default Navbar;
