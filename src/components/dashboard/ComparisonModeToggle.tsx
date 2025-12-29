import './ComparisonModeToggle.css';

import { useTranslation } from "react-i18next";

import { TrendingUp, TrendingDown } from 'lucide-react';

export type ComparisonMode = 'current' | 'yoy' | 'qoq';

interface ComparisonModeToggleProps {
  value: ComparisonMode;
  onChange: (mode: ComparisonMode) => void;
}

export const ComparisonModeToggle = ({
  value,
  onChange,
}: ComparisonModeToggleProps) => {
    const { t } = useTranslation();
  const modes = [
   { id: 'current', label: 'Current', description: 'Latest values' },
    { id: 'yoy', label: 'YoY', description: 'Year over Year' },
    { id: 'qoq', label: 'QoQ', description: 'Quarter over Quarter' },
  ] as const;

  return (
    <div className="comparison-toggle">
      {modes.map((mode) => (
        <button
          key={mode.id}
          className={`toggle-button ${
            value === mode.id ? 'active' : ''
          }`}
          onClick={() => onChange(mode.id)}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
};

interface PercentageChangeProps {
  value: number;
  size?: 'sm' | 'md';
}

export const PercentageChange = ({
  value,
  size = 'sm',
}: PercentageChangeProps) => {
  const isPositive = value >= 0;

  return (
    <span
      className={`percentage-badge ${size} ${
        isPositive ? 'positive' : 'negative'
      }`}
    >
      {isPositive ? <TrendingUp /> : <TrendingDown />}
      {isPositive ? '+' : ''}
      {value.toFixed(1)}%
    </span>
  );
};
