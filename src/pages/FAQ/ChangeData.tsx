import { useParams,useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";
import SearchBar from "./search";
import Sidebar from "./Sidebar";

import "./Sidebar.css";
import './Looking.css'

import { faqData } from "../FAQ/FAQ";

const ChangeData = () => {
  const { articleSlug } = useParams();
  const navigate = useNavigate();

  const category = faqData.find((c) => c.id === "change-data");
  const article = category?.articles.find((a) => a.slug === articleSlug);

  const renderContent = () => {
    switch (articleSlug) {
      case "why-are-some-estimated-values-not-correct":
        return (
          <>
            <p>
              Estimated values may vary depending on recent market activity,
              unavailable comparables, or incomplete property data.
            </p>
            <p>
              Automated valuation models use available MLS data and statistical
              algorithms, which may not fully reflect unique property features.
            </p>
          </>
        );

      case "how-to-correct-my-listing-data":
        return (
          <>
            <p>
              If your listing information is incorrect, you can request a data
              correction through the support form.
            </p>
            <p>
              Include MLS number, the incorrect field, and the correction needed
              for faster processing.
            </p>
          </>
        );

      case "how-to-fix-wrong-listing-location-on-map":
        return (
          <>
            <p>
              Wrong map locations happen when MLS geo-coordinates are inaccurate.
            </p>
            <p>
              Submit a correction request with the correct address or pin
              location, and our support team will update it.
            </p>
          </>
        );

      case "how-to-get-my-listing-featured-on-housesigma":
        return (
          <>
            <p>
              Featured listings require special placement and follow our listing
              promotion policies.
            </p>
            <p>
              Contact our support team with your MLS listing ID for more
              details.
            </p>
          </>
        );

      default:
        return <p>No content available.</p>;
    }
  };

  return (
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
                onClick={() => navigate("/faq/change-data")}
            >
                Change Data on HouseSigma
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
              <div className="article-content-inner">{renderContent()}</div>
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
  );
};

export default ChangeData;
