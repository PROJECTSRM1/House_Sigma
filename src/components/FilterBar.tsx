import { useState } from 'react';
import { useTranslation } from "react-i18next";
import styles from './FilterBar.module.css';
import LoginModal from "../pages/Login";
import ResetPasswordModal from "../pages/ResetPasswordModal";

const FilterBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const { t } = useTranslation();


  const handleForgotPassword = () => {
    setShowLogin(false);
    setShowReset(true);
  };

  return (
    
    <>
      <div className={styles.filterBar}>
        <div className={styles.topRow}>
          <h2 className={styles.header}>{t("personalize_listings")}</h2>

          <div className={styles.filterButtonContainer}>
            <button
              className={styles.filterButton}
              onClick={() => setShowLogin(true)}
            >{t("all_property_types")}</button>

            <button
              className={styles.filterButton}
              onClick={() => setShowLogin(true)}
            >{t("0_max")}</button>

            <button
              className={styles.filterButton}
              onClick={() => setShowLogin(true)}
            >{t("all_cities")}</button>
          </div>
        </div>
      </div>
      {/* LOGIN MODAL */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onForgotPassword={handleForgotPassword}
      />
      {/* RESET PASSWORD MODAL */}
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

export default FilterBar;
