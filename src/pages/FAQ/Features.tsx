import { useParams,useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";
import SearchBar from "./search";
import Sidebar from "./Sidebar";
import ScamNav from "../ScamNav";

import "./Sidebar.css";
import './Feature.css';

import { faqData } from "../FAQ/FAQ";

const Features = () => {
  const { articleSlug } = useParams();
  const navigate = useNavigate();
  const category = faqData.find((c) => c.id === "features");
  const article = category?.articles.find((a) => a.slug === articleSlug);

  const renderContent = () => {
    switch (articleSlug) {
      case "watched-area-setting-up-a-new-area":
        return (
          <>
            <p>
              To set up a new watched area, open the map and zoom into the
              location you want to monitor.
            </p>
            <p>
              Click on “Watch Area” and adjust the boundary as needed. You will
              begin receiving market updates for this area.
            </p>
          </>
        );

      case "watched-area-managing-saved-areas":
        return (
          <>
            <p>
              You can find all saved watch areas in your profile under
              “Watched Areas”.
            </p>
            <p>
              Edit, rename, or delete any saved area directly from the list.
            </p>
          </>
        );

      case "customize-your-watch-area-notifications-on-desktop":
        return (
          <>
            <p>
              On desktop, go to your profile → Notifications → Watched Area.
            </p>
            <p>
              Enable or disable property sold, new listing, and price change
              updates.
            </p>
            <p>You can also adjust update frequency.</p>
          </>
        );

      case "customize-your-watch-area-notifications-on-app":
        return (
          <>
            <p>
              In the mobile app, open Settings → Notifications → Watched Area.
            </p>
            <p>
              Choose alert types and enable push notifications for real-time
              updates.
            </p>
          </>
        );

      case "bc-tax-assessment-history":
        return (
          <>
            <p>
              BC Tax Assessment History displays property assessment values from
              BC Assessment.
            </p>
            <p>
              This helps you understand value trends over the years and compare
              them with market activity.
            </p>
          </>
        );

      case "explanation-of-map-labels":
        return (
          <>
            <p>
              Map labels indicate property status such as Sold, For Sale, For
              Lease, and Exclusive listings.
            </p>
            <p>
              Colors and icons help differentiate property types and listing
              conditions.
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
            onClick={() => navigate("/faq/features")}
          >
            Features & Tools
          </span>

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

export default Features;
