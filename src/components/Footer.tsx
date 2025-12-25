import { Facebook, Twitter, Linkedin, Mail, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

import appStoreImg from "/assets/apple-appstore.png";
import googlePlayImg from "/assets/google-play.png";
import HOME from "/assets/HOME.png"
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* ===================== BRAND SECTION ===================== */}
        <div className={styles.topSection}>

          <div className={styles.brandBox}>
            <img src={HOME} alt="Logo" className={styles.brandLogo} />

            <div>
              <h2 className={styles.brandName}>HomeNest</h2>
              <p className={styles.brandTagline}>
                Your trusted partner for smart, data-driven real estate decisions.
              </p>
            </div>
          </div>

          <div className={styles.socialRow}>
            <a href="#" className={styles.socialButton}><Facebook /></a>
            <a href="#" className={styles.socialButton}><Twitter /></a>
            <a href="#" className={styles.socialButton}><Linkedin /></a>
            <a href="#" className={styles.socialButton}><Mail /></a>
          </div>
        </div>

        {/* ===================== LINK GRID ===================== */}
        <div className={styles.linkGrid}>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Explore</h3>
            <a className={styles.link}>Ontario Listings</a>
            <a className={styles.link}>BC Listings</a>
            <a className={styles.link}>Alberta Listings</a>
            <a className={styles.link}>Sold Properties</a>
          </div>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Company</h3>
            <a className={styles.link}>About Us</a>
            <a className={styles.link}>Market Insights</a>
            <a className={styles.link}>Careers</a>
            <a className={styles.link}>Contact</a>
          </div>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Support</h3>
            <a className={styles.link}>Help Center</a>
            <a className={styles.link}>Privacy Policy</a>
            <a className={styles.link}>Terms of Use</a>
            <a className={styles.link}>Report an Issue</a>
          </div>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>Mobile App</h3>

            <img src={appStoreImg} className={styles.storeBadge} alt="App Store" />
            <img src={googlePlayImg} className={styles.storeBadge} alt="Google Play" />

            <div className={styles.addressBox}>
              <MapPin size={16} />
              <span>Toronto, Ontario – Canada</span>
            </div>
          </div>
        </div>

        {/* ===================== COPYRIGHT ===================== */}
        <div className={styles.bottomBar}>
          © {new Date().getFullYear()} HomeNest • All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
