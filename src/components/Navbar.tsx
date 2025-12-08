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

  useEffect(() => {
    const openLoginHandler = () => setShowLogin(true);

    window.addEventListener("open-login-modal", openLoginHandler);

    return () => {
      window.removeEventListener("open-login-modal", openLoginHandler);
    };
  }, []);

  const { user, setUser } = useAuth();

  const defaultAvatar = "http://127.0.0.1:8000/static/users/default.png";

  // Sync user
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, [setUser]);

  const toggleMenu = () => setMenuOpen((s) => !s);
  const headerClass = `${styles.header} ${menuOpen ? styles.menuOpen : ""}`;

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setMenuOpen(false);
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
                <DropdownMenuContent align="start" sideOffset={8} className={styles.dropdownContent}>
                  <DropdownMenuItem asChild><NavLink to="/province/on" onClick={() => setSelectedProvince("ON")}>Ontario (ON)</NavLink></DropdownMenuItem>
                  <DropdownMenuItem asChild><NavLink to="/province/bc" onClick={() => setSelectedProvince("BC")}>British Columbia (BC)</NavLink></DropdownMenuItem>
                  <DropdownMenuItem asChild><NavLink to="/province/ab" onClick={() => setSelectedProvince("AB")}>Alberta (AB)</NavLink></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* ✅ HAMBURGER MENU BUTTON */}
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

            {/* CENTER NAVIGATION */}
            <nav className={styles.centerNav}>
              <NavLink to="/map-search" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>Map Search</NavLink>
              <NavLink to="/market-trends" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>Market Trends</NavLink>
              <NavLink to="/home-valuation" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>Home Valuation</NavLink>
              <NavLink to="/agents" className={({ isActive }) => isActive ? styles.activeNavLink : styles.navLink}>Agents</NavLink>

              {/* Tools menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={styles.toolsButton}>
                    Tools <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" sideOffset={10} className={styles.dropdownContent}>
                  <DropdownMenuItem asChild><NavLink to="/blog">Blog</NavLink></DropdownMenuItem>
                  <DropdownMenuItem asChild><NavLink to="/recommend-communities">Recommend Communities</NavLink></DropdownMenuItem>
                  <DropdownMenuItem asChild><NavLink to="/contact">Contact Us</NavLink></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Watched menu */}
              {user && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className={styles.watchedButton}>
                      Watched <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" sideOffset={10} className={styles.dropdownContent}>
                    <DropdownMenuItem asChild><NavLink to="/watched/properties">Properties</NavLink></DropdownMenuItem>
                    <DropdownMenuItem asChild><NavLink to="/watched/notes">Notes</NavLink></DropdownMenuItem>
                    <DropdownMenuItem asChild><NavLink to="/watched/toured">Toured</NavLink></DropdownMenuItem>
                    <DropdownMenuItem asChild><NavLink to="/watched/areas">Areas</NavLink></DropdownMenuItem>
                    <DropdownMenuItem asChild><NavLink to="/watched/communities">Communities</NavLink></DropdownMenuItem>
                    <DropdownMenuItem asChild><NavLink to="/watched/recently-viewed">Recently Viewed</NavLink></DropdownMenuItem>
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
                    <button style={{ background: "none", border: "none", cursor: "pointer" }}>
                      <img
                        src={(user as any).profile_image || defaultAvatar}
                        alt="Profile"
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          border: "2px solid white",
                        }}
                      />
                    </button>
                  </DropdownMenuTrigger>

                  {/* ✅ PROFILE CARD */}
                  <DropdownMenuContent align="end" sideOffset={10}>
                    <div className={styles.profileCard}>
                      <img
                        src={(user as any).profile_image || defaultAvatar}
                        className={styles.profileImageBig}
                        alt="Profile"
                      />

                      <div className={styles.profileName}>
                        {user.full_name || user.name}
                      </div>

                      <div className={styles.profileEmail}>
                        {user.email}
                      </div>

                      <button
                        onClick={handleLogout}
                        className={styles.logoutBtnCard}
                      >
                        Logout
                      </button>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>

        {/* ✅ MOBILE MENU */}
        <div className={styles.mobileMenu}>
          {menuOpen && (
            <div className={styles.mobileNav}>
              {["map-search","market-trends","home-valuation","agents"].map((path) => (
                <NavLink key={path} to={`/${path}`} className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>
                  {path.replace("-", " ")}
                </NavLink>
              ))}

              {user && (
                <button className={styles.mobileNavLink} onClick={handleLogout}>Logout</button>
              )}

              {!user && (
                <button className={styles.mobileNavLink} onClick={() => {
                  setShowLogin(true);
                  setMenuOpen(false);
                }}>Log in</button>
              )}
            </div>
          )}
        </div>
      </header>

      {/* MODALS */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
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
