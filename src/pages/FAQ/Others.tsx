import { useParams,useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";
import SearchBar from "./search";
import Sidebar from "./Sidebar";
import ScamNav from "../ScamNav";

import "./Sidebar.css";
import './Others.css';

import { faqData } from "./FAQ";

const Others = () => {
  const { articleSlug } = useParams();
  const navigate = useNavigate();

  const category = faqData.find((c) => c.id === "others");
  const article = category?.articles.find((a) => a.slug === articleSlug);

  const renderContent = () => {
    switch (articleSlug) {
      case "website-menu-blocks-half-of-screen":
        return (
          <>
            <p>
              If the website menu is blocking half of your screen, this may be
              caused by zoom settings or display scaling.
            </p>
            <p>Try the following:</p>
            <ul>
              <li>Reset browser zoom to 100%</li>
              <li>Clear browsing cache</li>
              <li>Resize your browser window</li>
              <li>Disable browser extensions that modify UI</li>
            </ul>
          </>
        );

      case "device-support-compatibility":
        return (
          <>
            <p>HouseSigma supports most modern devices, including:</p>
            <ul>
              <li>iOS 13 or later</li>
              <li>Android 8.0 or later</li>
              <li>Most desktop browsers (Chrome, Safari, Edge, Firefox)</li>
            </ul>
            <p>
              Older devices or outdated browser versions may experience reduced
              performance.
            </p>
          </>
        );

      case "housesigma-discord-community":
        return (
          <>
            <p>
              Join our official HouseSigma Discord community to connect with
              other users, ask questions, and receive updates.
            </p>
            <p>Available channels include:</p>
            <ul>
              <li>Market talk</li>
              <li>Feature suggestions</li>
              <li>Bug reports</li>
              <li>General discussion</li>
            </ul>
          </>
        );

      case "re-validate-password":
        return (
          <>
            <p>
              Password re-validation is required for account security when
              performing sensitive actions.
            </p>
            <p>You may be asked to:</p>
            <ul>
              <li>Re-enter your password</li>
              <li>Verify your email</li>
              <li>Confirm login activity</li>
            </ul>
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
            onClick={() => navigate("/faq/others")}
          >
            Others
          </span>

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

export default Others;
