import { useState } from "react";

import { useTranslation } from "react-i18next";

import ScamNav from "@/pages/ScamNav";

import styles from "./Contact.module.css";

export default function ContactUs() {
  const { t } = useTranslation();


  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.open("https://housesigma.com/blog-en/faq", "_blank");
    }
  };

  const [openChat, setOpenChat] = useState(false);

  return (
    <>
      <ScamNav />
      <div className={`min-h-screen bg-white pt-4 ${styles.contactPage}`}>
        <div className="w-full flex justify-center">
          <div className="w-[92%] max-w-[850px] px-4 md:px-6 py-6">

            {/* PAGE TITLE (Responsive) */}
            <h1 className="text-[30px] md:text-[40px] font-bold text-[#111133] mt-4 mb-2 text-center md:text-left">{t("contact_us")}</h1>

            {/* UNDERLINE */}
            <div className="w-[90px] h-[3px] bg-[#111133] mx-auto  mt-2 mb-6" />

            {/* HEADER TEXT */}
            <h2 className="text-[20px] md:text-[28px] font-semibold text-[#111133] mb-3 leading-[1.4] text-center md:text-left">{t("enter_your_question_here_to_search_our_knowledge_base")}</h2>

            {/* SEARCH BAR (Responsive) */}
            <div className="flex w-full mb-4 border border-[#cccccc] rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search Knowledge Base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className={`
                  flex-1 px-4 py-2 text-[16px] md:text-[20px] bg-white text-[#333]
                  placeholder:text-[14px] md:placeholder:text-[18px]
                  outline-none
                  ${styles.noBorder}
                `}
              />

              <button
                onClick={handleSearch}
                className={`
                  px-4 md:px-6 text-[16px] md:text-[20px] font-semibold bg-white text-[#222]
                  hover:bg-[#f0f0f0] transition whitespace-nowrap
                  ${styles.noBorder}
                `}
              >{t("search")}</button>
            </div>

            {/* INFO TEXT */}
            <p className="text-[15px] md:text-[17px] text-[#111133] leading-[1.6] mb-5">{t("before_submitting_a_customer_service_request_please_check_our")}{" "}
              <a
                href="https://housesigma.com/blog-en/faq"
                target="_blank"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >{t("knowledge_base_link")}</a>{" "}{t("section_90_of_the_inquiries_we_received_has_an_answer")}</p>

            <div className="w-[90px] h-[3px] bg-[#111133] mx-auto  mt-2 mb-6" />

            {/* BUY / SELL / LEASE SECTION */}
            <p className="text-[15px] md:text-[17px] text-[#111133] leading-[1.6] mb-1">{t("to_inquire_about_buy_sell_lease_a_property_or_book_a_viewing_please_use")}{" "}
              <a
                href="https://housesigma.com/web/en/market"
                target="_blank"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >{t("contact_homenest_agent")}</a>
            </p>

            <p className="text-[15px] md:text-[17px] text-[#111133] leading-[1.6] mb-4">{t("form_on_listing_market_page")}{" "}
              <a
                href="https://housesigma.com/web/en/market"
                target="_blank"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >{t("https_homenest_com_web_en_market")}</a>
            </p>

            <div className="w-[90px] h-[3px] bg-[#111133] mx-auto  mt-2 mb-6" />

            {/* TECHNICAL SUPPORT */}
            <p className="font-bold text-[15px] md:text-[17px] text-[#111133] mb-1">{t("contact_technical_support")}</p>

            <a
              href="https://housesigma.com/blog-en/faq/other/contact-technical-support/"
              target="_blank"
              className="text-[#4477aa] underline hover:text-[#111133] text-[14px] md:text-[15px]"
            >{t("https_homenest_com_blog_en_faq_other_contact_technical_support")}</a>

            <div className="my-4" />

            {/* COMPLAINTS */}
            <p className="font-bold text-[15px] md:text-[17px] text-[#111133] mb-1">{t("complain_about_brokerage_services")}</p>
            <a
              href="https://housesigma.com/blog-en/faq/other/complain-about-brokerage-services/"
              target="_blank"
              className="text-[#4477aa] underline hover:text-[#111133] text-[14px] md:text-[15px]"
            >{t("https_homenest_com_blog_en_faq_other_complain_about_brokerage_services")}</a>

            <div className="my-4" />

            {/* DEAL MATTERS */}
            <p className="font-bold text-[15px] md:text-[17px] text-[#111133] mb-1">{t("for_deal_and_conveyancing_related_matters")}</p>

            <p className="text-[15px] md:text-[17px] text-[#111133] leading-[1.6]">{t("please_contact")}{" "}
              <a
                href="mailto:deals@housesigma.com"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >{t("deals_homenest_com")}</a>
            </p>

            <div className="my-4" />

            {/* MEDIA */}
            <p className="font-bold text-[15px] md:text-[17px] text-[#111133] mb-1">{t("for_media_inquiries")}</p>

            <p className="text-[15px] md:text-[17px] text-[#111133] leading-[1.6]">{t("please_contact")}{" "}
              <a
                href="mailto:press@housesigma.com"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >{t("press_homenest_com")}</a>
            </p>

            <div className="w-[90px] h-[3px] bg-[#111133] mx-auto  mt-2 mb-6" />
            {/* BUY/SELL/LEASE again */}
            <p className="text-[15px] md:text-[17px] text-[#111133] leading-[1.6] mb-1">{t("to_inquire_about_buy_sell_lease_a_property_or_book_a_viewing_please_use")}{" "}
              <a
                href="https://housesigma.com/web/en/market"
                target="_blank"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >{t("contact_homenest_agent")}</a>
            </p>

            <p className="text-[15px] md:text-[17px] text-[#111133] leading-[1.6] mb-10">{t("form_on_listing_market_page")}{" "}
              <a
                href="https://housesigma.com/web/en/market"
                target="_blank"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >{t("https_homenest_com_web_en_market")}</a>
            </p>

          </div>
        </div>
      </div>
      {/* Footer */}
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
}
