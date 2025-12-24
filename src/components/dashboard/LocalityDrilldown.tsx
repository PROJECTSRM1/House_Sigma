import './LocalityDrilldown.css';

import { MapPin, IndianRupee, Home } from 'lucide-react';
import { LocalityData } from '@/data/mockData';
import { PercentageChange } from './ComparisonModeToggle';
import { InfoTooltip } from './InfoTooltip';
import { dataMethodology } from '@/data/mockData';

interface LocalityDrilldownProps {
  localities: LocalityData[];
  cityName: string;
}

export const LocalityDrilldown = ({
  localities,
  cityName,
}: LocalityDrilldownProps) => {
  return (
    <section className="locality-section">
      {/* Header */}
      <div className="locality-header">
        <MapPin />
        <span>Top Localities in {cityName}</span>
      </div>

      {/* List */}
      <div className="locality-list">
        {localities.map((locality, index) => (
          <div
            key={locality.name}
            className="locality-card"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {/* Top row */}
            <div className="locality-top">
              <div>
                <h5>{locality.name}</h5>
                <div className="locality-demand">
                  <span>Demand:</span>
                  <strong>{locality.demandScore}/100</strong>

                  <InfoTooltip
                    title={dataMethodology.demandScore.title}
                    description={dataMethodology.demandScore.description}
                    calculation={dataMethodology.demandScore.calculation}
                  />
                </div>
              </div>

              <PercentageChange
                value={locality.priceChange}
                size="sm"
              />
            </div>

            {/* Stats */}
            <div className="locality-stats">
              <div className="stat">
                <div className="stat-icon primary">
                  <IndianRupee />
                </div>
                <div>
                  <span>Avg. Price / sqft</span>
                  <strong>
                    ₹{locality.avgPrice.toLocaleString()}
                  </strong>
                </div>
              </div>

              <div className="stat">
                <div className="stat-icon accent">
                  <Home />
                </div>
                <div>
                  <span>Avg. Rent / mo</span>
                  <strong>
                    ₹{locality.avgRent.toLocaleString()}
                    <em>+{locality.rentChange}%</em>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
