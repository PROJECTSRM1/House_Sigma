import './PriceTrendsChart.css';

import { TrendingUp, TrendingDown } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

type PriceTrendsChartProps = {
  data: any[];
  propertyType: string;
};

export const PriceTrendsChart = ({
  data,
  propertyType,
}: PriceTrendsChartProps) => {
  /* =========================
     SELECT PROPERTY KEY
  ========================= */
  const dataKey =
    propertyType === 'Villa'
      ? 'villa'
      : propertyType === 'Commercial'
      ? 'commercial'
      : 'apartment';

  /* =========================
     CALCULATIONS
  ========================= */
  const currentPrice = data[data.length - 1]?.[dataKey] ?? 0;
  const previousPrice = data[0]?.[dataKey] ?? 0;

  const appreciation =
    previousPrice === 0
      ? 0
      : (((currentPrice - previousPrice) / previousPrice) * 100).toFixed(1);

  const isPositive = parseFloat(String(appreciation)) >= 0;

  /* =========================
     RENDER
  ========================= */
  return (
    <div className="price-chart">
      {/* ================= HEADER ================= */}
      <div className="price-header">
        <div>
          <h3>Property Price Trends</h3>
          <p>
            Avg price per sq.ft •{' '}
            {propertyType === 'All Types'
              ? 'All Properties'
              : propertyType}
          </p>
        </div>

        <div className="price-summary">
          <div className="price-value">
            <span>Avg. Price / sqft</span>
            <strong>₹{currentPrice.toLocaleString()}</strong>
          </div>

          <div
            className={`price-change ${
              isPositive ? 'positive' : 'negative'
            }`}
          >
            {isPositive ? <TrendingUp /> : <TrendingDown />}
            <span>
              {isPositive ? '+' : ''}
              {appreciation}%
            </span>
          </div>
        </div>
      </div>

      {/* ================= CHART ================= */}
      <div className="chart-wrapper large">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              fontSize={12}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              fontSize={12}
              tickFormatter={(value) =>
                `₹${(value / 1000).toFixed(0)}k`
              }
            />

            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
              formatter={(value: number) => [
                `₹${value.toLocaleString()}/sqft`,
                '',
              ]}
            />

            <Legend
              verticalAlign="top"
              height={36}
              iconType="circle"
              iconSize={8}
            />

            {/* Apartment */}
            {(propertyType === 'Apartment' ||
              propertyType === 'All Types') && (
              <Line
                type="monotone"
                dataKey="apartment"
                name="Apartment"
                stroke="#16a34a"
                strokeWidth={3}
                dot={false}
              />
            )}

            {/* Villa */}
            {(propertyType === 'Villa' ||
              propertyType === 'All Types') && (
              <Line
                type="monotone"
                dataKey="villa"
                name="Villa"
                stroke="#2563eb"
                strokeWidth={3}
                dot={false}
              />
            )}

            {/* Commercial */}
            {(propertyType === 'Commercial' ||
              propertyType === 'All Types') && (
              <Line
                type="monotone"
                dataKey="commercial"
                name="Commercial"
                stroke="#7c3aed"
                strokeWidth={3}
                dot={false}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
