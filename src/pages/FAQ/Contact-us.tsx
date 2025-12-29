import { useParams,useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FileText } from "lucide-react";
import SearchBar from "./search";
import Sidebar from "./Sidebar";

import "./Sidebar.css";
import "./ArticlePage.css";
import './Contact-us.css'

import { faqData } from "../FAQ/FAQ";
import ScamNav from "../ScamNav";

const ContactUs = () => {
  const { t } = useTranslation();

  const { articleSlug } = useParams();
  const navigate = useNavigate();

  const category = faqData.find((c) => c.id === "contact-us");
  const article = category?.articles.find((a) => a.slug === articleSlug);

  const renderContent = () => {
    if (!articleSlug) return null;

    switch (articleSlug) {
      case "contact-technical-support":
        return (
          <>
            <p>{t(
              "for_technical_issues_such_as_login_problems_app_crashes_or_data_display_errors_please_reach_out_to_our_support_team"
            )}</p>
            <p>{t("provide_as_much_detail_as_possible_including_screenshots_if_applicable")}</p>
          </>
        );

      case "complain-about-brokerage-services":
        return (
          <>
            <p>{t(
              "if_you_wish_to_submit_a_complaint_regarding_brokerage_services_please_include"
            )}</p>
            <ul>
              <li>{t("your_full_name")}</li>
              <li>{t("property_address_if_relevant")}</li>
              <li>{t("agent_or_brokerage_name")}</li>
              <li>{t("detailed_description_of_the_issue")}</li>
            </ul>
            <p>{t(
              "our_compliance_team_will_review_your_submission_and_respond_within_2_3_business_days"
            )}</p>
          </>
        );

      case "technical-support-steps":
        return (
          <>
            <p>{t("to_troubleshoot_issues_please_try_the_following_steps")}</p>
            <ul>
              <li>{t("restart_the_app_or_refresh_your_browser")}</li>
              <li>{t("ensure_your_app_is_updated_to_the_latest_version")}</li>
              <li>{t("disable_vpn_or_proxy_connections")}</li>
              <li>{t("clear_cache_and_cookies")}</li>
            </ul>
            <p>{t("if_the_issue_persists_contact_support_with_screenshots")}</p>
          </>
        );

      case "how-to-post-my-property-listing-on-housesigma":
        return (
          <>
            <p>{t(
              "to_post_your_property_listing_on_homenest_you_must_be_a_licensed_real_estate_agent_with_access_to_your_regional_mls_board"
            )}</p>
            <p>{t(
              "listings_sync_automatically_from_the_mls_if_your_listing_is_not_appearing_verify_that"
            )}</p>
            <ul>
              <li>{t("the_listing_is_active_on_mls")}</li>
              <li>{t("all_required_fields_are_completed")}</li>
              <li>{t("your_board_supports_vow_idx_data_sharing")}</li>
            </ul>
          </>
        );

      case "feedback-and-feature-requests":
        return (
          <>
            <p>{t("we_welcome_feedback_to_improve_our_platform")}</p>
            <p>{t(
              "to_submit_a_feature_request_include_the_feature_idea_why_you_need_it_and_how_it_will_help_your_workflow"
            )}</p>
            <p>{t(
              "our_product_team_reviews_suggestions_regularly_and_may_reach_out_if_more_information_is_needed"
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
              onClick={() => navigate("/faq/contact-us")}
            >{t("contact_us")}</span>

            <span> › </span>

            <span>{article?.question}</span>
          </div>

          {/* FULL 2-COLUMN LAYOUT */}
          <div className="page-layout">

            {/* LEFT PANEL */}
            <div className="left-panel">

              {/* Search Bar */}
              <SearchBar
                searchQuery=""
                setSearchQuery={() => {}}
                onSearch={() => {}}
              />

              {/* Title */}
              <div className="article-title-row">
                <FileText className="article-title-icon" />
                <h1 className="article-title">{article?.question}</h1>
              </div>

              {/* Content Box */}
              <div className="article-content-box">
                <div className="article-content-inner">{renderContent()}</div>
              </div>

            </div>

            {/* RIGHT PANEL — Sidebar */}
            <div className="right-panel">
              <Sidebar
                faqData={faqData}
                sidebarCategories={faqData}
                openSidebarId={"contact-us"}
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

export default ContactUs;
