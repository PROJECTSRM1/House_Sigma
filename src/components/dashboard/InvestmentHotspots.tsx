import './InvestmentHotspots.css';

import {
  MapPin,
  TrendingUp,
  Percent,
  Building2,
  Activity,
} from 'lucide-react';

import { investmentHotspots, dataMethodology } from '@/data/mockData';
import { InfoTooltip } from './InfoTooltip';

export const InvestmentHotspots = () => {
  const getBadgeClass = (badge: string) => {
    switch (badge) {
      case 'high-growth':
        return 'hotspot-badge high-growth';
      case 'emerging':
        return 'hotspot-badge emerging';
      default:
        return 'hotspot-badge stable';
    }
  };

  const getBadgeLabel = (badge: string) => {
    switch (badge) {
      case 'high-growth':
        return 'High Growth';
      case 'emerging':
        return 'Emerging Area';
      default:
        return 'Stable Returns';
    }
  };

  return (
    <section className="hotspots-section">
      {/* Header */}
      <div className="hotspots-header">
        <h3>Investment Hotspots</h3>
        <p>Top areas for real estate investment</p>
      </div>

      {/* Grid */}
      <div className="hotspots-grid">
        {investmentHotspots.map((hotspot, index) => (
          <div
            key={hotspot.id}
            className="hotspot-card"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {/* Accent strip */}
            <div
              className={`hotspot-accent ${hotspot.badge}`}
            />

            {/* Top */}
            <div className="hotspot-top">
              <div>
                <h4>{hotspot.name}</h4>
                <div className="hotspot-location">
                  <MapPin />
                  {hotspot.city}
                </div>
              </div>

              <span className={getBadgeClass(hotspot.badge)}>
                {getBadgeLabel(hotspot.badge)}
              </span>
            </div>

            {/* Metrics */}
            <div className="hotspot-metrics">
              <div className="metric-card">
                <div className="metric-label">
                  <TrendingUp />
                  Appreciation
                  <InfoTooltip
                    title={dataMethodology.appreciation.title}
                    description={dataMethodology.appreciation.description}
                  />
                </div>
                <strong className="metric-primary">
                  +{hotspot.appreciation}%
                </strong>
              </div>

              <div className="metric-card">
                <div className="metric-label">
                  <Percent />
                  Rental Yield
                  <InfoTooltip
                    title={dataMethodology.rentalYield.title}
                    description={dataMethodology.rentalYield.description}
                  />
                </div>
                <strong>
                  {hotspot.rentalYield}%
                </strong>
              </div>

              <div className="metric-card">
                <div className="metric-label">
                  <Building2 />
                  Infrastructure
                  <InfoTooltip
                    title={dataMethodology.infrastructureScore.title}
                    description={dataMethodology.infrastructureScore.description}
                  />
                </div>
                <strong>
                  {hotspot.infrastructureScore}
                </strong>
              </div>

              <div className="metric-card">
                <div className="metric-label">
                  <Activity />
                  Sales Activity
                </div>
                <strong>
                  {hotspot.salesActivity}
                </strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
