import './ComparisonCards.css';

import { Building, Home, TrendingUp, Shield, Clock } from 'lucide-react';
import { comparisonData } from '@/data/mockData';

export const ComparisonCards = () => {
  const { underConstruction, readyToMove } = comparisonData;

  return (
    <div className="comparison-section">
      {/* Header */}
      <div className="comparison-header">
        <h3>Under-Construction vs Ready-to-Move</h3>
        <p>Compare investment options side by side</p>
      </div>

      <div className="comparison-grid">
        {/* Under Construction */}
        <div className="comparison-card accent">
          <div className="card-glow accent-glow" />

          <div className="card-content">
            <div className="card-title">
              <div className="icon-box accent">
                <Building />
              </div>
              <div>
                <h4>Under-Construction</h4>
                <span className="badge emerging">Best for Long-term</span>
              </div>
            </div>

            <div className="card-stats">
              <div className="stat-row">
                <span>Price per sq.ft</span>
                <strong>₹{underConstruction.pricePerSqft.toLocaleString()}</strong>
              </div>

              <div className="stat-row">
                <span>
                  <TrendingUp /> Expected Appreciation
                </span>
                <strong className="positive">
                  +{underConstruction.appreciation}%
                </strong>
              </div>

              <div className="stat-row">
                <span>Rental Potential</span>
                <strong>{underConstruction.rentalPotential}%</strong>
              </div>

              <div className="stat-row">
                <span>
                  <Shield /> Risk Level
                </span>
                <strong className="accent-text">
                  {underConstruction.riskLevel}
                </strong>
              </div>

              <div className="stat-row">
                <span>
                  <Clock /> Possession
                </span>
                <strong>{underConstruction.possession}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Move */}
        <div className="comparison-card primary">
          <div className="card-glow primary-glow" />

          <div className="card-content">
            <div className="card-title">
              <div className="icon-box primary">
                <Home />
              </div>
              <div>
                <h4>Ready-to-Move</h4>
                <span className="badge growth">Best for Short-term</span>
              </div>
            </div>

            <div className="card-stats">
              <div className="stat-row">
                <span>Price per sq.ft</span>
                <strong>₹{readyToMove.pricePerSqft.toLocaleString()}</strong>
              </div>
              <div className="stat-row">
                <span>
                  <TrendingUp /> Expected Appreciation
                </span>
                <strong className="positive">
                  +{readyToMove.appreciation}%
                </strong>
              </div>

              <div className="stat-row">
                <span>Rental Potential</span>
                <strong>{readyToMove.rentalPotential}%</strong>
              </div>

              <div className="stat-row">
                <span>
                  <Shield /> Risk Level
                </span>
                <strong className="primary-text">
                  {readyToMove.riskLevel}
                </strong>
              </div>

              <div className="stat-row">
                <span>
                  <Clock /> Possession
                </span>
                <strong>{readyToMove.possession}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
