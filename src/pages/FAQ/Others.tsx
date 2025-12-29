import { useParams,useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FileText } from "lucide-react";
import SearchBar from "./search";
import Sidebar from "./Sidebar";
import ScamNav from "../ScamNav";

import "./Sidebar.css";
import './Others.css';

import { faqData } from "./FAQ";

const Others = () => {
  const { t } = useTranslation();

  const { articleSlug } = useParams();
  const navigate = useNavigate();

  const category = faqData.find((c) => c.id === "others");
  const article = category?.articles.find((a) => a.slug === articleSlug);

  const renderContent = () => {
    switch (articleSlug) {
      case "website-menu-blocks-half-of-screen":
        return (
          <>
            <p>{t(
              "if_the_website_menu_is_blocking_half_of_your_screen_this_may_be_caused_by_zoom_settings_or_display_scaling"
            )}</p>
            <p>{t("try_the_following")}</p>
            <ul>
              <li>{t("reset_browser_zoom_to_100")}</li>
              <li>{t("clear_browsing_cache")}</li>
              <li>{t("resize_your_browser_window")}</li>
              <li>{t("disable_browser_extensions_that_modify_ui")}</li>
            </ul>
          </>
        );

      case "device-support-compatibility":
        return (
          <>
            <p>{t("homenest_supports_most_modern_devices_including")}</p>
            <ul>
              <li>{t("ios_13_or_later")}</li>
              <li>{t("android_8_0_or_later")}</li>
              <li>{t("most_desktop_browsers_chrome_safari_edge_firefox")}</li>
            </ul>
            <p>{t(
              "older_devices_or_outdated_browser_versions_may_experience_reduced_performance"
            )}</p>
          </>
        );

      case "housesigma-discord-community":
        return (
          <>
            <p>{t(
              "join_our_official_homenest_discord_community_to_connect_with_other_users_ask_questions_and_receive_updates"
            )}</p>
            <p>{t("available_channels_include")}</p>
            <ul>
              <li>{t("market_talk")}</li>
              <li>{t("feature_suggestions")}</li>
              <li>{t("bug_reports")}</li>
              <li>{t("general_discussion")}</li>
            </ul>
          </>
        );

      case "re-validate-password":
        return (
          <>
            <p>{t(
              "password_re_validation_is_required_for_account_security_when_performing_sensitive_actions"
            )}</p>
            <p>{t("you_may_be_asked_to")}</p>
            <ul>
              <li>{t("re_enter_your_password")}</li>
              <li>{t("verify_your_email")}</li>
              <li>{t("confirm_login_activity")}</li>
            </ul>
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
              onClick={() => navigate("/faq/others")}
            >{t("others")}</span>

            <span> › </span>

            <span>{article?.question}</span>
          </div>


          {/* FULL PAGE 2-COLUMN LAYOUT */}
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
                openSidebarId={"others"}
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

export default Others;
