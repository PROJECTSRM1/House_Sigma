// src/pages/AgentProfile.tsx
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import agents from "@/data/agents";
import styles from "./AgentProfile.module.css";
import emptyProfile from "@/assets/empty_profile.webp";

const EMPTY_PROFILE = "src/assets/empty_profile.webp";

export default function AgentProfile() {
  const { agentId } = useParams();
  const navigate = useNavigate();

  const agent = agents.find((a) => a.id === Number(agentId));

  if (!agent) {
    return (
      <>
        <Navbar />
        <main className={styles.page}>
          <h2>Agent not found</h2>
          <button onClick={() => navigate("/agents")} className={styles.backBtn}>
            Back to Agents
          </button>
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
  >
    Agents
  </span>
  <span className={styles.breadcrumbSeparator}> / </span>
  <span className={styles.breadcrumbCurrent}>
    {agent.name} Profile
  </span>
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
  <span className={styles.languagesLabel}>Languages spoken</span>
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
              <h2 className={styles.sectionTitle}>Agent Details</h2>

              <div className={styles.statsGrid}>
                <StatCard value={`${experienceYears} Years`} label="Experience" />
                <StatCard value={activeListings} label="Active Listings" />
                <StatCard value={totalSales} label="Total Sales Completed" />
                <StatCard value={`⭐ ${rating}`} label="Customer Rating" />
              </div>
            </section>


            {/* ---- Customer Feedback ---- */}
<section className={styles.section}>
  <h2 className={styles.sectionTitle}>Customer Feedback</h2>

  <div className={styles.feedbackList}>
    <div className={styles.feedbackCard}>
      <p className={styles.feedbackText}>
        “Very knowledgeable and responsive. Helped us understand the market and
        guided us confidently through the entire process.”
      </p>
      <span className={styles.feedbackAuthor}>
        — Verified Client
      </span>
    </div>

    <div className={styles.feedbackCard}>
      <p className={styles.feedbackText}>
        “Professional, transparent, and always available. Made buying our home
        a smooth and stress-free experience.”
      </p>
      <span className={styles.feedbackAuthor}>
        — Home Buyer
      </span>
    </div>
  </div>
</section>









            {/* ---- About Agent ---- */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>About </h2>
              <p className={styles.aboutText}>
  {agent.name} is a licensed real estate professional serving clients across{" "}
  {agent.area} and surrounding areas. With over {experienceYears} years of
  experience, {agent.name} specializes in residential property transactions,
  offering strategic pricing insights, market analysis, and client-first
  guidance.
  <br />
  <br />
  Known for professionalism and transparency, {agent.name} works closely with
  buyers and sellers to ensure confident, well-informed decisions at every
  stage of the process.
</p>

            </section>

            {/* ---- Team Performance ---- */}
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Team Performance Overview</h2>

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
              <h3>Contact Agent</h3>

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

              <button className={styles.contactBtn}>
                Contact {agent.name}
              </button>
            </div>
          </aside>
        </section>

        <button className={styles.backBtn} onClick={() => navigate("/agents")}>
          ← Back to Agents
        </button>
      </main>
         {/* ===== Legal Disclaimer ===== */}
<div className={styles.disclaimer}>
  The information provided herein must only be used by consumers that have a
  bona fide interest in the purchase, sale, or lease of real estate and may not
  be used for any commercial purpose or any other purpose.
</div>



      <Footer />
    </>
  );
}

/* ---------------- SMALL COMPONENT ---------------- */
function StatCard({ value, label }: { value: string | number; label: string }) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}
