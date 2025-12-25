import './ComparisonModeToggle.css';

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
  const modes: {
    id: ComparisonMode;
    label: string;
    description: string;
  }[] = [
    { id: 'current', label: 'Current', description: 'Latest values' },
    { id: 'yoy', label: 'YoY', description: 'Year over Year' },
    { id: 'qoq', label: 'QoQ', description: 'Quarter over Quarter' },
  ];

  return (
    <div className="comparison-toggle">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => onChange(mode.id)}
          title={mode.description}
          className={`toggle-button ${
            value === mode.id ? 'active' : ''
          }`}
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
  showIcon?: boolean;
}

export const PercentageChange = ({
  value,
  size = 'sm',
  showIcon = true,
}: PercentageChangeProps) => {
  const isPositive = value >= 0;

  return (
    <span
      className={`percentage-badge ${size} ${
        isPositive ? 'positive' : 'negative'
      }`}
    >
      {showIcon &&
        (isPositive ? (
          <TrendingUp />
        ) : (
          <TrendingDown />
        ))}
      {isPositive ? '+' : ''}
      {value.toFixed(1)}%
    </span>
  );
};
