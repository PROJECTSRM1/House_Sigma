import { useState, useMemo } from "react";
import {
  Building2,
  DollarSign,
  Percent,
  TrendingUp,
  TrendingDown,
  GraduationCap,
  Heart,
  ShoppingBag,
  Train,
  MapPin,
  Bell,
  Search,
  User,
  ChevronDown,
  Filter,
  X,
  BarChart3,
  Users,
  Activity,
  Compass,
} from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./market-statistics.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// Mock Data
const allTrendData = [
  { month: "Jan", downtown: 850, suburban: 620, waterfront: 1100 },
  { month: "Feb", downtown: 880, suburban: 640, waterfront: 1150 },
  { month: "Mar", downtown: 920, suburban: 660, waterfront: 1200 },
  { month: "Apr", downtown: 900, suburban: 680, waterfront: 1180 },
  { month: "May", downtown: 950, suburban: 700, waterfront: 1250 },
  { month: "Jun", downtown: 980, suburban: 720, waterfront: 1300 },
  { month: "Jul", downtown: 1020, suburban: 750, waterfront: 1350 },
  { month: "Aug", downtown: 1050, suburban: 780, waterfront: 1400 },
  { month: "Sep", downtown: 1080, suburban: 800, waterfront: 1420 },
  { month: "Oct", downtown: 1100, suburban: 820, waterfront: 1450 },
  { month: "Nov", downtown: 1120, suburban: 840, waterfront: 1480 },
  { month: "Dec", downtown: 1150, suburban: 860, waterfront: 1520 },
];

const allDemandData = [
  { locality: "Downtown", demand: 92, supply: 65, type: "residential" },
  { locality: "Waterfront", demand: 88, supply: 45, type: "luxury" },
  { locality: "Midtown", demand: 75, supply: 70, type: "commercial" },
  { locality: "Suburban", demand: 60, supply: 80, type: "residential" },
  { locality: "Green Valley", demand: 55, supply: 68, type: "residential" },
];

const allCommunities = [
  { id: "1", name: "Downtown Core", avgPrice: 1150000, priceChange: 5.2, listings: 342, demand: "high", type: "residential" },
  { id: "2", name: "Waterfront District", avgPrice: 1520000, priceChange: 8.1, listings: 156, demand: "high", type: "luxury" },
  { id: "3", name: "Midtown East", avgPrice: 890000, priceChange: 2.4, listings: 428, demand: "medium", type: "commercial" },
  { id: "4", name: "Suburban Heights", avgPrice: 680000, priceChange: -1.2, listings: 567, demand: "medium", type: "residential" },
  { id: "5", name: "Green Valley", avgPrice: 520000, priceChange: 3.8, listings: 289, demand: "low", type: "residential" },
];

const facilities = [
  { type: "Schools", icon: GraduationCap, count: 12, nearby: ["Lincoln Elementary - 0.3 mi", "Central High - 0.8 mi", "Westside Academy - 1.2 mi"] },
  { type: "Hospitals", icon: Heart, count: 5, nearby: ["City General - 0.5 mi", "Memorial Medical - 1.8 mi"] },
  { type: "Shopping", icon: ShoppingBag, count: 8, nearby: ["Downtown Mall - 0.4 mi", "Market Square - 0.7 mi"] },
  { type: "Transport", icon: Train, count: 6, nearby: ["Central Station - 0.2 mi", "Bus Terminal - 0.3 mi"] },
];

const dateRangeMonths: Record<string, number> = {
  "1M": 1,
  "3M": 3,
  "6M": 6,
  "12M": 12,
};

const propertyTypes = ["all", "residential", "commercial", "luxury"];
const demandLevels = ["all", "high", "medium", "low"];
const priceRanges = ["all", "under500k", "500k-1m", "over1m"];

const formatPrice = (price: number) => price >= 1000000 ? `$${(price / 1000000).toFixed(1)}M` : `$${(price / 1000).toFixed(0)}K`;

