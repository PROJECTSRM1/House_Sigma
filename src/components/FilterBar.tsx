import { useState } from 'react';
import styles from './FilterBar.module.css';
import LoginModal from "../pages/Login";
import ResetPasswordModal from "../pages/ResetPasswordModal";

const FilterBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showReset, setShowReset] = useState(false);

  const handleForgotPassword = () => {
    setShowLogin(false);
    setShowReset(true);
  };

  return (
    <>
      <div className={styles.filterBar}>
        <div className={styles.topRow}>
          <h2 className={styles.header}>Personalize Listings</h2>

          <div className={styles.filterButtonContainer}>
            <button
              className={styles.filterButton}
              onClick={() => setShowLogin(true)}
            >
              All Property Types
            </button>

            <button
              className={styles.filterButton}
              onClick={() => setShowLogin(true)}
            >
              0 - Max
            </button>

            <button
              className={styles.filterButton}
              onClick={() => setShowLogin(true)}
            >
              All Cities
            </button>
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
