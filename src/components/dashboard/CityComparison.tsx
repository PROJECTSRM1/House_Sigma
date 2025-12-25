import './CityComparison.css';

import {
  ArrowUpDown,
  Search,
  ShoppingBag,
  MessageSquare,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { useState } from 'react';

import { cityComparisonData } from '@/data/mockData';
import {
  ComparisonModeToggle,
  ComparisonMode,
  PercentageChange,
} from './ComparisonModeToggle';
import { LocalityDrilldown } from './LocalityDrilldown';
import { InfoTooltip } from './InfoTooltip';
import { dataMethodology } from '@/data/mockData';

type SortKey = 'searchDemand' | 'salesVolume' | 'rentalInquiries';

export const CityComparison = () => {
  const [sortBy, setSortBy] = useState<SortKey>('searchDemand');
  const [sortDirection, setSortDirection] =
    useState<'asc' | 'desc'>('desc');
  const [comparisonMode, setComparisonMode] =
    useState<ComparisonMode>('current');
  const [expandedCity, setExpandedCity] =
    useState<string | null>(null);

  /* =========================
     MODE → METRIC KEY
  ========================= */
  const activeMetricKey =
    comparisonMode === 'current'
      ? 'searchDemand'
      : comparisonMode === 'yoy'
      ? 'yoyChange'
      : 'qoqChange';

  /* =========================
     SORTED DATA
  ========================= */
  const sortedData = [...cityComparisonData].sort((a, b) => {
    const multiplier = sortDirection === 'desc' ? -1 : 1;

    const aValue =
      comparisonMode === 'current'
        ? a[sortBy]
        : comparisonMode === 'yoy'
        ? a.yoyChange
        : a.qoqChange;

    const bValue =
      comparisonMode === 'current'
        ? b[sortBy]
        : comparisonMode === 'yoy'
        ? b.yoyChange
        : b.qoqChange;

    return (aValue - bValue) * multiplier;
  });

  const handleSort = (key: SortKey) => {
    if (sortBy === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortDirection('desc');
    }
  };

  const toggleCity = (city: string) => {
    setExpandedCity(expandedCity === city ? null : city);
  };

  return (
    <section className="city-section">
      {/* HEADER */}
      <div className="city-header">
        <div>
          <h3>
            City-wise Demand Comparison
            <InfoTooltip
              title={dataMethodology.demandScore.title}
              description={dataMethodology.demandScore.description}
              calculation={dataMethodology.demandScore.calculation}
            />
          </h3>
          <p>
            Compare property demand across major cities • Click a
            city to drill down
          </p>
        </div>

        <ComparisonModeToggle
          value={comparisonMode}
          onChange={setComparisonMode}
        />
      </div>

      <div className="city-layout">
        {/* ================= CHART ================= */}
        <div className="city-chart">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={sortedData}
              layout="vertical"
              margin={{ top: 10, right: 10, left: 60, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
              />

              <XAxis
                type="number"
                tickLine={false}
                axisLine={false}
                fontSize={12}
              />

              <YAxis
                dataKey="city"
                type="category"
                tickLine={false}
                axisLine={false}
                width={80}
                fontSize={12}
              />

              <Tooltip
                formatter={(value: number) =>
                  comparisonMode === 'current'
                    ? value
                    : `${value}%`
                }
              />

              <Legend iconType="circle" iconSize={8} />

              <Bar
                dataKey={activeMetricKey}
                name={
                  comparisonMode === 'current'
                    ? 'Search Demand'
                    : comparisonMode === 'yoy'
                    ? 'YoY Change (%)'
                    : 'QoQ Change (%)'
                }
                fill={
                  comparisonMode === 'current'
                    ? '#22c55e'
                    : comparisonMode === 'yoy'
                    ? '#2563eb'
                    : '#f59e0b'
                }
                radius={[0, 6, 6, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ================= TABLE ================= */}
        <div className="city-table">
          <table>
            <thead>
              <tr>
                <th>City</th>

                <th onClick={() => handleSort('searchDemand')}>
                  <span>
                    <Search /> Search <ArrowUpDown />
                  </span>
                </th>

                <th onClick={() => handleSort('salesVolume')}>
                  <span>
                    <ShoppingBag /> Sales <ArrowUpDown />
                  </span>
                </th>

                <th onClick={() => handleSort('rentalInquiries')}>
                  <span>
                    <MessageSquare /> Rentals <ArrowUpDown />
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>
              {sortedData.map((city) => (
                <>
                  <tr
                    key={city.city}
                    className={`city-row ${
                      expandedCity === city.city ? 'expanded' : ''
                    }`}
                    onClick={() => toggleCity(city.city)}
                  >
                    <td>
                      <div className="city-name">
                        {expandedCity === city.city ? (
                          <ChevronUp />
                        ) : (
                          <ChevronDown />
                        )}
                        {city.city}
                      </div>
                    </td>

                    <td className="right">
                      <span className="primary">
                        {comparisonMode === 'current'
                          ? city.searchDemand
                          : `${comparisonMode === 'yoy'
                              ? city.yoyChange
                              : city.qoqChange}%`}
                      </span>

                      {comparisonMode !== 'current' && (
                        <PercentageChange
                          value={
                            comparisonMode === 'yoy'
                              ? city.yoyChange
                              : city.qoqChange
                          }
                        />
                      )}
                    </td>

                    <td className="right">
                      {city.salesVolume.toLocaleString()}
                    </td>

                    <td className="right">
                      {city.rentalInquiries.toLocaleString()}
                    </td>
                  </tr>

                  {expandedCity === city.city && (
                    <tr>
                      <td colSpan={4} className="drilldown-cell">
                        <LocalityDrilldown
                          localities={city.localities}
                          cityName={city.city}
                        />
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
