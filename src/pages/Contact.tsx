import { useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChatButton from "../components/floatingWindowChatBot";
import ChatBot from "../components/chatbot";
import styles from "./Contact.module.css";

export default function Contact() {
  const { t } = useTranslation();


  const [searchQuery, setSearchQuery] = useState("");
  const [openChat, setOpenChat] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.open("https://housesigma.com/blog-en/faq", "_blank");
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles.pageWrapper}>
        <div className={styles.container}>
          {/* HERO SECTION */}
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>{t("contact_us")}</h1>
            <div className={styles.heroUnderline} />
            <p className={styles.heroSubtitle}>{t("how_can_we_help_you_today")}</p>
          </div>

          {/* SEARCH BAR */}
          <div className={styles.searchCard}>
            <div className={styles.searchWrapper}>
              <div className={styles.searchIcon}>{t("")}</div>
              <input
                type="text"
                placeholder="Search Knowledge Base..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className={styles.searchInput}
              />
              <button onClick={handleSearch} className={styles.searchButton}>{t("search")}</button>
            </div>
          </div>

          {/* INFO CARD */}
          <div className={styles.infoCard}>
            <p className={styles.infoText}>{t("before_submitting_a_customer_service_request_please_check_our")}{" "}
              <a
                href="https://housesigma.com/blog-en/faq"
                target="_blank"
                className={styles.link}
              >{t("knowledge_base")}</a>{" "}{t("section_90_of_the_inquiries_we_received_have_an_answer")}</p>
          </div>

          {/* QUICK HELP CHIPS */}
          <div className={styles.quickHelpSection}>
            <h3 className={styles.quickHelpTitle}>{t("quick_help_topics")}</h3>
            <div className={styles.chipGrid}>
              <button className={styles.chip}>{t("payment")}</button>
              <button className={styles.chip}>{t("booking_a_viewing")}</button>
              <button className={styles.chip}>{t("pricing")}</button>
              <button className={styles.chip}>{t("listing_issues")}</button>
              <button className={styles.chip}>{t("how_to_use_platform")}</button>
            </div>
          </div>

          {/* CONTACT OPTIONS */}
          <div className={styles.contactOptionsGrid}>
            {/* CALL US */}
            <div className={styles.contactOptionCard}>
              <div className={styles.iconCircle}>{t("")}</div>
              <h3 className={styles.cardTitle}>{t("call_us")}</h3>
              <p className={styles.cardText}>{t("speak_with_our_support_team")}</p>
              <button className={styles.primaryButton}>{t("get_phone_number")}</button>
            </div>

            {/* EMAIL SUPPORT */}
            <div className={styles.contactOptionCard}>
              <div className={styles.iconCircle}>{t("")}</div>
              <h3 className={styles.cardTitle}>{t("email_support")}</h3>
              <p className={styles.cardText}>{t("send_us_your_questions")}</p>
              <button className={styles.primaryButton}>{t("send_email")}</button>
            </div>

            {/* LIVE CHAT */}
            <div className={styles.contactOptionCard}>
              <div className={styles.iconCircle}>{t("")}</div>
              <h3 className={styles.cardTitle}>{t("live_chat")}</h3>
              <p className={styles.cardText}>{t("chat_with_us_in_real_time")}</p>
              <button className={styles.primaryButton}>{t("start_chat")}</button>
            </div>
          </div>

          {/* MAIN SECTIONS */}
          <div className={styles.sectionsGrid}>
            {/* REAL ESTATE AGENT */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{t("")}</div>
                <h2 className={styles.cardHeading}>{t("buy_sell_lease_property")}</h2>
              </div>
              <p className={styles.cardDescription}>{t(
                "to_inquire_about_buying_selling_or_leasing_a_property_or_to_book_a_viewing"
              )}</p>
              <a
                href="https://housesigma.com/web/en/market"
                target="_blank"
                className={styles.outlineButton}
              >{t("contact_homenest_agent")}</a>
            </div>

            {/* TECHNICAL SUPPORT */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{t("")}</div>
                <h2 className={styles.cardHeading}>{t("technical_support")}</h2>
              </div>
              <p className={styles.cardDescription}>{t("need_help_with_technical_issues_or_platform_features")}</p>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>{t("support_portal")}</span>
                <a
                  href="https://housesigma.com/blog-en/faq/other/contact-technical-support/"
                  target="_blank"
                  className={styles.contactLink}
                >{t("open_support_ticket")}</a>
              </div>
            </div>

            {/* COMPLAINTS */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{t("")}</div>
                <h2 className={styles.cardHeading}>{t("brokerage_complaints")}</h2>
              </div>
              <p className={styles.cardDescription}>{t("have_concerns_about_brokerage_services")}</p>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>{t("complaints_portal")}</span>
                <a
                  href="https://housesigma.com/blog-en/faq/other/complain-about-brokerage-services/"
                  target="_blank"
                  className={styles.contactLink}
                >{t("file_a_complaint")}</a>
              </div>
            </div>

            {/* DEAL & CONVEYANCING */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{t("")}</div>
                <h2 className={styles.cardHeading}>{t("deal_conveyancing")}</h2>
              </div>
              <p className={styles.cardDescription}>{t("for_deal_and_conveyancing_related_matters")}</p>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>{t("email")}</span>
                <a
                  href="mailto:deals@housesigma.com"
                  className={styles.emailButton}
                >{t("deals_homenest_com")}</a>
              </div>
            </div>

            {/* MEDIA INQUIRIES */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>{t("")}</div>
                <h2 className={styles.cardHeading}>{t("media_inquiries")}</h2>
              </div>
              <p className={styles.cardDescription}>{t("press_and_media_related_questions")}</p>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>{t("email")}</span>
                <a
                  href="mailto:press@housesigma.com"
                  className={styles.emailButton}
                >{t("press_homenest_com")}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {openChat && <ChatBot onClose={() => setOpenChat(false)} />}
      <FloatingChatButton onOpen={() => setOpenChat(true)} />
    </>
  );
}