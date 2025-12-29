import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import agents from "@/data/agents";
import styles from "./AgentProfile.module.css";
import emptyProfile from "@/assets/empty_profile.webp";

export default function AgentProfile() {
  const { agentId } = useParams();
  const navigate = useNavigate();

  const [showAllFeedback, setShowAllFeedback] = useState(false);

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
            Agents
          </span>
          <span className={styles.breadcrumbSeparator}> / </span>
          <span className={styles.breadcrumbCurrent}>
            {agent.name} Profile
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
              <h2 className={styles.sectionTitle}>Agent Details</h2>

              <div className={styles.statsGrid}>
                <StatCard value={`${experienceYears} Years`} label="Experience" />
                <StatCard value={activeListings} label="Active Listings" />
                <StatCard value={totalSales} label="Total Sales Completed" />
                <StatCard value={`⭐ ${rating}`} label="Customer Rating" />
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Customer Feedback</h2>

              <div className={styles.feedbackList}>
                {(showAllFeedback
                  ? feedbacks
                  : feedbacks.slice(0, 2)
                ).map((fb, index) => (
                  <div key={index} className={styles.feedbackCard}>
                    <p className={styles.feedbackText}>“{fb.text}”</p>
                    <span className={styles.feedbackAuthor}>
                      — {fb.author}
                    </span>
                  </div>
                ))}
              </div>

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
              <h2 className={styles.sectionTitle}>About</h2>
              <p className={styles.aboutText}>
                {agent.name} is a licensed real estate professional serving
                clients across {agent.area} and surrounding areas. With over{" "}
                {experienceYears} years of experience, {agent.name} specializes
                in residential property transactions, offering strategic pricing
                insights, market analysis, and client-first guidance.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Team Performance Overview
              </h2>

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

        <button
          className={styles.backBtn}
          onClick={() => navigate("/agents")}
        >
          ← Back to Agents
        </button>
      </main>

      <div className={styles.disclaimer}>
        The information provided herein must only be used by consumers that have
        a bona fide interest in the purchase, sale, or lease of real estate and
        may not be used for any commercial purpose or any other purpose.
      </div>

      <Footer />
    </>
  );
}

/* ---------------- SMALL COMPONENT ---------------- */
function StatCard({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}
