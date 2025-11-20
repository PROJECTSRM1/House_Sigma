import { useState } from "react";

import ScamNav from "@/pages/ScamNav";

import styles from "./Contact.module.css";

export default function ContactUs() {
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
            <h1 className="text-[30px] md:text-[40px] font-bold text-[#111133] mt-4 mb-2 text-center md:text-left">
              Contact Us
            </h1>

            {/* UNDERLINE */}
            <div className="w-[90px] h-[3px] bg-[#111133] mx-auto  mt-2 mb-6" />

            {/* HEADER TEXT */}
            <h2 className="text-[20px] md:text-[28px] font-semibold text-[#111133] mb-3 leading-[1.4] text-center md:text-left">
              Enter your question here to search our knowledge base:
            </h2>

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
              >
                SEARCH
              </button>
            </div>

            {/* INFO TEXT */}
            <p className="text-[15px] md:text-[17px] text-[#111133] leading-[1.6] mb-5">
              Before submitting a customer service request, please check our{" "}
              <a
                href="https://housesigma.com/blog-en/faq"
                target="_blank"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >
                Knowledge Base [link]
              </a>{" "}
              section. 90% of the inquiries we received has an answer.
            </p>

            <div className="w-[90px] h-[3px] bg-[#111133] mx-auto  mt-2 mb-6" />

            {/* BUY / SELL / LEASE SECTION */}
            <p className="text-[15px] md:text-[17px] text-[#111133] leading-[1.6] mb-1">
              To inquire about Buy/Sell/Lease a property or book a viewing, please use{" "}
              <a
                href="https://housesigma.com/web/en/market"
                target="_blank"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >
                Contact HouseSigma Agent
              </a>
            </p>

            <p className="text-[15px] md:text-[17px] text-[#111133] leading-[1.6] mb-4">
              form on listing/market page.{" "}
              <a
                href="https://housesigma.com/web/en/market"
                target="_blank"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >
                https://housesigma.com/web/en/market
              </a>
            </p>

            <div className="w-[90px] h-[3px] bg-[#111133] mx-auto  mt-2 mb-6" />

            {/* TECHNICAL SUPPORT */}
            <p className="font-bold text-[15px] md:text-[17px] text-[#111133] mb-1">
              Contact technical support:
            </p>

            <a
              href="https://housesigma.com/blog-en/faq/other/contact-technical-support/"
              target="_blank"
              className="text-[#4477aa] underline hover:text-[#111133] text-[14px] md:text-[15px]"
            >
              https://housesigma.com/blog-en/faq/other/contact-technical-support/
            </a>

            <div className="my-4" />

            {/* COMPLAINTS */}
            <p className="font-bold text-[15px] md:text-[17px] text-[#111133] mb-1">
              Complain about brokerage services:
            </p>
            <a
              href="https://housesigma.com/blog-en/faq/other/complain-about-brokerage-services/"
              target="_blank"
              className="text-[#4477aa] underline hover:text-[#111133] text-[14px] md:text-[15px]"
            >
              https://housesigma.com/blog-en/faq/other/complain-about-brokerage-services/
            </a>

            <div className="my-4" />

            {/* DEAL MATTERS */}
            <p className="font-bold text-[15px] md:text-[17px] text-[#111133] mb-1">
              For deal and conveyancing related matters:
            </p>

            <p className="text-[15px] md:text-[17px] text-[#111133] leading-[1.6]">
              Please contact{" "}
              <a
                href="mailto:deals@housesigma.com"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >
                deals@housesigma.com
              </a>
            </p>

            <div className="my-4" />

            {/* MEDIA */}
            <p className="font-bold text-[15px] md:text-[17px] text-[#111133] mb-1">
              For media inquiries:
            </p>

            <p className="text-[15px] md:text-[17px] text-[#111133] leading-[1.6]">
              Please contact{" "}
              <a
                href="mailto:press@housesigma.com"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >
                press@housesigma.com
              </a>
            </p>

            <div className="w-[90px] h-[3px] bg-[#111133] mx-auto  mt-2 mb-6" />
            {/* BUY/SELL/LEASE again */}
            <p className="text-[15px] md:text-[17px] text-[#111133] leading-[1.6] mb-1">
              To inquire about Buy/Sell/Lease a property or book a viewing, please use{" "}
              <a
                href="https://housesigma.com/web/en/market"
                target="_blank"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >
                Contact HouseSigma Agent
              </a>
            </p>

            <p className="text-[15px] md:text-[17px] text-[#111133] leading-[1.6] mb-10">
              form on listing/market page.{" "}
              <a
                href="https://housesigma.com/web/en/market"
                target="_blank"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >
                https://housesigma.com/web/en/market
              </a>
            </p>

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
}
