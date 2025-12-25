import './DashboardHeader.css';
import {
  BarChart3,
  TrendingUp,
  Building2,
  Sparkles,
} from 'lucide-react';

type DashboardHeaderProps = {
  city: string;
  propertyType: string;
  timeRange: string;
};

export const DashboardHeader = ({
  city,
  propertyType,
  timeRange,
}: DashboardHeaderProps) => {
  /* =========================
     SIMPLE DERIVED VALUES
     (mock logic – API-ready)
  ========================= */

  const appreciation =
    timeRange === 'Last 3 Months'
      ? 4.2
      : timeRange === 'Last 6 Months'
      ? 7.8
      : 12.4;

  const activeListings =
    propertyType === 'Apartment'
      ? 18420
      : propertyType === 'Villa'
      ? 9420
      : propertyType === 'Commercial'
      ? 6320
      : 24856;

  const rentalYield =
    propertyType === 'Apartment'
      ? 5.6
      : propertyType === 'Villa'
      ? 4.8
      : 6.2;

  const topHotspot =
    city === 'Bangalore'
      ? 'Whitefield'
      : city === 'Hyderabad'
      ? 'Gachibowli'
      : city === 'Pune'
      ? 'Hinjewadi'
      : 'Whitefield';

  /* =========================
     RENDER
  ========================= */

  return (
    <header className="dashboard-header">
      {/* ================= TOP ================= */}
      <div className="header-top">
        <div className="header-left">
          <div className="title-row">
            <div className="header-icon">
              <BarChart3 size={20} />
            </div>
            <h1>Market Trends & Insights</h1>
          </div>

          <p className="header-subtitle">
            {city} • {propertyType} • {timeRange}
          </p>
        </div>

        <div className="header-right">
          <div className="live-badge">
            <Sparkles size={16} />
            Live Data
          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="stats-grid">
        {/* Appreciation */}
        <div className="stat-card">
          <div className="stat-label">
            <div className="stat-icon green">
              <TrendingUp size={16} />
            </div>
            Avg Appreciation
          </div>
          <strong>+{appreciation}%</strong>
          <small className="positive">
            {timeRange === 'Last 12 Months'
              ? 'Yearly trend'
              : timeRange}
          </small>
        </div>

        {/* Listings */}
        <div className="stat-card">
          <div className="stat-label">
            <div className="stat-icon blue">
              <Building2 size={16} />
            </div>
            Active Listings
          </div>
          <strong>{activeListings.toLocaleString()}</strong>
          <small className="accent">
            {propertyType === 'All Types'
              ? 'All properties'
              : propertyType}
          </small>
        </div>

        {/* Rental Yield */}
        <div className="stat-card">
          <div className="stat-label">
            <div className="stat-icon purple">
              <BarChart3 size={16} />
            </div>
            Avg Rental Yield
          </div>
          <strong>{rentalYield}%</strong>
          <small className="secondary">
            Based on demand trends
          </small>
        </div>

        {/* Hotspot */}
        <div className="stat-card">
          <div className="stat-label">
            <div className="stat-icon orange">
              <Sparkles size={16} />
            </div>
            Top Hotspot
          </div>
          <strong>{topHotspot}</strong>
          <small className="positive">
            High investor interest
          </small>
        </div>
      </div>
    </header>
  );
};
