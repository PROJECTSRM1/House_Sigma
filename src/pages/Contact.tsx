import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChatButton from "../components/floatingWindowChatBot";
import ChatBot from "../components/chatbot";
import styles from "./Contact.module.css";

export default function Contact() {
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
            <h1 className={styles.heroTitle}>Contact Us</h1>
            <div className={styles.heroUnderline} />
            <p className={styles.heroSubtitle}>How can we help you today?</p>
          </div>

          {/* SEARCH BAR */}
          <div className={styles.searchCard}>
            <div className={styles.searchWrapper}>
              <div className={styles.searchIcon}>🔍</div>
              <input
                type="text"
                placeholder="Search Knowledge Base..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className={styles.searchInput}
              />
              <button onClick={handleSearch} className={styles.searchButton}>
                Search
              </button>
            </div>
          </div>

          {/* INFO CARD */}
          <div className={styles.infoCard}>
            <p className={styles.infoText}>
              Before submitting a customer service request, please check our{" "}
              <a
                href="https://housesigma.com/blog-en/faq"
                target="_blank"
                className={styles.link}
              >
                Knowledge Base
              </a>{" "}
              section. 90% of the inquiries we received have an answer.
            </p>
          </div>

          {/* QUICK HELP CHIPS */}
          <div className={styles.quickHelpSection}>
            <h3 className={styles.quickHelpTitle}>Quick Help Topics</h3>
            <div className={styles.chipGrid}>
              <button className={styles.chip}>💳 Payment</button>
              <button className={styles.chip}>👁️ Booking a Viewing</button>
              <button className={styles.chip}>💰 Pricing</button>
              <button className={styles.chip}>🏠 Listing Issues</button>
              <button className={styles.chip}>❓ How to Use Platform</button>
            </div>
          </div>

          {/* CONTACT OPTIONS */}
          <div className={styles.contactOptionsGrid}>
            {/* CALL US */}
            <div className={styles.contactOptionCard}>
              <div className={styles.iconCircle}>☎️</div>
              <h3 className={styles.cardTitle}>Call Us</h3>
              <p className={styles.cardText}>Speak with our support team</p>
              <button className={styles.primaryButton}>Get Phone Number</button>
            </div>

            {/* EMAIL SUPPORT */}
            <div className={styles.contactOptionCard}>
              <div className={styles.iconCircle}>✉️</div>
              <h3 className={styles.cardTitle}>Email Support</h3>
              <p className={styles.cardText}>Send us your questions</p>
              <button className={styles.primaryButton}>Send Email</button>
            </div>

            {/* LIVE CHAT */}
            <div className={styles.contactOptionCard}>
              <div className={styles.iconCircle}>💬</div>
              <h3 className={styles.cardTitle}>Live Chat</h3>
              <p className={styles.cardText}>Chat with us in real-time</p>
              <button className={styles.primaryButton}>Start Chat</button>
            </div>
          </div>

          {/* MAIN SECTIONS */}
          <div className={styles.sectionsGrid}>
            {/* REAL ESTATE AGENT */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🏡</div>
                <h2 className={styles.cardHeading}>Buy / Sell / Lease Property</h2>
              </div>
              <p className={styles.cardDescription}>
                To inquire about buying, selling, or leasing a property, or to book a viewing:
              </p>
              <a
                href="https://housesigma.com/web/en/market"
                target="_blank"
                className={styles.outlineButton}
              >
                Contact HomeNest Agent →
              </a>
            </div>

            {/* TECHNICAL SUPPORT */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🛠️</div>
                <h2 className={styles.cardHeading}>Technical Support</h2>
              </div>
              <p className={styles.cardDescription}>
                Need help with technical issues or platform features?
              </p>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Support Portal:</span>
                <a
                  href="https://housesigma.com/blog-en/faq/other/contact-technical-support/"
                  target="_blank"
                  className={styles.contactLink}
                >
                  Open Support Ticket
                </a>
              </div>
            </div>

            {/* COMPLAINTS */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>📄</div>
                <h2 className={styles.cardHeading}>Brokerage Complaints</h2>
              </div>
              <p className={styles.cardDescription}>
                Have concerns about brokerage services?
              </p>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Complaints Portal:</span>
                <a
                  href="https://housesigma.com/blog-en/faq/other/complain-about-brokerage-services/"
                  target="_blank"
                  className={styles.contactLink}
                >
                  File a Complaint
                </a>
              </div>
            </div>

            {/* DEAL & CONVEYANCING */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🏦</div>
                <h2 className={styles.cardHeading}>Deal & Conveyancing</h2>
              </div>
              <p className={styles.cardDescription}>
                For deal and conveyancing related matters:
              </p>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <a
                  href="mailto:deals@housesigma.com"
                  className={styles.emailButton}
                >
                  📩 deals@homenest.com
                </a>
              </div>
            </div>

            {/* MEDIA INQUIRIES */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>📣</div>
                <h2 className={styles.cardHeading}>Media Inquiries</h2>
              </div>
              <p className={styles.cardDescription}>
                Press and media related questions:
              </p>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <a
                  href="mailto:press@housesigma.com"
                  className={styles.emailButton}
                >
                  📩 press@homenest.com
                </a>
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