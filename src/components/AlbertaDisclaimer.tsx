import styles from "./AlbertaDisclaimer.module.css";

import { useTranslation } from "react-i18next";

const AlbertaDisclaimer = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.disclaimerSection}>
      <p>{t(
        "data_is_supplied_by_pillar_9_mls_system_pillar_9_is_the_owner_of_the_copyright_in_its_mls_system_data_is_deemed_reliable_but_is_not_guaranteed_accurate_by_pillar_9_the_trademarks_mls_multiple_listing_service_and_the_associated_logos_are_owned_by_the_canadian_real_estate_association_crea_and_identify_the_quality_of_services_provided_by_real_estate_professionals_who_are_members_of_crea_used_under_license"
      )}</p>
      <p>{t(
        "data_is_deemed_reliable_but_is_not_guaranteed_accurate_by_the_realtors_association_of_edmonton_copyright_2025_by_the_realtors_association_of_edmonton_all_rights_reserved"
      )}</p>
      <p>{t(
        "the_trademarks_realtor_realtors_and_the_realtor_logo_are_controlled_by_the_canadian_real_estate_association_crea_and_identify_real_estate_professionals_who_are_members_of_crea_the_trademarks_mls_multiple_listing_service_and_the_associated_logos_are_owned_by_crea_and_identify_the_quality_of_services_provided_by_real_estate_professionals_who_are_members_of_crea_used_under_license"
      )}</p>
      <p>{t("data_is_provided_courtesy_of_canadian_real_estate_association")}</p>
    </div>
  );
};

export default AlbertaDisclaimer;
