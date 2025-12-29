import './CityComparison.css';

import { useTranslation } from "react-i18next";

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

import {
  cityComparisonData,
  CityWithLocalities,
} from '@/data/mockData';
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

  const { t } = useTranslation();

  const [sortBy, setSortBy] = useState<SortKey>('searchDemand');
  const [sortDirection, setSortDirection] =
    useState<'asc' | 'desc'>('desc');
  const [comparisonMode, setComparisonMode] =
    useState<ComparisonMode>('current');
  const [expandedCity, setExpandedCity] =
    useState<string | null>(null);

  const sortedData = [...cityComparisonData].sort((a, b) => {
    const multiplier = sortDirection === 'desc' ? -1 : 1;
    return (a[sortBy] - b[sortBy]) * multiplier;
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
      {/* Header */}
      <div className="city-header">
        <div>
          <h3>{t("city_wise_demand_comparison")}<InfoTooltip
              title={dataMethodology.demandScore.title}
              description={dataMethodology.demandScore.description}
              calculation={dataMethodology.demandScore.calculation}
            />
          </h3>
          <p>{t("compare_property_demand_across_major_cities_click_a_city_to_drill_down")}</p>
        </div>

        <ComparisonModeToggle
          value={comparisonMode}
          onChange={setComparisonMode}
        />
      </div>
      <div className="city-layout">
        {/* Chart */}
        <div className="city-chart">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={cityComparisonData}
              layout="vertical"
              margin={{ top: 10, right: 10, left: 60, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1f2937"
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
                width={60}
                fontSize={12}
              />
              <Tooltip />
              <Legend iconType="circle" iconSize={8} />
              <Bar
                dataKey="searchDemand"
                name="Search Demand"
                fill="#22c55e"
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Table */}
        <div className="city-table">
          <table>
            <thead>
              <tr>
                <th>{t("city")}</th>

                <th onClick={() => handleSort('searchDemand')}>
                  <span>
                    <Search />{t("search")}<ArrowUpDown />
                  </span>
                </th>

                <th onClick={() => handleSort('salesVolume')}>
                  <span>
                    <ShoppingBag />{t("sales")}<ArrowUpDown />
                  </span>
                </th>

                <th onClick={() => handleSort('rentalInquiries')}>
                  <span>
                    <MessageSquare />{t("rentals")}<ArrowUpDown />
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
                        {city.searchDemand}
                      </span>
                      {comparisonMode !== 'current' && (
                        <PercentageChange
                          value={
                            comparisonMode === 'yoy'
                              ? city.yoyChange
                              : city.qoqChange
                          }
                          size="sm"
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
