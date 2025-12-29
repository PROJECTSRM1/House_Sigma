import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FileText } from "lucide-react";
import SearchBar from "./search";
import "./Sidebar.css";
import Sidebar from "./Sidebar";
import "./ArticlePage.css";
import img1 from "/assets/image-2.png";
import img2 from "/assets/image.png";
import ScamNav from "@/pages/ScamNav";

import { faqData } from "../FAQ/FAQ";

const ArticlePage = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const { articleSlug } = useParams();

  const category = faqData.find((c) => c.id === "user-account");
  const article = category?.articles.find((a) => a.slug === articleSlug);

  const renderContent = () => {
    if (!articleSlug) return null;

    switch (articleSlug) {
      case "i-can-t-receive-verification-code":
        return (
          <>
            <ol className="article-list">
              <li>{t("check_spam_folder")}</li>

              <li>{t(
                "some_email_providers_reject_our_email_yahoo_cogeco_bell_please_use_a_different_email_provider_such_as_hotmail_com_gmail_com"
              )}</li>

              <li>{t(
                "do_not_use_corporate_email_many_companies_have_very_aggressive_spam_blockers_which_block_our_email"
              )}</li>

              <li>
                <strong>{t("do_not_use_email_provided_by_cogeco_rogers_or_qq_com")}</strong>
              </li>
            </ol>
            <p className="article-note">{t("if_all_of_the_above_does_not_work_send_a_request_to_support")}</p>
            <p className="article-note">
              <strong>{t("keyword")}</strong>{t("verification_code_email_signup_register_reset_password")}</p>
          </>
        );

      case "why-it-requires-sign-up-to-view-some-properties":
        return (
          <>
            <p>{t("sold_data_must_be_password_protected_since_2018")}</p>
            <p>{t("all_real_estate_websites_must_follow_this_rule")}</p>
          </>
        );

      case "how-to-delete-my-account":
        return (
          <>
            <p>{t("follow_the_steps_to_delete_your_account")}</p>
            <img src={img2} className="article-image" />
          </>
        );

      case "sign-up-reset-password-does-not-work":
        return (
          <>
            <p>{t("robot_detection_may_block_sign_up_reset_requests")}</p>
            <ul>
              <li>{t("corporate_networks")}</li>
              <li>{t("vpn")}</li>
              <li>{t("auto_scripts")}</li>
            </ul>
          </>
        );

      case "why-my-account-watch-list-is-wiped":
        return (
          <>
            <p>{t("usually_caused_by_registering_multiple_accounts")}</p>
            <img src={img1} className="article-image" />
          </>
        );

      case "vow-restrictions-for-real-estate-agents-and-commercial-users":
        return (
          <>
            <p>{t("trreb_restricts_vow_data")}</p>
            <a href="https://housesigma.com/blog-en/faq/contact-us/contact-technical-support">{t("contact_support")}</a>
          </>
        );

      case "request-to-delete-account":
        return (
          <>
            <p>{t("the_form_below_is_for_homenest_user_technical_support_only_we")}{" "}
              <strong>{t("can_not")}</strong>{t("provide_buy_sell_lease_advice_through_the_following_form")}</p>
            <p>{t("to_have_your_account_deleted_there_are_two_methods")}</p>
            <ul>
              <li>{t("method_1_login_to_homenest_app_use_app_account_profile_delete")}</li>
              <li>{t(
                "method_2_use_the_following_form_a_technical_support_person_will_assist_you"
              )}</li>
            </ul>
            <form className="delete-form">
              <label>{t("your_name")}</label>
              <input type="text" placeholder="Enter your name" required />

              <label>{t("your_email_required")}</label>
              <input type="email" placeholder="Enter your email" required />

              <label>{t("reason_for_contact")}</label>
              <select required>
                <option>{t("request_to_delete_account")}</option>
                <option>{t("general_inquiry")}</option>
              </select>

              <label>{t("your_message")}</label>
              <textarea placeholder="Write your message..." required></textarea>

              <label className="checkbox-label-title">{t("what_other_information_you_would_request_to_delete")}</label>

              <div className="checkbox-group">
                <label>
                  <input type="checkbox" />{t("customer_profile")}</label>

                <label>
                  <input type="checkbox" />{t("contact_info")}</label>
              </div>

              <button type="submit" className="send-btn">{t("send")}</button>
            </form>
            <p className="privacy-note">{t(
              "this_form_is_compliant_with_google_play_data_safety_and_privacy_requirement"
            )}</p>
          </>
        );

      default:
        return <p>{t("no_content_available")}</p>;
    }
  };

  return (
    <div className="faq-page-container">
      {/* NAVBAR AT TOP */}
      <ScamNav />
      <div className="faq-wrapper">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span className="breadcrumb-link" onClick={() => navigate("/faq")}>{t("faq")}</span>

          <span> › </span>

          <span
            className="breadcrumb-link"
            onClick={() => navigate("/faq/user-account")}
          >{t("user_account")}</span>

          <span> › </span>

          <span>{article?.question}</span>
        </div>

        {/* FULL PAGE 2-COLUMN LAYOUT */}
        <div className="page-layout">

          {/* LEFT COLUMN */}
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

          {/* RIGHT COLUMN — SIDEBAR */}
          <div className="right-panel">
            <Sidebar
              faqData={faqData}
              sidebarCategories={faqData}
              openSidebarId={"user-account"}
              toggleSidebar={() => {}}
              highlightArticleSlug={articleSlug}
            />
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
    </div>
  );
};

export default ArticlePage;
