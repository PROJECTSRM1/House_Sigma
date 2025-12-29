import { useParams,useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FileText } from "lucide-react";
import SearchBar from "./search";
import Sidebar from "./Sidebar";
import './Looking.css';

import "./Sidebar.css";

import { faqData } from "../FAQ/FAQ";
import ScamNav from "../ScamNav";

const Looking = () => {
  const { t } = useTranslation();

  const { articleSlug } = useParams();
  const navigate = useNavigate();

  const category = faqData.find((c) => c.id === "looking-for-properties");
  const article = category?.articles.find((a) => a.slug === articleSlug);

  const renderContent = () => {
    switch (articleSlug) {
      case "i-can-t-find-sold-lease-forsale-property-on-map":
        return (
          <>
            <p>{t("you_may_need_to_zoom_in_closer_to_see_sold_lease_forsale_markers")}</p>
            <p>{t("filters_can_also_hide_some_properties_try_resetting_filters")}</p>
          </>
        );

      case "why-do-you-have-sold-price-on-the-website":
        return (
          <>
            <p>{t(
              "sold_prices_are_shown_to_help_users_understand_real_market_conditions_and_compare_property_values"
            )}</p>
            <p>{t("this_information_is_permitted_under_real_estate_guidelines")}</p>
          </>
        );

      case "will-you-expand-to-other-provinces":
        return (
          <>
            <p>{t("expansion_is_ongoing_and_more_provinces_will_be_supported_soon")}</p>
            <p>{t("stay_tuned_for_updates_in_our_announcement_section")}</p>
          </>
        );

      case "some-sold-listings-are-marked-as-expired":
        return (
          <>
            <p>{t(
              "sometimes_sold_listings_appear_as_expired_due_to_temporary_mls_synchronization_delays"
            )}</p>
            <p>{t("refresh_the_page_or_check_again_after_a_short_time")}</p>
          </>
        );

      case "i-can-t-receive-daily-watch-community-email":
        return (
          <>
            <p>{t("check_your_spam_junk_folder")}</p>
            <p>{t("ensure_your_watch_community_notifications_are_enabled")}</p>
            <p>{t("make_sure_your_email_provider_is_not_blocking_our_messages")}</p>
          </>
        );

      case "use-keyword-filters-to-search-for-property":
        return (
          <>
            <p>{t(
              "you_can_search_properties_using_keywords_like_pool_garage_downtown_or_basement"
            )}</p>
            <p>{t("combine_multiple_keywords_for_better_accuracy_when_searching")}</p>
          </>
        );

      default:
        return <p>{t("no_content_available")}</p>;
    }
  };

  return (
    <>
      <ScamNav/>
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
              onClick={() => navigate("/faq/looking-for-properties")}
          >{t("looking_for_properties")}</span>

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
                openSidebarId={"looking-for-properties"}
                toggleSidebar={() => {}}
                highlightArticleSlug={articleSlug}
              />
            </div>

          </div>
        </div>
      </div>
      {/* FOOTER AT BOTTOM */}
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

export default Looking;
