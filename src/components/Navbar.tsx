import React, { useState } from "react";
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

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.navWrapper}>

            {/* LEFT SECTION */}
            <div className={styles.leftSection}>
              <NavLink to="/" className={styles.logo}>
                <div className={styles.logoBox}>
                  <Home className={styles.logoIcon} />
                </div>
              </NavLink>

              {/* Province Dropdown */}
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
                  <DropdownMenuItem>Ontario (ON)</DropdownMenuItem>
                  <DropdownMenuItem>British Columbia (BC)</DropdownMenuItem>
                  <DropdownMenuItem>Alberta (AB)</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Search Box */}
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

              {/* Tools Dropdown */}
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
                    <NavLink to="/recommend-communities">
                      Recommend Communities
                    </NavLink>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* RIGHT SECTION */}
            <div className={styles.rightSection}>
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
      </header>

      {/* LOGIN MODAL */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
};

export default Navbar;
