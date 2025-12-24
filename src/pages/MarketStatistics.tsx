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
  const isPositive = change.startsWith("+");
  return (
    <div className="community-card">
      <div className="community-header">
        <h3>{name}</h3>
        <ChevronRight size={20} />
      </div>
      <p className="listings">{listings} active listings</p>
      <p className="price-label">Avg. Price/sqft</p>
      <h2 className="price">{price}</h2>
      <div className="community-footer">
        <span className={`demand ${demand.toLowerCase()}`}>{demand} Demand</span>
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
          <p className="hero-tag">REAL ESTATE ANALYTICS</p>
          <h1>Market Statistics</h1>
          <p className="hero-sub">
            Comprehensive insights and data-driven analytics to help you make
            informed real estate investment decisions.
          </p>
        </div>
      </header>

      <main className="container">
        <section>
          <div className="section-title">
            <div className="stat-icon">
              <BarChart3 size={20} />
            </div>
            <div>
              <h2>Overall Statistics</h2>
              <p>Key performance indicators across all markets</p>
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
              <h2>Community & Locality Insights</h2>
              <p>Pricing trends and demand analysis by neighborhood</p>
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
            <h2>Demand Analysis by Locality</h2>
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
              <h2>Proximity-Based Analysis</h2>
              <p>Nearby facilities for evaluating livability and long-term value</p>
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
              <h2>Overall Livability Score</h2>
              <p>
                Based on proximity to essential facilities, transportation access, and community
                amenities. Higher scores indicate better quality of life.
              </p>
            </div>
            <div className="livability-score">
              <div className="score-circle">
                <svg viewBox="0 0 100 100" width="140" height="140">
                  <circle className="bg" cx="50" cy="50" r="42" />
                  <circle className="progress" cx="50" cy="50" r="42" />
                </svg>
                <span className="score-value">87</span>
              </div>
              <div className="score-legend">
                <div className="legend-item">
                  <div className="legend-dot excellent" />
                  <span>Excellent (80-100)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-dot good" />
                  <span>Good (60-79)</span>
                </div>
                <div className="legend-item">
                  <div className="legend-dot average" />
                  <span>Average (&lt;60)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="quick">
          <h2>Quick Market Insights</h2>
          <div className="grid-4">
            <div className="quick-card">
              <p>Properties Sold (30 days)</p>
              <h3>1,247</h3>
            </div>
            <div className="quick-card">
              <p>Avg. Days on Market</p>
              <h3>28</h3>
            </div>
            <div className="quick-card">
              <p>New Listings (This Week)</p>
              <h3>342</h3>
            </div>
            <div className="quick-card">
              <p>Price Reductions</p>
              <h3>156</h3>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

