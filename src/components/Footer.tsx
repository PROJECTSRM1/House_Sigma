import { Facebook, Twitter, Linkedin, Mail, MapPin, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import styles from "./Footer.module.css";

import appStoreImg from "/assets/apple-appstore.png";
import googlePlayImg from "/assets/google-play.png";
import HOME from "/assets/HOME.png";

type Language = "en" | "te" | "hi";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  const currentLanguage: Language =
    i18n.language?.startsWith("te")
      ? "te"
      : i18n.language?.startsWith("hi")
      ? "hi"
      : "en";

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
    setShowLanguageMenu(false);
  };

  const getLanguageName = (lang: Language) => {
    switch (lang) {
      case "te":
        return "తెలుగు";
      case "hi":
        return "हिन्दी";
      default:
        return "English";
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* ===================== BRAND SECTION ===================== */}
        <div className={styles.topSection}>
          <div className={styles.brandBox}>
            <img src={HOME} alt="Logo" className={styles.brandLogo} />

            <div>
              <h2 className={styles.brandName}>{t("homenest")}</h2>
              <p className={styles.brandTagline}>
                {t("your_trusted_partner_for_smart_data_driven_real_estate_decisions")}
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
            <h3 className={styles.columnTitle}>{t("explore")}</h3>
            <a className={styles.link}>{t("ontario_listings")}</a>
            <a className={styles.link}>{t("bc_listings")}</a>
            <a className={styles.link}>{t("alberta_listings")}</a>
            <a className={styles.link}>{t("sold_properties")}</a>
          </div>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>{t("company")}</h3>
            <a className={styles.link}>{t("about_us")}</a>
            <a className={styles.link}>{t("market_insights")}</a>
            <a className={styles.link}>{t("careers")}</a>
            <a className={styles.link}>{t("contact")}</a>
          </div>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>{t("support")}</h3>
            <a className={styles.link}>{t("help_center")}</a>
            <a className={styles.link}>{t("privacy_policy")}</a>
            <a className={styles.link}>{t("terms_of_use")}</a>
            <a className={styles.link}>{t("report_an_issue")}</a>
          </div>

          <div className={styles.linkColumn}>
            <h3 className={styles.columnTitle}>{t("mobile_app")}</h3>

            <img src={appStoreImg} className={styles.storeBadge} alt="App Store" />
            <img src={googlePlayImg} className={styles.storeBadge} alt="Google Play" />

            <div className={styles.addressBox}>
              <MapPin size={16} />
              <span>{t("toronto_ontario_canada")}</span>
            </div>
          </div>
        </div>

        {/* ===================== LANGUAGE SWITCHER & COPYRIGHT ===================== */}
        <div className={styles.bottomSection}>
          <div className={styles.bottomBar}>
            © {new Date().getFullYear()} {t("homenest_all_rights_reserved")}
          </div>

          <div className={styles.languageSwitcher}>
            <div className={styles.languageButtonContainer}>
              <button
                className={styles.languageToggleBtn}
                onClick={() => setShowLanguageMenu(prev => !prev)}
                aria-label="Change language"
              >
                <Globe size={18} />
                <span>{getLanguageName(currentLanguage)}</span>
              </button>

              {showLanguageMenu && (
                <div className={styles.languageDropdown}>
                  <button
                    className={`${styles.languageOption} ${currentLanguage === "en" ? styles.active : ""}`}
                    onClick={() => changeLanguage("en")}
                  >
                    English
                  </button>

                  <button
                    className={`${styles.languageOption} ${currentLanguage === "te" ? styles.active : ""}`}
                    onClick={() => changeLanguage("te")}
                  >
                    తెలుగు
                  </button>

                  <button
                    className={`${styles.languageOption} ${currentLanguage === "hi" ? styles.active : ""}`}
                    onClick={() => changeLanguage("hi")}
                  >
                    हिन्दी
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
