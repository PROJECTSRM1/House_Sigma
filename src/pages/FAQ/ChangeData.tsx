import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FileText } from "lucide-react";
import SearchBar from "./search";
import Sidebar from "./Sidebar";

import ScamNav from "../ScamNav";

import "./Sidebar.css";
import "./Looking.css";

import { faqData } from "../FAQ/FAQ";

const ChangeData = () => {
  const { t } = useTranslation();

  const { articleSlug } = useParams();
  const navigate = useNavigate();

  const category = faqData.find((c) => c.id === "change-data");
  const article = category?.articles.find((a) => a.slug === articleSlug);

  const renderContent = () => {
    switch (articleSlug) {
      case "why-are-some-estimated-values-not-correct":
        return (
          <>
            <p>{t(
              "estimated_values_may_vary_depending_on_recent_market_activity_unavailable_comparables_or_incomplete_property_data"
            )}</p>
            <p>{t(
              "automated_valuation_models_use_available_mls_data_and_statistical_algorithms_which_may_not_fully_reflect_unique_property_features"
            )}</p>
          </>
        );

      case "how-to-correct-my-listing-data":
        return (
          <>
            <p>{t(
              "if_your_listing_information_is_incorrect_you_can_request_a_data_correction_through_the_support_form"
            )}</p>
            <p>{t(
              "include_mls_number_the_incorrect_field_and_the_correction_needed_for_faster_processing"
            )}</p>
          </>
        );

      case "how-to-fix-wrong-listing-location-on-map":
        return (
          <>
            <p>{t("wrong_map_locations_happen_when_mls_geo_coordinates_are_inaccurate")}</p>
            <p>{t(
              "submit_a_correction_request_with_the_correct_address_or_pin_location_and_our_support_team_will_update_it"
            )}</p>
          </>
        );

      case "how-to-get-my-listing-featured-on-housesigma":
        return (
          <>
            <p>{t(
              "featured_listings_require_special_placement_and_follow_our_listing_promotion_policies"
            )}</p>
            <p>{t("contact_our_support_team_with_your_mls_listing_id_for_more_details")}</p>
          </>
        );

      default:
        return <p>{t("no_content_available")}</p>;
    }
  };

  return (
    <>
      {/* NAVBAR AT TOP */}
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
              onClick={() => navigate("/faq/change-data")}
            >{t("change_data_on_homenest")}</span>

            <span> › </span>

            <span>{article?.question}</span>
          </div>

          {/* FULL 2-COLUMN PAGE LAYOUT */}
          <div className="page-layout">

            {/* LEFT PANEL */}
            <div className="left-panel">

              {/* SEARCH BAR */}
              <SearchBar
                searchQuery=""
                setSearchQuery={() => {}}
                onSearch={() => {}}
              />

              {/* TITLE */}
              <div className="article-title-row">
                <FileText className="article-title-icon" />
                <h1 className="article-title">{article?.question}</h1>
              </div>

              {/* CONTENT BOX */}
              <div className="article-content-box">
                <div className="article-content-inner">
                  {renderContent()}
                </div>
              </div>
            </div>

            {/* RIGHT PANEL — SIDEBAR */}
            <div className="right-panel">
              <Sidebar
                faqData={faqData}
                sidebarCategories={faqData}
                openSidebarId={"change-data"}
                toggleSidebar={() => {}}
                highlightArticleSlug={articleSlug}
              />
            </div>

          </div>
        </div>
        
      </div>
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

export default ChangeData;
