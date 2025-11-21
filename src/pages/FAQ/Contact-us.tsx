import { useParams,useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";
import SearchBar from "./search";
import Sidebar from "./Sidebar";

import "./Sidebar.css";
import "./ArticlePage.css";
import './Contact-us.css'

import { faqData } from "../FAQ/FAQ";
import ScamNav from "../ScamNav";

const ContactUs = () => {
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
            <p>
              For technical issues such as login problems, app crashes, or data
              display errors, please reach out to our support team.
            </p>
            <p>
              Provide as much detail as possible, including screenshots if
              applicable.
            </p>
          </>
        );

      case "complain-about-brokerage-services":
        return (
          <>
            <p>
              If you wish to submit a complaint regarding brokerage services,
              please include:
            </p>
            <ul>
              <li>Your full name</li>
              <li>Property address (if relevant)</li>
              <li>Agent or brokerage name</li>
              <li>Detailed description of the issue</li>
            </ul>
            <p>
              Our compliance team will review your submission and respond within
              2–3 business days.
            </p>
          </>
        );

      case "technical-support-steps":
        return (
          <>
            <p>To troubleshoot issues, please try the following steps:</p>
            <ul>
              <li>Restart the app or refresh your browser</li>
              <li>Ensure your app is updated to the latest version</li>
              <li>Disable VPN or proxy connections</li>
              <li>Clear cache and cookies</li>
            </ul>
            <p>If the issue persists, contact support with screenshots.</p>
          </>
        );

      case "how-to-post-my-property-listing-on-housesigma":
        return (
          <>
            <p>
              To post your property listing on HouseSigma, you must be a
              licensed real estate agent with access to your regional MLS board.
            </p>
            <p>
              Listings sync automatically from the MLS. If your listing is not
              appearing, verify that:
            </p>
            <ul>
              <li>The listing is active on MLS</li>
              <li>All required fields are completed</li>
              <li>Your board supports VOW/IDX data sharing</li>
            </ul>
          </>
        );

      case "feedback-and-feature-requests":
        return (
          <>
            <p>We welcome feedback to improve our platform.</p>
            <p>
              To submit a feature request, include the feature idea, why you
              need it, and how it will help your workflow.
            </p>
            <p>
              Our product team reviews suggestions regularly and may reach out
              if more information is needed.
            </p>
          </>
        );

      default:
        return <p>No content available.</p>;
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
          >
            FAQ
          </span>

          <span> › </span>

          <span
            className="breadcrumb-link"
            onClick={() => navigate("/faq/contact-us")}
          >
            Contact Us
          </span>

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
            <a className="footer-link">HouseSigma Inc. Brokerage</a>
            <a className="footer-link">Legal</a>
            <a className="footer-link">Privacy & Security</a>
            <a className="footer-link">Terms & Conditions</a>
            <a className="footer-link">Accessibility</a>
          </div>
        </div>
      </footer>
      </>
  );
};

export default ContactUs;