const MarketStatistics = () => {
  const [selectedCommunity, setSelectedCommunity] = useState<string | null>(null);
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);
  const [dateRange, setDateRange] = useState("12m");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  const [propertyType, setPropertyType] = useState("all");
  const [demandLevel, setDemandLevel] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const trendData = useMemo(() => {
    const months = dateRangeMonths[dateRange];
    return allTrendData.slice(-months);
  }, [dateRange]);

  const filteredCommunities = useMemo(() => {
    return allCommunities.filter((community) => {
      if (searchQuery && !community.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      if (propertyType !== "all" && community.type !== propertyType) {
        return false;
      }
      if (demandLevel !== "all" && community.demand !== demandLevel) {
        return false;
      }
      if (priceRange !== "all") {
        if (priceRange === "under500k" && community.avgPrice >= 500000) return false;
        if (priceRange === "500k-1m" && (community.avgPrice < 500000 || community.avgPrice >= 1000000)) return false;
        if (priceRange === "over1m" && community.avgPrice < 1000000) return false;
      }
      return true;
    });
  }, [searchQuery, propertyType, demandLevel, priceRange]);

  const filteredDemandData = useMemo(() => {
    if (propertyType === "all") return allDemandData;
    return allDemandData.filter((d) => d.type === propertyType);
  }, [propertyType]);

  const stats = useMemo(() => {
    const totalListings = filteredCommunities.reduce((sum, c) => sum + c.listings, 0);
    const avgPrice = filteredCommunities.length > 0 
      ? Math.round(filteredCommunities.reduce((sum, c) => sum + c.avgPrice, 0) / filteredCommunities.length / 1000)
      : 0;
    
    return [
      { title: "Total Active Listings", value: totalListings.toLocaleString(), change: 12.5, icon: Building2 },
      { title: "Avg. Price per Sqft", value: `$${avgPrice}`, change: 4.2, icon: DollarSign },
      { title: "Rental Yield", value: "5.8%", change: 0.3, icon: Percent },
      { title: "Price Appreciation", value: "7.2%", change: 2.1, icon: TrendingUp },
    ];
  }, [filteredCommunities]);

  const clearFilters = () => {
    setPropertyType("all");
    setDemandLevel("all");
    setPriceRange("all");
    setSearchQuery("");
  };

  const activeFiltersCount = [propertyType, demandLevel, priceRange].filter(f => f !== "all").length;

  return (
    <>
    <Navbar />
    <div className="market-statistics">
      {/* Hero Section */}
      <section className="ms-hero">
        <div className="ms-hero-content">
          <span className="ms-hero-label">REAL ESTATE ANALYTICS</span>
          <h1 className="ms-hero-title">Market Statistics</h1>
          <p className="ms-hero-description">
            Comprehensive insights and data-driven analytics to help you make informed real estate investment decisions.
          </p>
        </div>
        <div className="ms-hero-gradient"></div>
      </section>

      <main className="ms-main">
        {/* Page Title & Filters */}
        <div className="ms-title-section">
          <div>
            <p className="ms-subtitle">
              Showing data for last {dateRange === "1M" ? "month" : dateRange === "12M" ? "year" : dateRange.replace("M", " months")}
              {activeFiltersCount > 0 && ` • ${activeFiltersCount} filter${activeFiltersCount > 1 ? "s" : ""} active`}
            </p>
          </div>
          <div className="ms-controls">
            <div className="ms-date-range">
              {["1M", "3M", "6M", "12M"].map((range) => (
                <button
                  key={range}
                  onClick={() => setDateRange(range)}
                  className={`ms-date-range-btn ${dateRange === range ? "active" : ""}`}
                >
                  {range}
                </button>
              ))}
            </div>
            <div className="ms-filter-container">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`ms-filter-btn ${showFilters ? "active" : ""}`}
              >
                <Filter />
                Filters
                {activeFiltersCount > 0 && (
                  <span className="ms-filter-count">{activeFiltersCount}</span>
                )}
                <ChevronDown className={showFilters ? "rotate" : ""} />
              </button>

              {showFilters && (
                <div className="ms-filter-dropdown">
                  <div className="ms-filter-header">
                    <h4>Filters</h4>
                    <button onClick={clearFilters} className="ms-filter-clear">Clear all</button>
                  </div>

                  <div className="ms-filter-group">
                    <label className="ms-filter-label">Property Type</label>
                    <div className="ms-filter-options">
                      {propertyTypes.map((type) => (
                        <button
                          key={type}
                          onClick={() => setPropertyType(type)}
                          className={`ms-filter-option ${propertyType === type ? "active" : ""}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="ms-filter-group">
                    <label className="ms-filter-label">Demand Level</label>
                    <div className="ms-filter-options">
                      {demandLevels.map((level) => (
                        <button
                          key={level}
                          onClick={() => setDemandLevel(level)}
                          className={`ms-filter-option ${demandLevel === level ? "active" : ""}`}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="ms-filter-group">
                    <label className="ms-filter-label">Price Range</label>
                    <div className="ms-filter-options">
                      {priceRanges.map((range) => (
                        <button
                          key={range}
                          onClick={() => setPriceRange(range)}
                          className={`ms-filter-option ${priceRange === range ? "active" : ""}`}
                        >
                          {range === "all" ? "All" : range === "under500k" ? "Under $500K" : range === "500k-1m" ? "$500K - $1M" : "Over $1M"}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Overall Statistics */}
        <div className="ms-section-header">
          <div className="ms-section-icon">
            <BarChart3 />
          </div>
          <div className="ms-section-text">
            <h2 className="ms-section-title">Overall Statistics</h2>
            <p className="ms-section-subtitle">Key performance indicators across all markets</p>
          </div>
        </div>
        <section className="ms-stats-grid">
          {stats.map((stat) => (
            <div key={stat.title} className="ms-stat-card">
              <div className="ms-stat-header">
                <div>
                  <p className="ms-stat-title">{stat.title}</p>
                  <p className="ms-stat-value">{stat.value}</p>
                </div>
                <div className="ms-stat-icon">
                  <stat.icon />
                </div>
              </div>
              <div className="ms-stat-footer">
                <span className="ms-stat-change">↑ {stat.change}%</span>
                <span className="ms-stat-period">vs last period</span>
              </div>
            </div>
          ))}
        </section>

        {/* Community & Locality Insights */}
        <div className="ms-section-header">
          <div className="ms-section-icon">
            <Users />
          </div>
          <div className="ms-section-text">
            <h2 className="ms-section-title">Community & Locality Insights</h2>
            <p className="ms-section-subtitle">Pricing trends and popular communities analysis</p>
          </div>
        </div>
        <section className="ms-charts-grid">
          {/* Community Trends Chart */}
          <div className="ms-card">
            <div className="ms-card-header">
              <h3 className="ms-card-title">Community Pricing Trends</h3>
              <p className="ms-card-subtitle">
                Showing {trendData.length} month{trendData.length > 1 ? "s" : ""} of data
              </p>
            </div>
            <div className="ms-legend">
              {[{ label: "Downtown", color: "#1e4a7a" }, { label: "Suburban", color: "#6b7280" }, { label: "Waterfront", color: "#3b82f6" }].map((item) => (
                <div key={item.label} className="ms-legend-item">
                  <div className="ms-legend-dot" style={{ backgroundColor: item.color }} />
                  <span className="ms-legend-label">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="ms-chart-container">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="colorDowntown" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#1e4a7a" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#1e4a7a" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorSuburban" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6b7280" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#6b7280" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorWaterfront" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v}`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                    formatter={(value: number) => [`$${value}/sqft`, ""]}
                  />
                  <Area type="monotone" dataKey="downtown" stroke="#1e4a7a" strokeWidth={2} fill="url(#colorDowntown)" />
                  <Area type="monotone" dataKey="suburban" stroke="#6b7280" strokeWidth={2} fill="url(#colorSuburban)" />
                  <Area type="monotone" dataKey="waterfront" stroke="#3b82f6" strokeWidth={2} fill="url(#colorWaterfront)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Popular Communities */}
          <div className="ms-card">
            <div className="ms-card-header-row">
              <div>
                <h3 className="ms-card-title">Popular Communities</h3>
                <p className="ms-card-subtitle">
                  {filteredCommunities.length} of {allCommunities.length} communities
                </p>
              </div>
            </div>
            <div className="ms-communities-list">
              {filteredCommunities.length === 0 ? (
                <div className="ms-empty-state">
                  <p>No communities match your filters</p>
                  <button onClick={clearFilters}>Clear filters</button>
                </div>
              ) : (
                filteredCommunities.map((community, index) => (
                  <div
                    key={community.id}
                    onClick={() => setSelectedCommunity(selectedCommunity === community.id ? null : community.id)}
                    className={`ms-community-item ${selectedCommunity === community.id ? "selected" : ""}`}
                  >
                    <div className="ms-community-left">
                      <div className="ms-community-rank">{index + 1}</div>
                      <div>
                        <p className="ms-community-name">{community.name}</p>
                        <p className="ms-community-meta">{community.listings} listings • {community.type}</p>
                      </div>
                    </div>
                    <div className="ms-community-right">
                      <div className="ms-community-price">
                        <p className="ms-community-price-value">{formatPrice(community.avgPrice)}</p>
                        <div className={`ms-community-price-change ${community.priceChange > 0 ? "positive" : "negative"}`}>
                          {community.priceChange > 0 ? <TrendingUp /> : <TrendingDown />}
                          <span>{community.priceChange > 0 ? "+" : ""}{community.priceChange}%</span>
                        </div>
                      </div>
                      <span className={`ms-demand-badge ${community.demand}`}>{community.demand}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Demand Analysis by Locality */}
        <div className="ms-section-header">
          <div className="ms-section-icon">
            <Activity />
          </div>
          <div className="ms-section-text">
            <h2 className="ms-section-title">Demand Analysis by Locality</h2>
            <p className="ms-section-subtitle">Supply and demand dynamics across regions</p>
          </div>
        </div>
        <section className="ms-card" style={{ marginBottom: "2rem" }}>
          <div className="ms-card-header">
            <h3 className="ms-card-title">Demand vs Supply Analysis</h3>
            <p className="ms-card-subtitle">
              {propertyType === "all" ? "All property types" : `Showing ${propertyType} properties`}
            </p>
          </div>
          <div className="ms-legend">
            <div className="ms-legend-item">
              <div className="ms-legend-dot" style={{ backgroundColor: "#1e4a7a" }} />
              <span className="ms-legend-label">Demand Index</span>
            </div>
            <div className="ms-legend-item">
              <div className="ms-legend-dot" style={{ backgroundColor: "#9ca3af" }} />
              <span className="ms-legend-label">Supply Index</span>
            </div>
          </div>
          <div className="ms-chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={filteredDemandData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                <XAxis type="number" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                <YAxis type="category" dataKey="locality" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} width={80} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }}
                  formatter={(value: number) => [`${value}%`, ""]}
                  cursor={{ fill: "#f3f4f6" }}
                />
                <Bar dataKey="demand" fill="#1e4a7a" radius={[0, 4, 4, 0]} barSize={14} />
                <Bar dataKey="supply" fill="#9ca3af" radius={[0, 4, 4, 0]} barSize={14} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="ms-demand-footer">
            <div className="ms-demand-stat">
              <p className="ms-demand-stat-value green">{filteredDemandData.filter(d => d.demand > d.supply + 10).length}</p>
              <p className="ms-demand-stat-label">High Demand Areas</p>
            </div>
            <div className="ms-demand-stat">
              <p className="ms-demand-stat-value yellow">{filteredDemandData.filter(d => Math.abs(d.demand - d.supply) <= 10).length}</p>
              <p className="ms-demand-stat-label">Balanced Markets</p>
            </div>
            <div className="ms-demand-stat">
              <p className="ms-demand-stat-value gray">{filteredDemandData.filter(d => d.supply > d.demand + 10).length}</p>
              <p className="ms-demand-stat-label">Oversupplied</p>
            </div>
          </div>
        </section>

        {/* Proximity-Based Analysis */}
        <div className="ms-section-header">
          <div className="ms-section-icon">
            <Compass />
          </div>
          <div className="ms-section-text">
            <h2 className="ms-section-title">Proximity-Based Analysis</h2>
            <p className="ms-section-subtitle">Nearby facilities and location advantages</p>
          </div>
        </div>
        <section className="ms-card">
          <div className="ms-proximity-header">
            <div>
              <h3 className="ms-card-title">Nearby Facilities Overview</h3>
              <p className="ms-card-subtitle">Nearby facilities for selected location</p>
            </div>
            <button className="ms-location-btn">
              <MapPin />
              Change Location
            </button>
          </div>
          <div className="ms-facilities-grid">
            {facilities.map((facility) => (
              <div
                key={facility.type}
                onClick={() => setSelectedFacility(selectedFacility === facility.type ? null : facility.type)}
                className={`ms-facility-card ${selectedFacility === facility.type ? "selected" : ""}`}
              >
                <div className="ms-facility-header">
                  <div className="ms-facility-icon">
                    <facility.icon />
                  </div>
                  <div>
                    <h4 className="ms-facility-name">{facility.type}</h4>
                    <p className="ms-facility-count">{facility.count} nearby</p>
                  </div>
                </div>
                <div className={`ms-facility-list ${selectedFacility === facility.type ? "expanded" : "collapsed"}`}>
                  {facility.nearby.map((place, i) => (
                    <div key={i} className="ms-facility-place">{place}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
      </main>

      {showFilters && <div className="ms-filter-overlay" onClick={() => setShowFilters(false)} />}
    
    </div>
        <Footer />
       </>
  );
};

export default MarketStatistics;
