import { useParams, Link,useNavigate } from "react-router-dom";
import { FileText } from "lucide-react";
import SearchBar from "./search";
import Sidebar from "./Sidebar";

import "./Sidebar.css";
import "./Categorys.css"

import { faqData } from "../FAQ/FAQ";

const CategoryPage = () => {
  const { categoryId } = useParams();
  const navigate=useNavigate();

  const category = faqData.find((c) => c.id === categoryId);

  if (!category) return <p>Category not found</p>;

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

            <span>{category.title}</span>
            </div>

        {/* Page layout */}
        <div className="page-layout">

          {/* LEFT PANEL */}
          <div className="left-panel">

            {/* Search Bar */}
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

            {/* Content Box */}
            <div className="article-content-box">
              <div className="article-content-inner">

                {/* List all articles */}
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

          {/* RIGHT PANEL — SIDEBAR */}
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
  );
};

export default CategoryPage;
