import { useParams,useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FileText } from "lucide-react";
import SearchBar from "./search";
import Sidebar from "./Sidebar";
import ScamNav from "../ScamNav";

import "./Sidebar.css";
import './Feature.css';

import { faqData } from "../FAQ/FAQ";

const Features = () => {
  const { t } = useTranslation();

  const { articleSlug } = useParams();
  const navigate = useNavigate();
  const category = faqData.find((c) => c.id === "features");
  const article = category?.articles.find((a) => a.slug === articleSlug);

  const renderContent = () => {
    switch (articleSlug) {
      case "watched-area-setting-up-a-new-area":
        return (
          <>
            <p>{t(
              "to_set_up_a_new_watched_area_open_the_map_and_zoom_into_the_location_you_want_to_monitor"
            )}</p>
            <p>{t(
              "click_on_watch_area_and_adjust_the_boundary_as_needed_you_will_begin_receiving_market_updates_for_this_area"
            )}</p>
          </>
        );

      case "watched-area-managing-saved-areas":
        return (
          <>
            <p>{t("you_can_find_all_saved_watch_areas_in_your_profile_under_watched_areas")}</p>
            <p>{t("edit_rename_or_delete_any_saved_area_directly_from_the_list")}</p>
          </>
        );

      case "customize-your-watch-area-notifications-on-desktop":
        return (
          <>
            <p>{t("on_desktop_go_to_your_profile_notifications_watched_area")}</p>
            <p>{t("enable_or_disable_property_sold_new_listing_and_price_change_updates")}</p>
            <p>{t("you_can_also_adjust_update_frequency")}</p>
          </>
        );

      case "customize-your-watch-area-notifications-on-app":
        return (
          <>
            <p>{t("in_the_mobile_app_open_settings_notifications_watched_area")}</p>
            <p>{t("choose_alert_types_and_enable_push_notifications_for_real_time_updates")}</p>
          </>
        );

      case "bc-tax-assessment-history":
        return (
          <>
            <p>{t(
              "bc_tax_assessment_history_displays_property_assessment_values_from_bc_assessment"
            )}</p>
            <p>{t(
              "this_helps_you_understand_value_trends_over_the_years_and_compare_them_with_market_activity"
            )}</p>
          </>
        );

      case "explanation-of-map-labels":
        return (
          <>
            <p>{t(
              "map_labels_indicate_property_status_such_as_sold_for_sale_for_lease_and_exclusive_listings"
            )}</p>
            <p>{t(
              "colors_and_icons_help_differentiate_property_types_and_listing_conditions"
            )}</p>
          </>
        );

      default:
        return <p>{t("no_content_available")}</p>;
    }
  };

  return (
    <>
      <ScamNav />
      <div className="faq-container">
        <div className="faq-wrapper">

          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span
              className="breadcrumb-link"
              onClick={() => navigate("/faq")}
            >{t("faq")}</span>

            <span> › </span>

            <span
              className="breadcrumb-link"
              onClick={() => navigate("/faq/features")}
            >{t("features_tools")}</span>

            <span> › </span>

            <span>{article?.question}</span>
          </div>

          {/* FULL 2-COLUMN LAYOUT */}
          <div className="page-layout">
            
            <div className="left-panel">
              <SearchBar 
                searchQuery="" 
                setSearchQuery={() => {}} 
                onSearch={() => {}} 
              />

              <div className="article-title-row">
                <FileText className="article-title-icon" />
                <h1 className="article-title">{article?.question}</h1>
              </div>

              <div className="article-content-box">
                <div className="article-content-inner">{renderContent()}</div>
              </div>
            </div>

            <div className="right-panel">
              <Sidebar
                faqData={faqData}
                sidebarCategories={faqData}
                openSidebarId={"features"}
                toggleSidebar={() => {}}
                highlightArticleSlug={articleSlug}
              />
            </div>

          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a className="footer-link">{t("homenest_inc_brokerage")}</a>
            <a className="footer-link">{t("legal")}</a>
            <a className="footer-link">{t("privacy_security")}</a>
            <a className="footer-link">{t("terms_conditions")}</a>
            <a className="footer-link">{t("accessibility")}</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Features;
