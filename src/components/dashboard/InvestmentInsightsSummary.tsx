import './InvestmentInsightsSummary.css';

import { useState } from 'react';
import {
  Sparkles,
  Clock,
  Target,
  Lightbulb,
} from 'lucide-react';
import { investmentInsights, InvestmentInsight } from '@/data/mockData';

const getTypeIcon = (type: InvestmentInsight['type']) => {
  switch (type) {
    case 'short-term':
      return <Clock />;
    case 'long-term':
      return <Target />;
    default:
      return <Lightbulb />;
  }
};

const getTypeLabel = (type: InvestmentInsight['type']) => {
  switch (type) {
    case 'short-term':
      return 'Short-term';
    case 'long-term':
      return 'Long-term';
    default:
      return 'General';
  }
};

const getRecommendationClass = (recommendation: string) => {
  switch (recommendation) {
    case 'STRONG BUY':
      return 'rec-strong-buy';
    case 'BUY':
      return 'rec-buy';
    case 'ACCUMULATE':
      return 'rec-accumulate';
    case 'HOLD':
      return 'rec-hold';
    default:
      return 'rec-default';
  }
};

export const InvestmentInsightsSummary = () => {
  const [filter, setFilter] = useState<'all' | 'short-term' | 'long-term'>(
    'all'
  );

  const filteredInsights = investmentInsights.filter(
    (insight) => filter === 'all' || insight.type === filter
  );

  return (
    <section className="insights-section">
      {/* Header */}
      <div className="insights-header">
        <div className="insights-title">
          <div className="insights-icon">
            <Sparkles />
          </div>
          <div>
            <h3>
              Investment Insights Summary
              <span className="ai-badge">AI-Powered</span>
            </h3>
            <p>Smart recommendations based on market trends</p>
          </div>
        </div>

        {/* Filter */}
        <div className="insights-filter">
          {(['all', 'short-term', 'long-term'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`filter-btn ${
                filter === type ? 'active' : ''
              }`}
            >
              {type === 'all'
                ? 'All'
                : type === 'short-term'
                ? 'Short-term'
                : 'Long-term'}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="insights-grid">
        {filteredInsights.map((insight) => (
          <div key={insight.id} className="insight-card">
            {/* Accent line */}
            <div className="insight-accent" />

            {/* Top */}
            <div className="insight-top">
              <div className="insight-type">
                <span className={`type-icon ${insight.type}`}>
                  {getTypeIcon(insight.type)}
                </span>
                <span className="type-label">
                  {getTypeLabel(insight.type)}
                </span>
              </div>

              <span
                className={`recommendation ${getRecommendationClass(
                  insight.recommendation
                )}`}
              >
                {insight.recommendation}
              </span>
            </div>

            {/* Content */}
            <h4 className="insight-title">{insight.title}</h4>
            <p className="insight-description">{insight.description}</p>

            {/* Metrics */}
            <div className="insight-metrics">
              {insight.metrics.map((metric, i) => (
                <div key={i} className="metric-pill">
                  <span>{metric.label}:</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>

            {/* Confidence */}
            <div className="confidence-row">
              <span>Confidence</span>
              <div className="confidence-bar">
                <div
                  className="confidence-fill"
                  style={{ width: `${insight.confidence}%` }}
                />
              </div>
              <strong>{insight.confidence}%</strong>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="insights-disclaimer">
        <Sparkles />
        <p>
          Insights are generated based on historical trends and market analysis.
          Always consult a financial advisor before making investment decisions.
        </p>
      </div>
    </section>
  );
};
