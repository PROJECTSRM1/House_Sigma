import { Home, Search, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navWrapper}>
          {/* Left Section */}
          <div className={styles.leftSection}>
            {/* Logo */}
            <a href="/" className={styles.logo}>
              <div className={styles.logoBox}>
                <Home className={styles.logoIcon} />
              </div>
            </a>

            {/* Province Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={styles.provinceDropdown}>
                  ON <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem>Ontario (ON)</DropdownMenuItem>
                <DropdownMenuItem>British Columbia (BC)</DropdownMenuItem>
                <DropdownMenuItem>Alberta (AB)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Small Search - Hidden on mobile */}
            <div className={styles.searchBox}>
              <Search className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Address, Street Name or Listing#"
                className={styles.searchInput}
              />
            </div>
          </div>

          {/* Center Navigation - Hidden on mobile/tablet */}
          <nav className={styles.centerNav}>
            <a href="#" className={styles.navLink}>
              Map Search
            </a>
            <a href="#" className={styles.navLink}>
              Market Trends
            </a>
            <a href="#" className={styles.navLink}>
              Home Valuation
            </a>
            <a href="#" className={styles.navLink}>
              Agents
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className={styles.toolsButton}>
                  Tools <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem>Blog</DropdownMenuItem>
                <DropdownMenuItem>Recommend Communities</DropdownMenuItem>
                <DropdownMenuItem>Contact Us</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right Section */}
          <div className={styles.rightSection}>
            <Button 
              variant="outline" 
              size="sm"
              className="border-white/80 bg-transparent text-white hover:bg-white hover:text-primary transition-colors"
            >
              Log in
            </Button>
            <Button 
              size="sm"
              className="bg-white text-primary hover:bg-white/90"
            >
              Join
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
