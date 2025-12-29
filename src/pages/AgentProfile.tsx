// src/pages/AgentProfile.tsx
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import agents from "@/data/agents";
import styles from "./AgentProfile.module.css";
import emptyProfile from "@/assets/empty_profile.webp";

const EMPTY_PROFILE = "src/assets/empty_profile.webp";

export default function AgentProfile() {
 const { t } = useTranslation();


  const { agentId } = useParams();
  const navigate = useNavigate();

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

  // ---- Derived business metrics (safe demo values) ----
  const experienceYears = 3 + (agent.id % 7);
  const activeListings = 5 + (agent.id % 10);
  const totalSales = 30 + agent.id;
  const rating = (4 + (agent.id % 10) / 10).toFixed(1);

  const agentsInProvince = agents.filter(
    (a) => a.province === agent.province
  ).length;

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        {/* ================= HEADER ================= */}

        {/* ================= BREADCRUMB ================= */}
<nav className={styles.breadcrumb}>
  <span
    className={styles.breadcrumbLink}
    onClick={() => navigate("/agents")}
  >{t("agents")}</span>
  <span className={styles.breadcrumbSeparator}> / </span>
  <span className={styles.breadcrumbCurrent}>
    {agent.name}{t("profile")}</span>
</nav>

        <section className={styles.header}>
          <img
  src={emptyProfile}
  alt={agent.name}
  className={styles.avatar}
/>


          <div className={styles.headerInfo}>
            <h1 className={styles.name}>{agent.name}</h1>
            <p className={styles.role}>{agent.role}</p>
            <p className={styles.meta}>
              {agent.area}, {agent.province}
            </p>
<p className={styles.languages}>
  <span className={styles.languagesLabel}>{t("languages_spoken")}</span>
  <span className={styles.languagesValue}>
    {agent.languages.join(", ")}
  </span>
</p>

          </div>
        </section>

        {/* ================= MAIN GRID ================= */}
        <section className={styles.grid}>
          {/* ===== LEFT CONTENT ===== */}
          <div className={styles.left}>
            {/* ---- Agent Details ---- */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t("agent_details")}</h2>

              <div className={styles.statsGrid}>
                <StatCard value={`${experienceYears} Years`} label="Experience" />
                <StatCard value={activeListings} label="Active Listings" />
                <StatCard value={totalSales} label="Total Sales Completed" />
                <StatCard value={`⭐ ${rating}`} label="Customer Rating" />
              </div>
            </section>


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









            {/* ---- About Agent ---- */}
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

            {/* ---- Team Performance ---- */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{t("team_performance_overview")}</h2>

              <div className={styles.statsGrid}>
                <StatCard
                  value={agentsInProvince}
                  label="Agents in Province"
                />
                <StatCard
                  value={agents.length * 8}
                  label="Total Properties Listed"
                />
                <StatCard
                  value={agents.length * 6}
                  label="Total Properties Sold"
                />
              </div>
            </section>
          </div>

          {/* ===== RIGHT SIDEBAR ===== */}
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

        <button className={styles.backBtn} onClick={() => navigate("/agents")}>{t("back_to_agents")}</button>
      </main>
      {/* ===== Legal Disclaimer ===== */}
      <div className={styles.disclaimer}>{t(
        "the_information_provided_herein_must_only_be_used_by_consumers_that_have_a_bona_fide_interest_in_the_purchase_sale_or_lease_of_real_estate_and_may_not_be_used_for_any_commercial_purpose_or_any_other_purpose"
      )}</div>
      <Footer />
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
