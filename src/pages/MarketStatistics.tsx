import {
  Building2,
  TrendingUp,
  Percent,
  Activity,
  MapPin,
  Users,
  GraduationCap,
  Cross,
  ShoppingBag,
  Bus,
  School,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./market-statistics.css";

const StatCard = ({ icon, title, value, change, positive }: any) => (
  <div className="stat-card">
    <div className="stat-card-top">
      <div className="stat-icon">{icon}</div>
      <span className={`stat-badge ${positive ? "up" : "down"}`}>
        {positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change}
      </span>
    </div>
    <p className="stat-title">{title}</p>
    <h3 className="stat-value">{value}</h3>
  </div>
);

const CommunityCard = ({ name, listings, price, change, demand }: any) => {
   const { t } = useTranslation();
  const isPositive = change.startsWith("+");
  return (
    <div className="community-card">
      <div className="community-header">
        <h3>{name}</h3>
        <ChevronRight size={20} />
      </div>
      <p className="listings">{listings}{t("active_listings")}</p>
      <p className="price-label">{t("avg_price_sqft")}</p>
      <h2 className="price">{price}</h2>
      <div className="community-footer">
        <span className={`demand ${demand.toLowerCase()}`}>{demand}{t("demand")}</span>
        <span className={`change ${isPositive ? "up" : "down"}`}>
          {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
          {change}
        </span>
      </div>
    </div>
  );
};

const DemandBar = ({ name, percentage }: any) => (
  <div className="demand-bar">
    <div className="demand-bar-header">
      <span>{name}</span>
      <span>{percentage}%</span>
    </div>
    <div className="demand-bar-track">
      <div className="demand-bar-fill" style={{ width: `${percentage}%` }} />
    </div>
  </div>
);

const ProximityCard = ({ icon, title, text }: any) => (
  <div className="proximity-card">
   <div className="proximity-icon">{icon}</div>
    <div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
    <span className="available">Available</span>
  </div>
);

export default function MarketStatistics() {
  
 const { t } = useTranslation();

  const demandData = [
    { name: "Downtown Metro", percentage: 92 },
    { name: "Westside Heights", percentage: 85 },
    { name: "Oakwood District", percentage: 78 },
    { name: "Harbor View", percentage: 64 },
    { name: "Sunrise Gardens", percentage: 52 },
    { name: "Riverdale", percentage: 38 },
  ];

  return (
    <div className="page">
      <Navbar />
      <header className="hero">
        <div className="hero-inner">
          <p className="hero-tag">{t("real_estate_analytics")}</p>
          <h1>{t("market_statistics")}</h1>
          <p className="hero-sub">{t(
            "comprehensive_insights_and_data_driven_analytics_to_help_you_make_informed_real_estate_investment_decisions"
          )}</p>
        </div>
      </header>
      <main className="container">
        <section>
          <div className="section-title">
            <div className="stat-icon">
              <BarChart3 size={20} />
            </div>
            <div>
              <h2>{t("overall_statistics")}</h2>
              <p>{t("key_performance_indicators_across_all_markets")}</p>
            </div>
          </div>

          <div className="grid-4">
            <StatCard icon={<Building2 size={20} />} title="Total Active Listings" value="12,847" change="+8.3%" positive />
            <StatCard icon={<TrendingUp size={20} />} title="Avg. Price per Sq.Ft" value="$485" change="+12.5%" positive />
            <StatCard icon={<Percent size={20} />} title="Rental Yield" value="6.8%" change="+0.4%" positive />
            <StatCard icon={<Activity size={20} />} title="Price Appreciation" value="15.2%" change="-2.1%" positive={false} />
          </div>
        </section>

        <section>
          <div className="section-title">
            <div className="stat-icon">
              <MapPin size={20} />
            </div>
            <div>
              <h2>{t("community_locality_insights")}</h2>
              <p>{t("pricing_trends_and_demand_analysis_by_neighborhood")}</p>
            </div>
          </div>

          <div className="grid-3">
            <CommunityCard name="Downtown Metro" listings="892" price="$725" change="+18.2%" demand="High" />
            <CommunityCard name="Westside Heights" listings="654" price="$542" change="+9.8%" demand="High" />
            <CommunityCard name="Harbor View" listings="423" price="$498" change="+6.3%" demand="Medium" />
            <CommunityCard name="Sunrise Gardens" listings="312" price="$385" change="-2.1%" demand="Medium" />
            <CommunityCard name="Oakwood District" listings="578" price="$465" change="+11.4%" demand="High" />
            <CommunityCard name="Riverdale" listings="189" price="$320" change="+3.2%" demand="Low" />
          </div>
        </section>

        <section>
          <div className="demand-section">
            <h2>{t("demand_analysis_by_locality")}</h2>
            {demandData.map((item) => (
              <DemandBar key={item.name} name={item.name} percentage={item.percentage} />
            ))}
          </div>
        </section>

        <section>
          <div className="section-title">
            <div className="stat-icon">
              <Users size={20} />
            </div>
            <div>
              <h2>{t("proximity_based_analysis")}</h2>
              <p>{t("nearby_facilities_for_evaluating_livability_and_long_term_value")}</p>
            </div>
          </div>

          <div className="grid-3">
            <ProximityCard icon={<School size={20} />} title="Schools" text="24 nearby · Within 2 km" />
            <ProximityCard icon={<GraduationCap size={20} />} title="Colleges & Universities" text="8 nearby · Within 5 km" />
            <ProximityCard icon={<Cross size={20} />} title="Hospitals & Clinics" text="15 nearby · Within 3 km" />
            <ProximityCard icon={<ShoppingBag size={20} />} title="Shopping Centers" text="12 nearby · Within 1.5 km" />
            <ProximityCard icon={<Bus size={20} />} title="Public Transport" text="32 nearby · Within 500 m" />
            <ProximityCard icon={<Building2 size={20} />} title="Business Districts" text="6 nearby · Within 4 km" />
          </div>
        </section>

        <section>
          <div className="livability-section">
            <div className="livability-text">
              <h2>{t("overall_livability_score")}</h2>
              <p>{t(
                "based_on_proximity_to_essential_facilities_transportation_access_and_community_amenities_higher_scores_indicate_better_quality_of_life"
              )}</p>
            </div>
            <div className="livability-score">
              <div className="score-circle">
                <svg viewBox="0 0 100 100" width="140" height="140">
                  <circle className="bg" cx="50" cy="50" r="42" />
                  <circle className="progress" cx="50" cy="50" r="42" />
                </svg>
                <span className="score-value">{t("87")}</span>
              </div>
              <div className="score-legend">
                <div className="legend-item">
                  <div className="legend-dot excellent" />
                  <span>{t("excellent_80_100")}</span>
                </div>
                <div className="legend-item">
                  <div className="legend-dot good" />
                  <span>{t("good_60_79")}</span>
                </div>
                <div className="legend-item">
                  <div className="legend-dot average" />
                  <span>{t("average_60")}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="quick">
          <h2>{t("quick_market_insights")}</h2>
          <div className="grid-4">
            <div className="quick-card">
              <p>{t("properties_sold_30_days")}</p>
              <h3>{t("1_247")}</h3>
            </div>
            <div className="quick-card">
              <p>{t("avg_days_on_market")}</p>
              <h3>{t("28")}</h3>
            </div>
            <div className="quick-card">
              <p>{t("new_listings_this_week")}</p>
              <h3>{t("342")}</h3>
            </div>
            <div className="quick-card">
              <p>{t("price_reductions")}</p>
              <h3>{t("156")}</h3>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

