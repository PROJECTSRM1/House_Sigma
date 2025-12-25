import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import LoginModal from "../pages/Login";
import ResetPasswordModal from "../pages/ResetPasswordModal";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const { user, setUser } = useAuth();

  const [showLogin, setShowLogin] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProvince, setSelectedProvince] = useState("ON");

  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <header className={styles.header} ref={headerRef}>
        <div className={styles.navContainer}>
          <div className={styles.navWrapper}>

            {/* LEFT */}
            <div className={styles.leftSection}>
              <NavLink to="/" className={styles.logoBox}>
                <img src={logo} className={styles.logoImage} />
              </NavLink>

              {/* Province */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className={styles.provinceDropdown}>
                    {selectedProvince} <ChevronDown size={14} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <NavLink to="/province/on" onClick={() => setSelectedProvince("ON")}>
                      {t("ontario")} (ON)
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink to="/province/bc" onClick={() => setSelectedProvince("BC")}>
                      {t("bc")} (BC)
                    </NavLink>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <NavLink to="/province/ab" onClick={() => setSelectedProvince("AB")}>
                      {t("alberta")} (AB)
                    </NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Address Search (UNCHANGED) */}
              <div className={styles.searchBox}>
                <Search size={16} />
                <input placeholder={t("searchPlaceholder")} />
              </div>
            </div>

            {/* CENTER */}
            <nav className={styles.centerNav}>
              <NavLink to="/market-trends">{t("marketTrends")}</NavLink>
              <NavLink to="/home-valuation">{t("homeValuation")}</NavLink>
              <NavLink to="/agents">{t("agents")}</NavLink>

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
                    {t("tools")} <ChevronDown size={14} />
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <NavLink to="/blog">{t("blogMenu")}</NavLink>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <NavLink to="/recommend-communities">
                  {t("recommendCommunities.menu")}
                </NavLink>
                  </DropdownMenuItem>

                  {/* ✅ FIXED CONTACT ROUTE */}
                  <DropdownMenuItem asChild>
                    <NavLink to="/contact-us">{t("contact")}</NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* RIGHT */}
            <div className={styles.rightSection}>
              {!user ? (
                <Button onClick={() => setShowLogin(true)}>
                  {t("login")}
                </Button>
              ) : (
                <Button onClick={handleLogout}>{t("logout")}</Button>
              )}
            </div>

          </div>
        </div>
      </header>

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onForgotPassword={() => {
          setShowLogin(false);
          setShowReset(true);
        }}
        onLoginSuccess={(u) => {
          setUser(u);
          localStorage.setItem("user", JSON.stringify(u));
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
