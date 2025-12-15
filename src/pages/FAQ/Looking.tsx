import { useParams,useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";
import SearchBar from "./search";
import Sidebar from "./Sidebar";
import './Looking.css';

import "./Sidebar.css";

import { faqData } from "../FAQ/FAQ";
import ScamNav from "../ScamNav";

const Looking = () => {
  const { articleSlug } = useParams();
  const navigate = useNavigate();

  const category = faqData.find((c) => c.id === "looking-for-properties");
  const article = category?.articles.find((a) => a.slug === articleSlug);

  const renderContent = () => {
    switch (articleSlug) {
      case "i-can-t-find-sold-lease-forsale-property-on-map":
        return (
          <>
            <p>You may need to zoom in closer to see sold/lease/forsale markers.</p>
            <p>Filters can also hide some properties. Try resetting filters.</p>
          </>
        );

      case "why-do-you-have-sold-price-on-the-website":
        return (
          <>
            <p>
              Sold prices are shown to help users understand real market
              conditions and compare property values.
            </p>
            <p>This information is permitted under real estate guidelines.</p>
          </>
        );

      case "will-you-expand-to-other-provinces":
        return (
          <>
            <p>Expansion is ongoing, and more provinces will be supported soon.</p>
            <p>Stay tuned for updates in our announcement section.</p>
          </>
        );

      case "some-sold-listings-are-marked-as-expired":
        return (
          <>
            <p>
              Sometimes sold listings appear as expired due to temporary MLS
              synchronization delays.
            </p>
            <p>Refresh the page or check again after a short time.</p>
          </>
        );

      case "i-can-t-receive-daily-watch-community-email":
        return (
          <>
            <p>Check your spam/junk folder.</p>
            <p>Ensure your watch community notifications are enabled.</p>
            <p>Make sure your email provider is not blocking our messages.</p>
          </>
        );

      case "use-keyword-filters-to-search-for-property":
        return (
          <>
            <p>
              You can search properties using keywords like “pool”, “garage”,
              “downtown”, or “basement”.
            </p>
            <p>
              Combine multiple keywords for better accuracy when searching.
            </p>
          </>
        );

      default:
        return <p>No content available.</p>;
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
        >
            FAQ
        </span>

        <span> › </span>

        <span
            className="breadcrumb-link"
            onClick={() => navigate("/faq/looking-for-properties")}
        >
            Looking for properties
        </span>

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
            <a className="footer-link">HomeNest Inc. Brokerage</a>
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

export default Looking;
