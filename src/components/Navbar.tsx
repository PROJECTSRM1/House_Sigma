import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import LoginModal from "../pages/Login";
import ResetPasswordModal from "../pages/ResetPasswordModal";
import logo from "@/assets/logo.png";

 import { useAuth } from "@/context/AuthContext";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const [showLogin, setShowLogin] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("ON");
  const headerRef = useRef<HTMLElement | null>(null);

  const { user, setUser } = useAuth();

  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key === "user") {
        const newVal = e.newValue ? JSON.parse(e.newValue) : null;
        setUser(newVal);
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    const handler = () => setShowLogin(true);
    window.addEventListener("open-login-modal", handler);
    return () => window.removeEventListener("open-login-modal", handler);
  }, []);

  useEffect(() => {
  const saved = localStorage.getItem("user");
  if (saved) {
    setUser(JSON.parse(saved));
  }
}, []);

  const handleForgotPassword = () => {
    setShowLogin(false);
    setShowReset(true);
  };

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
  const headerClass = `${styles.header} ${menuOpen ? styles.menuOpen : ""}`;

  const handleLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  setUser(null);
  setMenuOpen(false);

  // ✅ notify app that auth changed
  window.dispatchEvent(new Event("auth-changed"));

  navigate("/");
};



  return (
    <>
      <header className={headerClass} ref={(el) => (headerRef.current = el)}>
        <div className={styles.container}>
          <div className={styles.navWrapper}>

            {/* LEFT SECTION */}
            <div className={styles.leftSection}>
              <NavLink to="/" className={styles.logo}>
                <div className={styles.logoBox}>
                  <img src={logo} alt="Logo" className={styles.logoImage} />
                </div>
              </NavLink>

              {/* Province dropdown */}
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
                  <DropdownMenuItem asChild>
                    <NavLink to="/province/on" onClick={() => setSelectedProvince("ON")}>
                      Ontario (ON)
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink to="/province/bc" onClick={() => setSelectedProvince("BC")}>
                      British Columbia (BC)
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink to="/province/ab" onClick={() => setSelectedProvince("AB")}>
                      Alberta (AB)
                    </NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* MOBILE HAMBURGER BUTTON (LEFT SIDE NOW) */}
              <button
                className={styles.menuToggle}
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className={styles.bar}></div>
              </button>

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

            {/* CENTER NAVIGATION (Desktop only) */}
            <nav className={styles.centerNav}>
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

              {/* Tools */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={styles.toolsButton}>
                    Tools <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                  align="end"
                  sideOffset={10}
                  className={styles.dropdownContent}
                >
                  <DropdownMenuItem asChild>
                    <NavLink to="/blog">Blog</NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink to="/recommend-communities">
                      Recommend Communities
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {user && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className={styles.watchedButton}>
                      Watched <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    sideOffset={10}
                    className={styles.dropdownContent}
                  >
                    <DropdownMenuItem asChild>
                      <NavLink to="/watched/properties">Properties</NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <NavLink to="/watched/notes">Notes</NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <NavLink to="/watched/toured">Toured</NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <NavLink to="/watched/areas">Areas</NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <NavLink to="/watched/communities">Communities</NavLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <NavLink to="/watched/recently-viewed">
                        Recently Viewed
                      </NavLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </nav>

            {/* RIGHT SECTION */}
            <div className={styles.rightSection}>
              {!user ? (
                <Button
                  onClick={() => setShowLogin(true)}
                  variant="outline"
                  size="sm"
                  className="border-white/80 bg-transparent text-white hover:bg-white hover:text-primary"
                >
                  Log in
                </Button>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className={styles.usernameButton}>
                      {user.full_name || user.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align="end"
                    sideOffset={15}
                    className={styles.dropdownContent}
                  >
                    <DropdownMenuItem disabled>
                      {user.full_name || user.email}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={styles.mobileMenu}>
          {menuOpen && (
            <div className={styles.mobileNav}>
              <NavLink
                to="/map-search"
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                Map Search
              </NavLink>

              <NavLink
                to="/market-trends"
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                Market Trends
              </NavLink>

              <NavLink
                to="/home-valuation"
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                Home Valuation
              </NavLink>

              <NavLink
                to="/agents"
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                Agents
              </NavLink>

              <div
                style={{
                  height: 1,
                  background: "rgba(255,255,255,0.1)",
                  margin: "8px 0",
                }}
              />

              <NavLink
                to="/blog"
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </NavLink>

              <NavLink
                to="/recommend-communities"
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                Recommend Communities
              </NavLink>

              <NavLink
                to="/contact"
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </NavLink>

              {user && (
                <>
                  <div style={{ height: 8 }} />
                  <div
                    style={{
                      padding: "0.25rem 0.5rem",
                      color: "white",
                      fontWeight: 600,
                    }}
                  >
                    {user.full_name || user.email}
                  </div>
                  <button className={styles.mobileNavLink} onClick={handleLogout}>
                    Logout
                  </button>
                </>
              )}

              {!user && (
                <button
                  className={styles.mobileNavLink}
                  onClick={() => {
                    setShowLogin(true);
                    setMenuOpen(false);
                  }}
                >
                  Log in
                </button>
              )}
            </div>
          )}
        </div>
      </header>

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onForgotPassword={handleForgotPassword}
        onLoginSuccess={(userData) => {
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          setShowLogin(false);
        }}
      />

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
