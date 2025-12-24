import './RentalDemandChart.css';

import { Users, Percent, Banknote } from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

/* =========================
   TYPES
========================= */
type RentalDemandItem = {
  city: string;
  month: string;
  monthIndex: number;
  yield: number;
  avgRent: number;
  demand: number;
};

type RentalDemandChartProps = {
  data: RentalDemandItem[];
};

export const RentalDemandChart = ({ data }: RentalDemandChartProps) => {
  if (!data || data.length === 0) return null;

  const latest = data[data.length - 1];

  const currentYield = latest.yield;
  const currentRent = latest.avgRent;
  const currentDemand = latest.demand;

  const getDemandLevel = (demand: number) => {
    if (demand >= 90) return { label: 'High', className: 'demand-high' };
    if (demand >= 70) return { label: 'Medium', className: 'demand-medium' };
    return { label: 'Low', className: 'demand-low' };
  };

  const demandLevel = getDemandLevel(currentDemand);

  return (
    <div className="rental-chart">
      {/* Header */}
      <div className="rental-header">
        <h3>Rental Demand Trends</h3>
        <p>Rental yield and demand analysis</p>
      </div>

      {/* Stats */}
      <div className="rental-stats">
        <div className="stat-card">
          <div className="stat-label">
            <Percent />
            <span>Rental Yield</span>
          </div>
          <strong>{currentYield}%</strong>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            <Banknote />
            <span>Avg Rent</span>
          </div>
          <strong>₹{(currentRent / 1000).toFixed(0)}k</strong>
        </div>

        <div className="stat-card">
          <div className="stat-label">
            <Users />
            <span>Demand</span>
          </div>
          <strong className={demandLevel.className}>
            {demandLevel.label}
          </strong>
        </div>
      </div>

      {/* Chart */}
      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="demandGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis domain={[60, 100]} tickLine={false} axisLine={false} />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="demand"
              stroke="#22c55e"
              strokeWidth={3}
              fill="url(#demandGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
