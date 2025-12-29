import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import agents from "@/data/agents";
import styles from "./AgentProfile.module.css";
import emptyProfile from "/assets/empty_profile.webp";
import FloatingChatButton from "../components/floatingWindowChatBot";
import ChatBot from "../components/chatbot";


export default function AgentProfile() {
 const { t } = useTranslation();
 const [openChat, setOpenChat] = useState(false);


  const { agentId } = useParams();
  const navigate = useNavigate();

  const [showAllFeedback, setShowAllFeedback] = useState(false);

  const agent = agents.find((a) => a.id === Number(agentId));

  if (!agent) {
    return (
      <>
        <Navbar />
        <main className={styles.page}>
          <h2>{t("agent_not_found")}</h2>
          <button onClick={() => navigate("/agents")} className={styles.backBtn}>{t("back_to_agents")}</button>
        </main>
        <Footer />
      </>
    );
  }

  const experienceYears = 3 + (agent.id % 7);
  const activeListings = 5 + (agent.id % 10);
  const totalSales = 30 + agent.id;
  const rating = (4 + (agent.id % 10) / 10).toFixed(1);

  const agentsInProvince = agents.filter(
    (a) => a.province === agent.province
  ).length;

  const feedbacks = [
    {
      text:
        "Very knowledgeable and responsive. Helped us understand the market and guided us confidently through the entire process.",
      author: "Verified Client",
    },
    {
      text:
        "Professional, transparent, and always available. Made buying our home a smooth and stress-free experience.",
      author: "Home Buyer",
    },
    {
      text:
        "Excellent communication and strong negotiation skills. Highly recommended.",
      author: "Property Seller",
    },
    {
      text:
        "Handled everything professionally and kept us informed at every step.",
      author: "First-time Buyer",
    },
  ];

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        {/* ================= BREADCRUMB ================= */}
        <nav className={styles.breadcrumb}>
          <span
            className={styles.breadcrumbLink}
            onClick={() => navigate("/agents")}
          >
            {t("agents")}
          </span>
          <span className={styles.breadcrumbSeparator}> / </span>
          <span className={styles.breadcrumbCurrent}>
            {agent.name} {t("profile")}
          </span>
        </nav>

        {/* ================= HEADER ================= */}
        <section className={styles.header}>
          <img
            src={emptyProfile}
            alt={agent.name}
            className={styles.avatar}
          />

          <div className={styles.headerInfo}>
            <h1 className={styles.name}>{agent.name}</h1>

            {/* ✅ CLEAN, ALIGNED META GRID */}
            <div className={styles.headerMeta}>
              <p className={styles.meta}>
                <strong>Agent ID:</strong> AG-{agent.id.toString().padStart(3, "0")}
              </p>

              <p className={styles.meta}>
                <strong>Role:</strong> {agent.role}
              </p>

              <p className={styles.meta}>
                <strong>Specialization:</strong> Residential Properties
              </p>

              <p className={styles.meta}>
                <strong>Location:</strong> {agent.area}, {agent.province}
              </p>
            </div>

            <div className={styles.languages}>
              <span className={styles.languagesLabel}>Languages spoken</span>
              <span className={styles.languagesValue}>
                {agent.languages.join(", ")}
              </span>
            </div>
          </div>
        </section>

        <section className={styles.grid}>
          {/* ===== LEFT ===== */}
          <div className={styles.left}>
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t("agent_details")}</h2>

              <div className={styles.statsGrid}>
                <StatCard value={`${experienceYears} Years`} label="Experience" />
                <StatCard value={activeListings} label="Active Listings" />
                <StatCard value={totalSales} label="Total Sales Completed" />
                <StatCard value={`⭐ ${rating}`} label="Customer Rating" />
              </div>
            </section>

            <section className={styles.section}>

            {/* ---- Customer Feedback ---- */}
<section className={styles.section}>
  <h2 className={styles.sectionTitle}>{t("customer_feedback")}</h2>

  <div className={styles.feedbackList}>
    <div className={styles.feedbackCard}>
      <p className={styles.feedbackText}>{t(
        "very_knowledgeable_and_responsive_helped_us_understand_the_market_and_guided_us_confidently_through_the_entire_process"
      )}</p>
      <span className={styles.feedbackAuthor}>{t("verified_client")}</span>
    </div>

    <div className={styles.feedbackCard}>
      <p className={styles.feedbackText}>{t(
        "professional_transparent_and_always_available_made_buying_our_home_a_smooth_and_stress_free_experience"
      )}</p>
      <span className={styles.feedbackAuthor}>{t("home_buyer")}</span>
    </div>
  </div>
</section>
              {feedbacks.length > 2 && (
                <button
                  className={styles.showMoreBtn}
                  onClick={() =>
                    setShowAllFeedback((prev) => !prev)
                  }
                >
                  {showAllFeedback ? "Show Less" : "Show More"}
                </button>
              )}
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t("about")}</h2>
              <p className={styles.aboutText}>
  {agent.name}{t("is_a_licensed_real_estate_professional_serving_clients_across")}{" "}
  {agent.area}{t("and_surrounding_areas_with_over")}{experienceYears}{t("years_of_experience")}{agent.name}{t(
                "specializes_in_residential_property_transactions_offering_strategic_pricing_insights_market_analysis_and_client_first_guidance"
              )}<br />
  <br />{t("known_for_professionalism_and_transparency")}{agent.name}{t(
                "works_closely_with_buyers_and_sellers_to_ensure_confident_well_informed_decisions_at_every_stage_of_the_process"
              )}</p>

            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t("team_performance_overview")}</h2>

              <div className={styles.statsGrid}>
                <StatCard value={agentsInProvince} label="Agents in Province" />
                <StatCard value={agents.length * 8} label="Total Properties Listed" />
                <StatCard value={agents.length * 6} label="Total Properties Sold" />
              </div>
            </section>
          </div>

          {/* ===== RIGHT ===== */}
          <aside className={styles.right}>
            <div className={styles.contactCard}>
              <h3>{t("contact_agent")}</h3>

              <input
                type="text"
                placeholder="Your Name"
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={styles.input}
              />
              <textarea
                placeholder="I’m interested in buying/selling a property..."
                rows={4}
                className={styles.textarea}
              />

              <button className={styles.contactBtn}>{t("contact")}{agent.name}
              </button>
            </div>
          </aside>
        </section>

        <button
          className={styles.backBtn}
          onClick={() => navigate("/agents")}
        >
          ← Back to Agents
        </button>
      </main>

      <div className={styles.disclaimer}>{t(
        "the_information_provided_herein_must_only_be_used_by_consumers_that_have_a_bona_fide_interest_in_the_purchase_sale_or_lease_of_real_estate_and_may_not_be_used_for_any_commercial_purpose_or_any_other_purpose"
      )}</div>

      <Footer />
      {openChat && <ChatBot onClose={() => setOpenChat(false)} />}
      <FloatingChatButton onOpen={() => setOpenChat(true)} />
    </>
  );
}

/* ---------------- SMALL COMPONENT ---------------- */
function StatCard({ value, label }: { value: string | number; label: string }) {
  const {
    t: t
  } = useTranslation();

  return (
    <div className={styles.statCard}>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}
