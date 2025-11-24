import React from "react";
import styles from "./TermsModal.module.css";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose, onAccept }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.title}>Victoria Real Estate Board (VREB)</h2>
        <h3 className={styles.subTitle}>Terms of Use</h3>

        <div className={styles.content}>
          <p>You are agreeing to comply and be bound by the following terms of service and use:</p>

          <p>
            i. That the registered user has received, read, and understands the brochure published 
            by the Real Estate Council of BC (RECBC) entitled 
            <b> "Disclosure of Representation in Trading Services"</b>;
          </p>

          <p>
            ii. That all data obtained from the VOW is intended only for the registered user’s 
            personal, non-commercial use;
          </p>

          <p>
            iii. That the registered user has a bona fide interest in the purchase, sale, or lease 
            of real estate of the type being offered through the VOW;
          </p>

          <p>
            iv. That the registered user will not copy, redistribute, or retransmit any portion of 
            the Licensed Data or information provided; and
          </p>

          <p>
            v. That the registered user acknowledges the VREB and participating brokerages 
            supplying the data retain ownership of, and responsibility for, that data.
          </p>
        </div>

        <div className={styles.actions}>
          <button className={styles.rejectBtn} onClick={onClose}>Reject</button>
          <button
            className={styles.acceptBtn}
            onClick={() => {
              localStorage.setItem("vre_terms_accepted", "true");
              onAccept();
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
