import { Home, Facebook, Twitter, Linkedin, Smartphone } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <Home className={styles.logoIcon} />
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>HouseSigma</span>
            </div>
            <p className={styles.brandDescription}>
              Making better real estate decisions with 22 years of sales history and market insights.
            </p>
            <div className={styles.socialIcons}>
              <button className={styles.socialIcon}>
                <Facebook className="h-5 w-5" />
              </button>
              <button className={styles.socialIcon}>
                <Twitter className="h-5 w-5" />
              </button>
              <button className={styles.socialIcon}>
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Sitemap Column */}
          <div className={styles.linkColumn}>
            <h3>Sitemaps</h3>
            <div className={styles.linkList}>
              <a href="#" className={styles.link}>Ontario Sitemap</a>
              <a href="#" className={styles.link}>Alberta Sitemap</a>
              <a href="#" className={styles.link}>BC Sitemap</a>
            </div>
          </div>

          {/* Company Column */}
          <div className={styles.linkColumn}>
            <h3>Company</h3>
            <div className={styles.linkList}>
              <a href="#" className={styles.link}>About Us</a>
              <a href="#" className={styles.link}>Recently Sold Listings</a>
              <a href="#" className={styles.link}>Market Trends</a>
              <a href="#" className={styles.link}>Careers</a>
            </div>
          </div>

          {/* Support Column */}
          <div className={styles.linkColumn}>
            <h3>Support</h3>
            <div className={styles.linkList}>
              <a href="#" className={styles.link}>FAQs</a>
              <a href="#" className={styles.link}>Feedback</a>
              <a href="#" className={styles.link}>Privacy & Security</a>
              <a href="#" className={styles.link}>Terms & Conditions</a>
            </div>
          </div>

          {/* Language & Apps Column */}
          <div className={styles.languageColumn}>
            <div className={styles.languageToggle}>
              <button className={styles.langButton}>English</button>
              <button className={styles.langButton}>中文</button>
            </div>
            <div className={styles.appButtons}>
              <button className={styles.appButton}>
                <Smartphone className="h-5 w-5" />
                <span>App Store</span>
              </button>
              <button className={styles.appButton}>
                <Smartphone className="h-5 w-5" />
                <span>Google Play</span>
              </button>
            </div>
            <div className={styles.appVersion}>Version 2.5.0</div>
          </div>
        </div>

        <div className={styles.copyright}>
          © COPYRIGHT 2025 BY HOUSESIGMA INC. BROKERAGE ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;
