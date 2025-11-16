import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

      <div className="min-h-screen bg-white pt-4">
        <div className="w-full flex justify-center">
          <div className="w-[90%] max-w-[800px] px-6 py-10 font-[Roboto] text-[#222]">

            {/* TITLE */}
            <h1 className="text-[38px] font-bold text-[#111133] text-left mb-2">
              Contact Us
            </h1>

            {/* UNDERLINE CENTERED */}
            <div className="w-[70px] h-[2px] bg-[#111133] mx-auto mb-8"></div>

            {/* HEADER TEXT */}
            <h2 className="text-[24px] font-semibold text-[#111133] mb-4 leading-[1.4]">
              Enter your question here to search our knowledge base:
            </h2>

            {/* ⭐ SEARCH BAR (EXACT HOUSESIGMA STYLE) ⭐ */}
          {/* FULL SEARCH WRAPPER WITH SINGLE BORDER */}
<div className="flex w-full mb-5 border border-[#cccccc]">

  {/* INPUT FIELD - NO BORDER */}
  <input
    type="text"
    placeholder="Search Knowledge Base"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
    className="
      flex-1 px-4 py-3 text-[18px]
      outline-none
      font-[Roboto]
      bg-white
      text-[#333]
      border-none
    "
    style={{ border: "none", outline: "none" }}
  />

  {/* SEARCH BUTTON - NO BORDER */}
  <button
    onClick={handleSearch}
    className="
      px-8
      text-[18px]
      font-semibold
      bg-white
      text-[#222]
      hover:bg-[#f0f0f0]
      transition
      border-none
    "
    style={{ border: "none", outline: "none" }}
  >
    SEARCH
  </button>

</div>


            {/* KNOWLEDGE BASE TEXT */}
            <p className="text-[18px] leading-[1.7] mb-8 text-[#111133]">
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

            {/* DIVIDER */}
            <div className="w-[70px] h-[2px] bg-[#111133] mx-auto my-6"></div>

            {/* PROPERTY INQUIRIES */}
            <p className="text-[18px] leading-[1.7] mb-1 text-[#111133]">
              To inquire about Buy/Sell/Lease a property or book a viewing, please use{" "}
              <a
                href="https://housesigma.com/web/en/market"
                className="text-[#4477aa] underline hover:text-[#111133]"
                target="_blank"
              >
                Contact HouseSigma Agent
              </a>
            </p>

            <p className="text-[18px] leading-[1.7] mb-6 text-[#111133]">
              form on listing/market page.{" "}
              <a
                href="https://housesigma.com/web/en/market"
                className="text-[#4477aa] underline hover:text-[#111133]"
                target="_blank"
              >
                https://housesigma.com/web/en/market
              </a>
            </p>

            {/* DIVIDER */}
            <div className="w-[70px] h-[2px] bg-[#111133] mx-auto my-6"></div>

            {/* TECH SUPPORT */}
            <p className="font-bold text-[18px] mb-1 text-[#111133]">
              Contact technical support:
            </p>

            <a
              href="https://housesigma.com/blog-en/faq/other/contact-technical-support/"
              target="_blank"
              className="text-[#4477aa] underline hover:text-[#111133] text-[18px]"
            >
              https://housesigma.com/blog-en/faq/other/contact-technical-support/
            </a>

            <div className="my-6"></div>

            {/* BROKERAGE COMPLAINT */}
            <p className="font-bold text-[18px] mb-1 text-[#111133]">
              Complain about brokerage services:
            </p>

            <a
              href="https://housesigma.com/blog-en/faq/other/complain-about-brokerage-services/"
              target="_blank"
              className="text-[#4477aa] underline hover:text-[#111133] text-[18px]"
            >
              https://housesigma.com/blog-en/faq/other/complain-about-brokerage-services/
            </a>

            <div className="my-6"></div>

            {/* CONVEYANCING */}
            <p className="font-bold text-[18px] mb-1 text-[#111133]">
              For deal and conveyancing related matters:
            </p>

            <p className="text-[18px] leading-[1.7] text-[#111133]">
              Please contact{" "}
              <a
                href="mailto:deals@housesigma.com"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >
                deals@housesigma.com
              </a>
            </p>

            <div className="my-6"></div>

            {/* MEDIA */}
            <p className="font-bold text-[18px] mb-1 text-[#111133]">
              For media inquiries:
            </p>

            <p className="text-[18px] leading-[1.7] text-[#111133]">
              Please contact{" "}
              <a
                href="mailto:press@housesigma.com"
                className="text-[#4477aa] underline hover:text-[#111133]"
              >
                press@housesigma.com
              </a>
            </p>

            <div className="my-6"></div>

            {/* DIVIDER */}
            <div className="w-[70px] h-[2px] bg-[#111133] mx-auto my-6"></div>

            {/* REPEAT INQUIRY TEXT (LEFT ALIGNED) */}
            <p className="text-[18px] leading-[1.7] mb-1 text-left text-[#111133]">
              To inquire about Buy/Sell/Lease a property or book a viewing, please use{" "}
              <a
                href="https://housesigma.com/web/en/market"
                className="text-[#4477aa] underline hover:text-[#111133]"
                target="_blank"
              >
                Contact HouseSigma Agent
              </a>
            </p>

            <p className="text-[18px] leading-[1.7] text-left text-[#111133] mb-16">
              form on listing/market page.{" "}
              <a
                href="https://housesigma.com/web/en/market"
                className="text-[#4477aa] underline hover:text-[#111133]"
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
