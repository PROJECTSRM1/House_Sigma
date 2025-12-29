import './ComparisonCards.css';

import { useTranslation } from "react-i18next";

import { Building, Home, TrendingUp, Shield, Clock } from 'lucide-react';
import { comparisonData } from '@/data/mockData';

export const ComparisonCards = () => {

  const { t } = useTranslation();

  const { underConstruction, readyToMove } = comparisonData;

  return (
    <div className="comparison-section">
      {/* Header */}
      <div className="comparison-header">
        <h3>{t("under_construction_vs_ready_to_move")}</h3>
        <p>{t("compare_investment_options_side_by_side")}</p>
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
                <h4>{t("under_construction")}</h4>
                <span className="badge emerging">{t("best_for_long_term")}</span>
              </div>
            </div>

            <div className="card-stats">
              <div className="stat-row">
                <span>{t("price_per_sq_ft")}</span>
                <strong>₹{underConstruction.pricePerSqft.toLocaleString()}</strong>
              </div>

              <div className="stat-row">
                <span>
                  <TrendingUp />{t("expected_appreciation")}</span>
                <strong className="positive">
                  +{underConstruction.appreciation}%
                </strong>
              </div>

              <div className="stat-row">
                <span>{t("rental_potential")}</span>
                <strong>{underConstruction.rentalPotential}%</strong>
              </div>

              <div className="stat-row">
                <span>
                  <Shield />{t("risk_level")}</span>
                <strong className="accent-text">
                  {underConstruction.riskLevel}
                </strong>
              </div>

              <div className="stat-row">
                <span>
                  <Clock />{t("possession")}</span>
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
                <h4>{t("ready_to_move")}</h4>
                <span className="badge growth">{t("best_for_short_term")}</span>
              </div>
            </div>

            <div className="card-stats">
              <div className="stat-row">
                <span>{t("price_per_sq_ft")}</span>
                <strong>₹{readyToMove.pricePerSqft.toLocaleString()}</strong>
              </div>
              <div className="stat-row">
                <span>
                  <TrendingUp />{t("expected_appreciation")}</span>
                <strong className="positive">
                  +{readyToMove.appreciation}%
                </strong>
              </div>

              <div className="stat-row">
                <span>{t("rental_potential")}</span>
                <strong>{readyToMove.rentalPotential}%</strong>
              </div>

              <div className="stat-row">
                <span>
                  <Shield />{t("risk_level")}</span>
                <strong className="primary-text">
                  {readyToMove.riskLevel}
                </strong>
              </div>

              <div className="stat-row">
                <span>
                  <Clock />{t("possession")}</span>
                <strong>{readyToMove.possession}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
