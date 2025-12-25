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
  const modes = [
    { id: 'current', label: 'Current' },
    { id: 'yoy', label: 'YoY' },
    { id: 'qoq', label: 'QoQ' },
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
