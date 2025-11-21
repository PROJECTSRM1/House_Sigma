import { useState } from "react";
import { Folder, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import "./FAQ.css";
import SearchBar from "./search";
import Sidebar from "./Sidebar";
import ScamNav from "../ScamNav";

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

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// =========================
//     FAQ DATA
// =========================
export const faqData: FAQCategoryData[] = [
  {
    id: "user-account",
    title: "User Account",
    count: 8,
    articles: [
      { id: "1", question: "I can't receive verification code", slug: slugify("I can't receive verification code") },
      { id: "2", question: "Why it requires sign up to view some properties?", slug: slugify("Why it requires sign up to view some properties?") },
      { id: "3", question: "How to delete my account?", slug: slugify("How to delete my account?") },
      { id: "4", question: "Sign-up, reset-password does not work.", slug: slugify("Sign-up, reset-password does not work.") },
      { id: "5", question: "Why my account(watch list) is wiped.", slug: slugify("Why my account(watch list) is wiped.") },
      { id: "6", question: "VOW Restrictions for real estate agents and commercial users", slug: slugify("VOW Restrictions for real estate agents and commercial users") },
      { id: "7", question: "Request to delete account", slug: slugify("Request to delete account") },
      {id:"8",question:"PropTx VOW Restrictions for real estate agents and commercial users",slug:slugify("PropTx VOW Restrictions for real estate agents and commercial users")}
    ],
  },
  {
    id: "looking-for-properties",
    title: "Looking for properties",
    count: 9,
    articles: [
      { id: "1", question: "I can't find sold/lease/forsale property on map", slug: slugify("I can't find sold/lease/forsale property on map") },
      { id: "2", question: "Why do you have sold price on the website?", slug: slugify("Why do you have sold price on the website?") },
      { id: "3", question: "Will you expand to other provinces?", slug: slugify("Will you expand to other provinces?") },
      { id: "4", question: "Some sold listings are marked as expired", slug: slugify("Some sold listings are marked as expired") },
      { id: "5", question: "I can't receive daily watch community email", slug: slugify("I can't receive daily watch community email") },
      { id: "6", question: "Use keyword filters to search for property", slug: slugify("Use keyword filters to search for property") },
      {id:"7",question:"What does “terminated”, “expired”, “suspended” status mean?",slug:slugify("What does “terminated”, “expired”, “suspended” status mean?")},
      {id:"8",question:"Why best for school does not show on my homepage?",slug:slugify("Why best for school does not show on my homepage?")},
      {id:"9",question:"How to Search for a Condominium Unit",slug:slugify("How to Search for a Condominium Unit")},
    ],
  },
  {
    id: "change-data",
    title: "Change Data on HouseSigma",
    count: 4,
    articles: [
      { id: "1", question: "Why are some estimated values not correct?", slug: slugify("Why are some estimated values not correct?") },
      { id: "2", question: "How to correct my listing data?", slug: slugify("How to correct my listing data?") },
      { id: "3", question: "How to fix wrong listing location on map?", slug: slugify("How to fix wrong listing location on map?") },
      { id: "4", question: "How to get my listing featured on HouseSigma?", slug: slugify("How to get my listing featured on HouseSigma?") },
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    count: 5,
    articles: [
      { id: "1", question: "Contact Technical Support", slug: slugify("Contact Technical Support") },
      { id: "2", question: "Complain About Brokerage Services", slug: slugify("Complain About Brokerage Services") },
      { id: "3", question: "Technical Support Steps", slug: slugify("Technical Support Steps") },
      { id: "4", question: "How to post my property listing on HouseSigma", slug: slugify("How to post my property listing on HouseSigma") },
      { id: "5", question: "Feedback and Feature Requests", slug: slugify("Feedback and Feature Requests") },
    ],
  },
  {
    id: "features",
    title: "Features & Tools",
    count: 6,
    articles: [
      { id: "1", question: "Watched Area - Setting up a new area", slug: slugify("Watched Area - Setting up a new area") },
      { id: "2", question: "Watched Area - Managing Saved Areas", slug: slugify("Watched Area - Managing Saved Areas") },
      { id: "3", question: "Customize your Watch Area Notifications on Desktop", slug: slugify("Customize your Watch Area Notifications on Desktop") },
      { id: "4", question: "Customize your Watch Area Notifications on App", slug: slugify("Customize your Watch Area Notifications on App") },
      { id: "5", question: "BC Tax Assessment History", slug: slugify("BC Tax Assessment History") },
      { id: "6", question: "Explanation of Map Labels", slug: slugify("Explanation of Map Labels") },
    ],
  },
  {
    id: "others",
    title: "Others",
    count: 4,
    articles: [
      { id: "1", question: "Website menu blocks half of screen", slug: slugify("Website menu blocks half of screen") },
      { id: "2", question: "Device support/compatibility", slug: slugify("Device support/compatibility") },
      { id: "3", question: "HouseSigma Discord Community", slug: slugify("HouseSigma Discord Community") },
      { id: "4", question: "Re-validate password", slug: slugify("Re-validate password") },
    ],
  },
];

// Sidebar list
const sidebarCategories: SidebarCategory[] = faqData.map((c) => ({
  id: c.id,
  title: c.title,
}));

// =========================
//         FAQ PAGE
// =========================

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openSidebarId, setOpenSidebarId] = useState<string | null>(null);

  const toggleSidebar = (id: string) => {
    setOpenSidebarId(openSidebarId === id ? null : id);
  };

  return (
    <>
    <ScamNav/>
    <div className="faq-container">
      <div className="faq-wrapper">
        <h1 className="faq-title">FAQ</h1>

        <div className="faq-layout">

          <div className="faq-main-content">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearch={() => console.log("Searching:", searchQuery)}
            />

            <div className="faq-categories-grid">
              {faqData.map((category) => (
                <div key={category.id} className="faq-category-card">

                  <div className="faq-category-accent" />

                  <div className="faq-category-content">
                    <div className="faq-category-header">
                      <Folder className="faq-category-icon" />
                      <h3 className="faq-category-title">
                        {category.title} ({category.count})
                      </h3>
                    </div>

                    <ul className="faq-articles-list">
                    {category.articles.slice(0, 6).map((article) => (
                      <li key={article.id}>
                        <Link
                          to={`/faq/${category.id}/${article.slug}`}
                          className="faq-article-link"
                        >
                          <FileText className="faq-article-icon" />
                          {article.question}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <div className="view-all-container">
                    <Link
                      to={`/faq/${category.id}`}
                      className="faq-view-all-link"
                    >
                      View all {category.count} articles
                    </Link>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Sidebar
            faqData={faqData}
            sidebarCategories={sidebarCategories}
            openSidebarId={openSidebarId}
            toggleSidebar={toggleSidebar}
          />
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

export default FAQ;
