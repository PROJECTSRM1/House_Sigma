import { useParams, Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FileText } from "lucide-react";
import SearchBar from "./search";
import Sidebar from "./Sidebar";
import ScamNav from "../ScamNav";

import "./Sidebar.css";
import "./Categorys.css";

import { faqData } from "../FAQ/FAQ";

const CategoryPage = () => {
  const { t } = useTranslation();

  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = faqData.find((c) => c.id === categoryId);

  if (!category) return <p>{t("category_not_found")}</p>;

  return (
    <>
      {/* NAVBAR */}
      <ScamNav />
      <div className="faq-container">

        {/* MAIN CONTENT */}
        <div className="faq-wrapper">

          {/* Breadcrumb */}
          <div className="breadcrumb">
            <span className="breadcrumb-link" onClick={() => navigate("/faq")}>{t("faq")}</span>

            <span> › </span>
            <span>{category.title}</span>
          </div>

          {/* 2 COLUMN LAYOUT */}
          <div className="page-layout">

            {/* LEFT PANEL */}
            <div className="left-panel">

              {/* Search */}
              <SearchBar
                searchQuery=""
                setSearchQuery={() => {}}
                onSearch={() => {}}
              />

              {/* Category Title */}
              <div className="article-title-row">
                <FileText className="article-title-icon" />
                <h1 className="article-title">{category.title}</h1>
              </div>

              {/* Article List Box */}
              <div className="article-content-box">
                <div className="article-content-inner">

                  <ul className="category-article-list">
                    {category.articles.map((article) => (
                      <li key={article.id} className="category-article-item">
                        <Link
                          to={`/faq/${category.id}/${article.slug}`}
                          className="category-article-link"
                        >
                          <FileText className="faq-article-icon" />
                          {article.question}
                        </Link>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="right-panel">
              <Sidebar
                faqData={faqData}
                sidebarCategories={faqData}
                openSidebarId={categoryId ?? ""}
                toggleSidebar={() => {}}
              />
            </div>

          </div>
        </div>

        
      </div>
      {/* FOOTER */}
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

export default CategoryPage;
