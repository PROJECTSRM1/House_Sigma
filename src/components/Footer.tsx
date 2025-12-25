import { Facebook, Twitter, Linkedin, Mail, MapPin } from "lucide-react";
import styles from "./Footer.module.css";
import { useTranslation } from "react-i18next";

import appStoreImg from "/assets/apple-appstore.png";
import googlePlayImg from "/assets/google-play.png";
import HOME from "/assets/HOME.png";

const Footer = () => {
  const { t, i18n } = useTranslation();

  // ✅ STEP 7.1: Language switch logic
  const changeLang = (lang: "en" | "te" | "hi") => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

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
                {t("brandTagline")}
              </p>
            </div>
          </div>

          <div className={styles.socialRow}>
            <a href="#" className={styles.socialButton}><Facebook /></a>
            <a href="#" className={styles.socialButton}><Twitter /></a>
            <a href="#" className={styles.socialButton}><Linkedin /></a>
            <a href="#" className={styles.socialButton}><Mail /></a>
          </div>

          {/* ✅ STEP 7.2: Language Switch (UI safe, minimal) */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => changeLang("en")}>English</button>
            <button onClick={() => changeLang("te")}>తెలుగు</button>
            <button onClick={() => changeLang("hi")}>हिंदी</button>
          </div>

        </div>

        {/* ===================== LINK GRID ===================== */}
        <div className={styles.linkGrid}>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>{t("explore")}</h3>
            <a className={styles.link}>{t("ontario")}</a>
            <a className={styles.link}>{t("bc")}</a>
            <a className={styles.link}>{t("alberta")}</a>
            <a className={styles.link}>{t("sold")}</a>
          </div>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>{t("company")}</h3>
            <a className={styles.link}>{t("about")}</a>
            <a className={styles.link}>{t("market")}</a>
            <a className={styles.link}>{t("careers")}</a>
            <a className={styles.link}>{t("contact")}</a>
          </div>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>{t("support")}</h3>
            <a className={styles.link}>{t("help")}</a>
            <a className={styles.link}>{t("privacy")}</a>
            <a className={styles.link}>{t("terms")}</a>
            <a className={styles.link}>{t("report")}</a>
          </div>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>{t("mobileApp")}</h3>

            <img src={appStoreImg} className={styles.storeBadge} alt="App Store" />
            <img src={googlePlayImg} className={styles.storeBadge} alt="Google Play" />

            <div className={styles.addressBox}>
              <MapPin size={16} />
              <span>{t("location")}</span>
            </div>
          </div>
        </div>

        {/* ===================== COPYRIGHT ===================== */}
        <div className={styles.bottomBar}>
          © {new Date().getFullYear()} HomeNest • {t("copyright")}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
