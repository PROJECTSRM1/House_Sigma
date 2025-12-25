import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import LoginModal from "../pages/Login";
import ResetPasswordModal from "../pages/ResetPasswordModal";
import MarketStatistics from "@/pages/MarketStatistics";

import logo from "/assets/HOME.png";
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

  /* Load User */
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  /* Sync User Across Tabs */
  useEffect(() => {
    const syncUser = (e: StorageEvent) => {
      if (e.key === "user") {
        const val = e.newValue ? JSON.parse(e.newValue) : null;
        setUser(val);
      }
    };
    window.addEventListener("storage", syncUser);
    return () => window.removeEventListener("storage", syncUser);
  }, []);

  /* Open Login Event */
  useEffect(() => {
    const handler = () => setShowLogin(true);
    window.addEventListener("open-login-modal", handler);
    return () => window.removeEventListener("open-login-modal", handler);
  }, []);

  /* Close Menu When Clicking Outside */
  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as Node;
      if (menuOpen && headerRef.current && !headerRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [menuOpen]);

  /* Auto Close on Desktop Resize */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Logout */
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);

    window.dispatchEvent(new Event("auth-changed"));
    navigate("/");
    setMenuOpen(false);
  };

  const headerClass = `${styles.header} ${menuOpen ? styles.menuOpen : ""}`;

  return (
    <>
      <header className={headerClass} ref={headerRef}>
        <div className={styles.navContainer}>
          <div className={styles.navWrapper}>
            {/* LEFT SECTION */}
            <div className={styles.leftSection}>
              <NavLink to="/" className={styles.logoBox}>
                <img src={logo} alt="Logo" className={styles.logoImage} />
              </NavLink>

              {/* Province Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={styles.provinceDropdown}>
                    {selectedProvince}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="start" sideOffset={8} className={styles.dropdownContent}>
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

              {/* Hamburger */}
              <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
                <div className={styles.bar}></div>
              </button>

              {/* Search */}
              <div className={styles.searchBox}>
                <Search className={styles.searchIcon} />
                <input placeholder="Address, Street Name or Listing#" className={styles.searchInput} />
              </div>
            </div>

            {/* CENTER NAVIGATION */}
            <nav className={styles.centerNav}>
              <NavLink to="/market-trends" className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}>
                Market Trends
              </NavLink>

              <NavLink to="/market-statistics" className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}>
                Market statistics
              </NavLink>

              <NavLink to="/home-valuation" className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}>
                Home Valuation
              </NavLink>

              <NavLink to="/agents" className={({ isActive }) => (isActive ? styles.activeNavLink : styles.navLink)}>
                Agents
              </NavLink>

              {/* Tools */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={styles.navDropdown}>
                    Tools <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className={styles.dropdownContent}>
                  <DropdownMenuItem asChild><NavLink to="/blog">Blog</NavLink></DropdownMenuItem>
                  <DropdownMenuItem asChild><NavLink to="/recommend-communities">Recommend Communities</NavLink></DropdownMenuItem>
                  <DropdownMenuItem asChild><NavLink to="/contact">Contact Us</NavLink></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* RIGHT SECTION */}
            <div className={styles.rightSection}>
              {!user ? (
                <Button onClick={() => setShowLogin(true)} variant="outline" size="sm" className={styles.loginBtn}>
                  Log in
                </Button>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className={styles.profileButton}>
                      {user.full_name || user.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className={styles.dropdownContent}>
                    <DropdownMenuItem disabled>
                      {user.full_name || user.email}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>

          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileNav}>
              <NavLink to="/map-search" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Map Search</NavLink>
              <NavLink to="/market-trends" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Market Trends</NavLink>
              <NavLink to="/home-valuation" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Home Valuation</NavLink>
              <NavLink to="/agents" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Agents</NavLink>

              <div className={styles.mobileSeparator}></div>

              <NavLink to="/blog" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Blog</NavLink>
              <NavLink to="/recommend-communities" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Recommend Communities</NavLink>
              <NavLink to="/contact" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Contact</NavLink>

              {!user ? (
                <button className={styles.mobileNavLink} onClick={() => { setShowLogin(true); setMenuOpen(false); }}>
                  Log in
                </button>
              ) : (
                <>
                  <div className={styles.mobileUser}>{user.full_name || user.email}</div>
                  <button className={styles.mobileNavLink} onClick={handleLogout}>Logout</button>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* AUTH MODALS */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onForgotPassword={() => {
          setShowLogin(false);
          setShowReset(true);
        }}
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
