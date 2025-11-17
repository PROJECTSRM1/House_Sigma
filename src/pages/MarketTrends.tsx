import React,{useState} from "react";

// Relative imports
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import './MarketTrends.css';

// Icons
import { TrendingDown, TrendingUp } from "lucide-react";

// Recharts
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
  PieChart,
  Pie,
  Cell,
  ReferenceLine,
} from "recharts";


// ------------------------------------------------------
// FILTER BAR
// ------------------------------------------------------

const MarketFilters = () => {
  const [Selected, setSelected] = useState(10);
  const [selectedLocation, setSelectedLocation] = useState("GTA – All");
  const [Communities, setCommunities] = useState("All communities");
  const [property, setproperty] = useState("All Property Types");

  // 🔥 Only ONE dropdown at a time
  const [openDropdown, setOpenDropdown] = useState(null);

  const locations = [
    "GTA – All",
    "GTA – Central",
    "GTA – North",
    "GTA – East",
    "GTA – West",
    "Ottawa Area",
    "Hamilton - Niagara",
    "Central Ontario",
    "Southwestern Ontario",
    "Eastern Ontario"
  ];

  const Community = [
    "Bayview Hill",
    "Beaver Creek Business Park",
    "Crosby",
    "Devonsleigh",
    "Doncrest",
    "Harding",
    "Headford Business Park",
    "Jefferson",
    "Langstaff",
    "Mill Pond",
    "North Richvale",
    "Oak Ridges",
    "Oak Ridges Lake Wilcox",
    "Observatory",
    "Rouge Woods",
    "Rural Richmond Hill",
    "South Richvale",
    "Westbrook"
  ];

  const Property = [
    "Detached",
    "Semi-Detached",
    "Freehold Townhouse",
    "Condo Townhouse",
    "Condo Apt",
    "Link"
  ];

  return (
    <div className="market-filter-wrapper">
      <div className="market-filters">

        {/* YEAR TABS */}
        <div className="filter-tabs">
          <button className={`tab-btn ${Selected === 5 ? "active" : ""}`} onClick={() => setSelected(5)}>5 Years</button>
          <button className={`tab-btn ${Selected === 10 ? "active" : ""}`} onClick={() => setSelected(10)}>10 Years</button>
          <button className={`tab-btn ${Selected === 15 ? "active" : ""}`} onClick={() => setSelected(15)}>15 Years</button>
        </div>

        {/* LOCATION DROPDOWN */}
        <div className="dropdown-container">
          <button
            className="filter-select"
            onClick={() =>
              setOpenDropdown(openDropdown === "location" ? null : "location")
            }
          >
            {selectedLocation} ▾
          </button>

          {openDropdown === "location" && (
            <div className="dropdown-menu">
              {locations.map((loc) => (
                <label className="dropdown-option" key={loc}>
                  <input
                    type="radio"
                    name="location"
                    value={loc}
                    checked={selectedLocation === loc}
                    onChange={() => {
                      setSelectedLocation(loc);
                      setOpenDropdown(null);
                    }}
                  />
                  <span>{loc}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* COMMUNITY DROPDOWN */}
        <div className="dropdown-container">
          <button
            className="filter-select"
            onClick={() =>
              setOpenDropdown(openDropdown === "community" ? null : "community")
            }
          >
            {Communities} ▾
          </button>

          {openDropdown === "community" && (
            <div className="dropdown-menu">
              {Community.map((Commit) => (
                <label className="dropdown-option" key={Commit}>
                  <input
                    type="radio"
                    name="Community"
                    value={Commit}
                    checked={Communities === Commit}
                    onChange={() => {
                      setCommunities(Commit);
                      setOpenDropdown(null);
                    }}
                  />
                  <span>{Commit}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* PROPERTY DROPDOWN */}
        <div className="dropdown-container">
          <button
            className="filter-select"
            onClick={() =>
              setOpenDropdown(openDropdown === "property" ? null : "property")
            }
          >
            {property} ▾
          </button>

          {openDropdown === "property" && (
            <div className="dropdown-menu">
              {Property.map((prop) => (
                <label className="dropdown-option" key={prop}>
                  <input
                    type="radio"
                    name="property"
                    value={prop}
                    checked={property === prop}
                    onChange={() => {
                      setproperty(prop);
                      setOpenDropdown(null);
                    }}
                  />
                  <span>{prop}</span>
                </label>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};



// ------------------------------------------------------
// MARKET STATS
// ------------------------------------------------------
const MarketStats = () => {
  return (
    <div className="market-stats">
      <h1 className="market-stats-title">
        Real Estate Market Trends – Toronto, All Communities, All Property Types
      </h1>

      <div className="market-stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <p className="stat-date">October 2025</p>
            <p className="stat-label">Median Price</p>
          </div>
          <p className="stat-value">$885,000</p>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <p className="stat-date">October 2025</p>
            <p className="stat-label">New Listings</p>
          </div>
          <p className="stat-value">3,011</p>
        </div>

        <div className="stat-card stat-changes">
          <div className="stat-change">
            <span className="change-label">1 Year Value Change</span>
            <span className="change-value down">
              -5.9% <TrendingDown className="change-icon" />
            </span>
          </div>

          <div className="stat-change">
            <span className="change-label">5 Years Value Change</span>
            <span className="change-value down">
              -4% <TrendingDown className="change-icon" />
            </span>
          </div>

          <div className="stat-change">
            <span className="change-label">10 Years Value Change</span>
            <span className="change-value up">
              +57% <TrendingUp className="change-icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


// ------------------------------------------------------
// CHART DATA
// ------------------------------------------------------

const medianPriceData = [
  { month: "2020-01", medianPrice: 780000, daysOnMarket: 25, propertyDays: 32 },
  { month: "2020-05", medianPrice: 849000, daysOnMarket: 18, propertyDays: 27 },
  { month: "2020-09", medianPrice: 910000, daysOnMarket: 15, propertyDays: 22 },
  { month: "2021-01", medianPrice: 985000, daysOnMarket: 12, propertyDays: 18 },
  { month: "2021-05", medianPrice: 1100000, daysOnMarket: 8, propertyDays: 14 },
  { month: "2021-09", medianPrice: 1050000, daysOnMarket: 14, propertyDays: 21 },
  { month: "2022-01", medianPrice: 1150000, daysOnMarket: 10, propertyDays: 16 },
  { month: "2022-05", medianPrice: 1025000, daysOnMarket: 18, propertyDays: 28 },
  { month: "2022-09", medianPrice: 950000, daysOnMarket: 24, propertyDays: 35 },
  { month: "2023-01", medianPrice: 920000, daysOnMarket: 28, propertyDays: 38 },
  { month: "2023-05", medianPrice: 900000, daysOnMarket: 30, propertyDays: 40 },
  { month: "2023-09", medianPrice: 885000, daysOnMarket: 32, propertyDays: 42 },
];

const popularityData = [
  { month: "2023-01", hot: 65.5, medium: 55.2, cold: 45.1, soldCount: 980 },
  { month: "2023-03", hot: 71.2, medium: 60.5, cold: 50.3, soldCount: 1154 },
  { month: "2023-05", hot: 68.8, medium: 58.2, cold: 48.5, soldCount: 1050 },
  { month: "2023-07", hot: 72.5, medium: 62.1, cold: 52.0, soldCount: 1200 },
  { month: "2023-09", hot: 69.3, medium: 59.0, cold: 49.2, soldCount: 1100 },
  { month: "2023-11", hot: 75.1, medium: 64.5, cold: 54.2, soldCount: 1280 },
  { month: "2024-01", hot: 73.4, medium: 62.8, cold: 52.5, soldCount: 1180 },
  { month: "2024-03", hot: 77.26, medium: 66.2, cold: 55.8, soldCount: 1154 },
];

const listingsData = [
  { month: "2023-01", sold: 980, active: 2100, new: 1200 },
  { month: "2023-03", sold: 1236, active: 2462, new: 1450 },
  { month: "2023-05", sold: 1050, active: 2200, new: 1300 },
  { month: "2023-07", sold: 1200, active: 2350, new: 1380 },
  { month: "2023-09", sold: 1100, active: 2400, new: 1420 },
  { month: "2023-11", sold: 1280, active: 2300, new: 1350 },
];

const priceDistributionData = [
  { range: "100K", count: 120 },
  { range: "290K", count: 450 },
  { range: "570K", count: 890 },
  { range: "850K", count: 1200 },
  { range: "1130K", count: 780 },
  { range: "1410K", count: 340 },
  { range: "1690K", count: 120 },
];

const absorptionRateData = [
  { month: "2023-01", rate: 25 },
  { month: "2023-03", rate: 35 },
  { month: "2023-05", rate: 50 },
  { month: "2023-07", rate: 65 },
  { month: "2023-09", rate: 80 },
  { month: "2023-11", rate: 120 },
  { month: "2024-01", rate: 140 },
  { month: "2024-03", rate: 160 },
];

const rentRatioData = [
  { month: "2020-05", ratio: 8 },
  { month: "2020-09", ratio: 9 },
  { month: "2021-01", ratio: 11 },
  { month: "2021-05", ratio: 10 },
  { month: "2021-09", ratio: 12 },
  { month: "2022-01", ratio: 14 },
  { month: "2022-05", ratio: 16 },
  { month: "2022-09", ratio: 18 },
  { month: "2023-01", ratio: 15 },
  { month: "2023-05", ratio: 13 },
];

const rentalPriceData = [
  { month: "2023-01", price: 2200, leased: 450 },
  { month: "2023-03", price: 2350, leased: 520 },
  { month: "2023-05", price: 2500, leased: 580 },
  { month: "2023-07", price: 2650, leased: 610 },
  { month: "2023-09", price: 2800, leased: 650 },
  { month: "2023-11", price: 2900, leased: 680 },
];

const propertyTypeData = [
  { name: "Freehold Townhouse", value: 18, color: "#3b82f6" },
  { name: "Condo Apt", value: 35, color: "#06b6d4" },
  { name: "Detached", value: 25, color: "#10b981" },
  { name: "Link", value: 8, color: "#fbbf24" },
  { name: "Semi-Detached", value: 10, color: "#f97316" },
  { name: "Condo Townhouse", value: 3, color: "#ec4899" },
  { name: "Other", value: 1, color: "#a855f7" },
];


// ------------------------------------------------------
// MARKET CHARTS
// ------------------------------------------------------
const MarketCharts = () => {
  return (
    <div className="market-charts">

      {/* 1 — Median Price & Days on Market */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">
            Median Sold Price & Average Days On Market
          </h2>
          <p className="chart-subtitle">
            Property Days on Market does not reset when the property is delisted and quickly re-listed.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={medianPriceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

            <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
            <YAxis yAxisId="left" stroke="#1A9BFC" />
            <YAxis yAxisId="right" stroke="#F3722C" />

            <Tooltip />
            <Legend />

            <Area
              yAxisId="left"
              type="monotone"
              dataKey="medianPrice"
              fill="#cdeeff"
              stroke="#1A9BFC"
            />

            <Bar
              yAxisId="right"
              dataKey="daysOnMarket"
              fill="#F3722C"
              name="Days on Market"
            />

            <Bar
              yAxisId="right"
              dataKey="propertyDays"
              fill="#28A3B3"
              name="Property Days on Market"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>


      {/* 2 — Popularity */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Popularity Score & Sold Listings</h2>
          <p className="chart-subtitle">
            The Popularity Score is a measure of online activity, like listing views, in this area.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={popularityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

            <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
            <YAxis yAxisId="left" stroke="#FF0300" />
            <YAxis yAxisId="right" stroke="#f59525" />

            <Tooltip />
            <Legend />

            <Line yAxisId="left" type="monotone" dataKey="hot" stroke="#FF0300" />
            <Line yAxisId="left" type="monotone" dataKey="medium" stroke="#10b981" />
            <Line yAxisId="left" type="monotone" dataKey="cold" stroke="#3b82f6" />

            <Bar yAxisId="right" dataKey="soldCount" fill="#f59525" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>


      {/* 3 — Sold / Active / New Listings */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Sold, Active & New Listings</h2>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={listingsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

            <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
            <YAxis />

            <Tooltip />
            <Legend />

            <Bar dataKey="active" fill="#f59525" />
            <Bar dataKey="new" fill="#d1d5db" />
            <Line type="monotone" dataKey="sold" stroke="#69c6d5" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>


      {/* 4 — Price Distribution */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Sold Price Distribution (Last 6 Months)</h2>
          <p className="chart-subtitle">
            Overview of sold price distribution for All property types.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={priceDistributionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

            <XAxis dataKey="range" />
            <YAxis />

            <Tooltip />

            <Bar dataKey="count" fill="#f59525" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>


      {/* 5 — Absorption Rate */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Market Temperature (Absorption Rate)</h2>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={absorptionRateData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

            <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
            <YAxis />

            <Tooltip />

            <ReferenceLine y={30} stroke="#ef4444" strokeDasharray="5 5" />
            <ReferenceLine y={60} stroke="#ef4444" strokeDasharray="5 5" />
            <ReferenceLine y={150} stroke="#ef4444" strokeDasharray="5 5" />

            <Area
              type="monotone"
              dataKey="rate"
              stroke="#3b82f6"
              fill="#cdeaff"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>


      {/* 6 — Rent Ratio */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Investor Demand (Rent Ratio)</h2>
        </div>
          <p className="chart-subtitle">
            Overview of sold price distribution for All property types.
          </p>

        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={rentRatioData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

            <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
            <YAxis />

            <Tooltip />

            <Area type="monotone" dataKey="ratio" stroke="#3b82f6" fill="#ddeeff" />
          </AreaChart>
        </ResponsiveContainer>
      </div>


      {/* 7 — Rental Price */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Median Rental Price</h2>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={rentalPriceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />

            <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />

            <YAxis yAxisId="left" stroke="#3b82f6" />
            <YAxis yAxisId="right" stroke="#f59525" />

            <Tooltip />
            <Legend />

            <Line yAxisId="left" dataKey="price" stroke="#3b82f6" />
            <Bar yAxisId="right" dataKey="leased" fill="#f59525" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>


      {/* 8 — Pie Chart */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Property Type Distribution</h2>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={propertyTypeData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              labelLine
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              dataKey="value"
            >
              {propertyTypeData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>


      <p className="chart-source">
        * Source: Analysis of past listings.
      </p>
    </div>
  );
};


// ------------------------------------------------------
// CONTACT FORM
// ------------------------------------------------------
const ContactForm = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Button clicked without reload!");
  };

  return (
    <div className="contact-form">
      <h2 className="contact-form-title">Contact HouseSigma Agent</h2>

      <form className="contact-form-content" onSubmit={handleClick}>
        <input type="text" placeholder="Your Name *" className="contact-form-input" />

        <div className="contact-form-input-group">
          <input type="tel" placeholder="Your Contact Number *" className="contact-form-input" />
          <input type="email" placeholder="Your Email Address *" className="contact-form-input" />
        </div>

        <textarea placeholder="Message" rows={4} className="contact-form-textarea" />

        <p className="contact-form-required">* Required field</p>

        <p className="contact-form-privacy">
          By submitting this form, I understand HouseSigma will share my information with registered real estate professionals.
        </p>

        <button
          type="button"
          onClick={handleClick}
          className="contact-form-submit-button"
        >
          Contact Agent
        </button>
      </form>
    </div>
  );
};



// ------------------------------------------------------
// FINAL PAGE (NO PropertySection, NO newlyListed)
// ------------------------------------------------------
const MarketTrends = () => {
  return (
    <div className="market-trends-page">

      {/* NAVBAR */}
      <Navbar />
      <MarketFilters />

      {/* MAIN CONTAINER (includes filter + page content) */}
      <div className="market-trends-container">
        {/* FILTER BAR right under Navbar */}
        {/* MAIN CONTENT: stats, charts, form */}
        <main className="market-trends-main">
          <div className="market-trends-content">
            <div className="market-trends-main-content">
              <MarketStats />
              <MarketCharts />
              <ContactForm />
            </div>
          </div>
        </main>

      </div>  {/* closes .market-trends-container */}

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default MarketTrends;

