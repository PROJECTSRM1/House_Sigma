import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./TermsModal.module.css";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose, onAccept }) => {

  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.title}>{t("victoria_real_estate_board_vreb")}</h2>
        <h3 className={styles.subTitle}>{t("terms_of_use")}</h3>

        <div className={styles.content}>
          <p>{t(
            "you_are_agreeing_to_comply_and_be_bound_by_the_following_terms_of_service_and_use"
          )}</p>

          <p>{t(
            "i_that_the_registered_user_has_received_read_and_understands_the_brochure_published_by_the_real_estate_council_of_bc_recbc_entitled"
          )}<b>{t("disclosure_of_representation_in_trading_services")}</b>;
          </p>

          <p>{t(
            "ii_that_all_data_obtained_from_the_vow_is_intended_only_for_the_registered_user_s_personal_non_commercial_use"
          )}</p>

          <p>{t(
            "iii_that_the_registered_user_has_a_bona_fide_interest_in_the_purchase_sale_or_lease_of_real_estate_of_the_type_being_offered_through_the_vow"
          )}</p>

          <p>{t(
            "iv_that_the_registered_user_will_not_copy_redistribute_or_retransmit_any_portion_of_the_licensed_data_or_information_provided_and"
          )}</p>

          <p>{t(
            "v_that_the_registered_user_acknowledges_the_vreb_and_participating_brokerages_supplying_the_data_retain_ownership_of_and_responsibility_for_that_data"
          )}</p>
        </div>

        <div className={styles.actions}>
          <button className={styles.rejectBtn} onClick={onClose}>{t("reject")}</button>
          <button
            className={styles.acceptBtn}
            onClick={() => {
              localStorage.setItem("vre_terms_accepted", "true");
              onAccept();
            }}
          >{t("accept")}</button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
