import React from "react";
import { Folder, FileText, ChevronRight, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

interface FAQArticle {
  id: string;
  question: string;
  slug: string;
}

interface FAQCategoryData {
  id: string;
  title: string;
  count: number;
  articles: FAQArticle[];
}

interface SidebarCategory {
  id: string;
  title: string;
}

interface SidebarProps {
  faqData: FAQCategoryData[];
  sidebarCategories: SidebarCategory[];
  openSidebarId: string | null;
  toggleSidebar: (id: string) => void;
  highlightArticleSlug?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  faqData,
  sidebarCategories,
  openSidebarId,
  toggleSidebar,
  highlightArticleSlug,
}) => {
  const navigate = useNavigate();

  return (
    <aside className="faq-sidebar">
      <nav>
        <ul className="faq-sidebar-nav">
          {sidebarCategories.map((category) => {
            const data = faqData.find((c) => c.id === category.id);

            return (
              <li key={category.id}>
                <div
                  className="faq-sidebar-link"
                  onClick={() => toggleSidebar(category.id)}
                >
                  <div className="faq-sidebar-link-content">
                    <Folder className="faq-sidebar-folder-icon" />
                    <span>{category.title}</span>
                  </div>

                  {openSidebarId === category.id ? (
                    <ChevronDown className="faq-sidebar-chevron" />
                  ) : (
                    <ChevronRight className="faq-sidebar-chevron" />
                  )}
                </div>

                {openSidebarId === category.id && data && (
                  <ul className="faq-sidebar-articles">
                    {data.articles.map((article) => (
                      <li key={article.id}>
                        <div
                          className={`faq-sidebar-article-link ${
                            highlightArticleSlug === article.slug ? "active-article" : ""
                          }`}
                          onClick={() => {
                            navigate(`/faq/${category.id}/${article.slug}`);
                          }}
                        >
                          <FileText className="faq-article-icon" />
                          {article.question}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
