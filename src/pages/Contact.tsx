import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import styles from "./Contact.module.css";

export default function Contact() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.open("https://housesigma.com/blog-en/faq", "_blank");
    }
  };

  return (
    <>
      <Navbar />

      <div className={`min-h-screen bg-white pt-2 ${styles.contactPage}`}>
        <div className="w-full flex justify-center">
          <div className="w-[90%] max-w-[850px] px-6 py-6">

            {/* TITLE - BIGGER */}
            <h1 className="text-[40px] font-bold text-[#111133] mb-1 mt-4">
              Contact Us
            </h1>

            {/* UNDERLINE */}
            <div className="w-[90px] h-[3px] bg-[#111133] mx-auto mt-2 mb-6"></div>

            {/* HEADER TEXT - BIGGER */}
            <h2 className="text-[28px] font-semibold text-[#111133] mb-3 leading-[1.35]">
              Enter your question here to search our knowledge base:
            </h2>

            {/* SEARCH BAR */}
            <div className="flex w-full mb-4 border border-[#cccccc]">
              <input
                type="text"
                placeholder="Search Knowledge Base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className={`
                  flex-1 px-4 py-1 text-[22px] outline-none bg-white text-[#333]
                  placeholder:text-[20px]
                  ${styles.noBorder}
                `}
              />

              {/* SEARCH BUTTON - BIGGER */}
              <button
                onClick={handleSearch}
                className={`
                  px-6 text-[22px] font-semibold bg-white text-[#222]
                  hover:bg-[#f0f0f0] transition
                  ${styles.noBorder}
                `}
              >
                SEARCH
              </button>
            </div>

            {/* SMALLER TEXT BELOW */}
            <p className="text-[17px] leading-[1.6] mb-5 text-[#111133]">
              Before submitting a customer service request, please check our{" "}
              <a
                href="https://housesigma.com/blog-en/faq"
                target="_blank"
                className="text-[#4477aa] underline hover:text-[#111133] text-[15px]"
              >
                Knowledge Base [link]
              </a>{" "}
              section. 90% of the inquiries we received has an answer.
            </p>

            <div className="w-[90px] h-[3px] bg-[#111133] mx-auto my-4"></div>

            <p className="text-[17px] leading-[1.6] mb-1 text-[#111133]">
              To inquire about Buy/Sell/Lease a property or book a viewing, please use{" "}
              <a
                href="https://housesigma.com/web/en/market"
                className="text-[#4477aa] underline hover:text-[#111133] text-[15px]"
                target="_blank"
              >
                Contact HouseSigma Agent
              </a>
            </p>

            <p className="text-[17px] leading-[1.6] mb-4 text-[#111133]">
              form on listing/market page.{" "}
              <a
                href="https://housesigma.com/web/en/market"
                className="text-[#4477aa] underline hover:text-[#111133] text-[15px]"
                target="_blank"
              >
                https://housesigma.com/web/en/market
              </a>
            </p>

            <div className="w-[90px] h-[3px] bg-[#111133] mx-auto my-4"></div>

            <p className="font-bold text-[17px] mb-1 text-[#111133]">
              Contact technical support:
            </p>

            <a
              href="https://housesigma.com/blog-en/faq/other/contact-technical-support/"
              target="_blank"
              className="text-[#4477aa] underline hover:text-[#111133] text-[15px]"
            >
              https://housesigma.com/blog-en/faq/other/contact-technical-support/
            </a>

            <div className="my-4"></div>

            <p className="font-bold text-[17px] mb-1 text-[#111133]">
              Complain about brokerage services:
            </p>

            <a
              href="https://housesigma.com/blog-en/faq/other/complain-about-brokerage-services/"
              target="_blank"
              className="text-[#4477aa] underline hover:text-[#111133] text-[15px]"
            >
              https://housesigma.com/blog-en/faq/other/complain-about-brokerage-services/
            </a>

            <div className="my-4"></div>

            <p className="font-bold text-[17px] mb-1 text-[#111133]">
              For deal and conveyancing related matters:
            </p>

            <p className="text-[17px] leading-[1.6] text-[#111133]">
              Please contact{" "}
              <a
                href="mailto:deals@housesigma.com"
                className="text-[#4477aa] underline hover:text-[#111133] text-[15px]"
              >
                deals@housesigma.com
              </a>
            </p>

            <div className="my-4"></div>

            <p className="font-bold text-[17px] mb-1 text-[#111133]">
              For media inquiries:
            </p>

            <p className="text-[17px] leading-[1.6] text-[#111133]">
              Please contact{" "}
              <a
                href="mailto:press@housesigma.com"
                className="text-[#4477aa] underline hover:text-[#111133] text-[15px]"
              >
                press@housesigma.com
              </a>
            </p>

            <div className="w-[90px] h-[3px] bg-[#111133] mx-auto my-4"></div>

            <p className="text-[17px] leading-[1.6] mb-1 text-left text-[#111133]">
              To inquire about Buy/Sell/Lease a property or book a viewing, please use{" "}
              <a
                href="https://housesigma.com/web/en/market"
                className="text-[#4477aa] underline hover:text-[#111133] text-[15px]"
                target="_blank"
              >
                Contact HouseSigma Agent
              </a>
            </p>

            <p className="text-[17px] leading-[1.6] text-left text-[#111133] mb-10">
              form on listing/market page.{" "}
              <a
                href="https://housesigma.com/web/en/market"
                className="text-[#4477aa] underline hover:text-[#111133] text-[15px]"
                target="_blank"
              >
                https://housesigma.com/web/en/market
              </a>
            </p>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
