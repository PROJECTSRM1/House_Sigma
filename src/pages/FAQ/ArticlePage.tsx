import { useParams, useNavigate } from "react-router-dom";
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
              <li>Check spam folder</li>

              <li>
                Some email providers reject our email (Yahoo, Cogeco, Bell).
                Please use a different email provider such as hotmail.com,
                gmail.com.
              </li>

              <li>
                Do not use corporate email. Many companies have very aggressive
                spam blockers, which block our email.
              </li>

              <li>
                <strong>
                  Do not use email provided by cogeco, rogers or qq.com.
                </strong>
              </li>
            </ol>

            <p className="article-note">
              If all of the above does not work, send a request to support.
            </p>

            <p className="article-note">
              <strong>Keyword:</strong> verification code email signup register
              reset password
            </p>
          </>
        );

      case "why-it-requires-sign-up-to-view-some-properties":
        return (
          <>
            <p>Sold data must be password protected since 2018.</p>
            <p>All real estate websites must follow this rule.</p>
          </>
        );

      case "how-to-delete-my-account":
        return (
          <>
            <p>Follow the steps to delete your account.</p>
            <img src={img2} className="article-image" />
          </>
        );

      case "sign-up-reset-password-does-not-work":
        return (
          <>
            <p>Robot detection may block sign-up/reset requests.</p>
            <ul>
              <li>Corporate networks</li>
              <li>VPN</li>
              <li>Auto scripts</li>
            </ul>
          </>
        );

      case "why-my-account-watch-list-is-wiped":
        return (
          <>
            <p>Usually caused by registering multiple accounts.</p>
            <img src={img1} className="article-image" />
          </>
        );

      case "vow-restrictions-for-real-estate-agents-and-commercial-users":
        return (
          <>
            <p>TRREB restricts VOW data…</p>
            <a href="https://housesigma.com/blog-en/faq/contact-us/contact-technical-support">
              Contact Support
            </a>
          </>
        );

      case "request-to-delete-account":
        return (
          <>
            <p>
              The form below is for HomeNest user technical support only. We{" "}
              <strong>can not</strong> provide buy/sell/lease advice through the
              following form.
            </p>

            <p>To have your account deleted, there are two methods:</p>

            <ul>
              <li>
                Method 1: Login to HomeNest App, use app → account → profile → delete
              </li>
              <li>
                Method 2: Use the following form, a technical support person will assist you.
              </li>
            </ul>

            <form className="delete-form">
              <label>Your Name</label>
              <input type="text" placeholder="Enter your name" required />

              <label>Your Email (required)</label>
              <input type="email" placeholder="Enter your email" required />

              <label>Reason for contact</label>
              <select required>
                <option>Request to delete account</option>
                <option>General Inquiry</option>
              </select>

              <label>Your Message</label>
              <textarea placeholder="Write your message..." required></textarea>

              <label className="checkbox-label-title">
                What other information you would request to delete
              </label>

              <div className="checkbox-group">
                <label>
                  <input type="checkbox" /> Customer profile
                </label>

                <label>
                  <input type="checkbox" /> Contact info
                </label>
              </div>

              <button type="submit" className="send-btn">SEND</button>
            </form>

            <p className="privacy-note">
              This form is compliant with Google Play data safety and privacy requirement.
            </p>
          </>
        );

      default:
        return <p>No content available.</p>;
    }
  };

  return (
    <div className="faq-page-container">

      {/* NAVBAR AT TOP */}
      <ScamNav />

      <div className="faq-wrapper">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <span className="breadcrumb-link" onClick={() => navigate("/faq")}>
            FAQ
          </span>

          <span> › </span>

          <span
            className="breadcrumb-link"
            onClick={() => navigate("/faq/user-account")}
          >
            User Account
          </span>

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
            <a className="footer-link">HomeNest Inc. Brokerage</a>
            <a className="footer-link">Legal</a>
            <a className="footer-link">Privacy & Security</a>
            <a className="footer-link">Terms & Conditions</a>
            <a className="footer-link">Accessibility</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArticlePage;
