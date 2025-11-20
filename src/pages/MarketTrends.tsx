// src/pages/MarketTrends.jsx
import React, { useMemo, useState } from "react";

// Relative imports
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./MarketTrends.css";

// Icons
import { TrendingDown, TrendingUp } from "lucide-react";

import FloatingChatButton from "../components/floatingWindowChatBot";
import ChatBot from "../components/chatbot";

// Recharts
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
  PieChart,
  Pie,
  Cell,
  ReferenceLine,
} from "recharts";

/* ==========================
   CONFIG / MULTIPLIERS
   ========================== */

const LOCATION_MULTIPLIERS = {
  "GTA – All": 1.0,
  "GTA – Central": 1.05,
  "GTA – North": 0.98,
  "Hamilton - Niagara": 0.92,
};

const COMMUNITY_MULTIPLIERS = {
  "Bayview Hill": 1.08,
  "Beaver Creek Business Park": 0.95,
  Crosby: 1.02,
};

const PROPERTY_MULTIPLIERS = {
  Detached: 1.12,
  "Semi-Detached": 0.95,
  "Freehold Townhouse": 1.0,
  "Condo Townhouse": 0.92,
  "Condo Apt": 0.88,
  Link: 0.9,
};

/* ==========================
   BASE / DUMMY DATA
   ========================== */

const BASE = {
  medianPriceData: [
    { month: "2020-01", medianPrice: 780000, daysOnMarket: 25, propertyDays: 32 },
    { month: "2020-05", medianPrice: 849000, daysOnMarket: 18, propertyDays: 27 },
    { month: "2020-09", medianPrice: 910000, daysOnMarket: 15, propertyDays: 22 },
    { month: "2021-01", medianPrice: 985000, daysOnMarket: 12, propertyDays: 18 },
    { month: "2021-05", medianPrice: 1100000, daysOnMarket: 8, propertyDays: 14 },
    { month: "2021-09", medianPrice: 1050000, daysOnMarket: 14, propertyDays: 21 },
    { month: "2022-01", medianPrice: 1150000, daysOnMarket: 10, propertyDays: 16 },
    { month: "2022-05", medianPrice: 1025000, daysOnMarket: 18, propertyDays: 28 },
    { month: "2022-09", medianPrice: 950000, daysOnMarket: 24, propertyDays: 35 },
    { month: "2023-01", medianPrice: 920000, daysOnMarket: 28, propertyDays: 38 },
    { month: "2023-05", medianPrice: 900000, daysOnMarket: 30, propertyDays: 40 },
    { month: "2023-09", medianPrice: 885000, daysOnMarket: 32, propertyDays: 42 },
  ],

  popularityData: [
    { month: "2023-01", hot: 65.5, medium: 55.2, cold: 45.1, soldCount: 980 },
    { month: "2023-03", hot: 71.2, medium: 60.5, cold: 50.3, soldCount: 1154 },
    { month: "2023-05", hot: 68.8, medium: 58.2, cold: 48.5, soldCount: 1050 },
    { month: "2023-07", hot: 72.5, medium: 62.1, cold: 52.0, soldCount: 1200 },
    { month: "2023-09", hot: 69.3, medium: 59.0, cold: 49.2, soldCount: 1100 },
    { month: "2023-11", hot: 75.1, medium: 64.5, cold: 54.2, soldCount: 1280 },
    { month: "2024-01", hot: 73.4, medium: 62.8, cold: 52.5, soldCount: 1180 },
    { month: "2024-03", hot: 77.26, medium: 66.2, cold: 55.8, soldCount: 1154 },
  ],

  listingsData: [
    { month: "2023-01", sold: 980, active: 2100, new: 1200 },
    { month: "2023-03", sold: 1236, active: 2462, new: 1450 },
    { month: "2023-05", sold: 1050, active: 2200, new: 1300 },
    { month: "2023-07", sold: 1200, active: 2350, new: 1380 },
    { month: "2023-09", sold: 1100, active: 2400, new: 1420 },
    { month: "2023-11", sold: 1280, active: 2300, new: 1350 },
  ],

  priceDistributionData: [
    { range: "100K", count: 120 },
    { range: "290K", count: 450 },
    { range: "570K", count: 890 },
    { range: "850K", count: 1200 },
    { range: "1130K", count: 780 },
    { range: "1410K", count: 340 },
    { range: "1690K", count: 120 },
  ],

  absorptionRateData: [
    { month: "2023-01", rate: 25 },
    { month: "2023-03", rate: 35 },
    { month: "2023-05", rate: 50 },
    { month: "2023-07", rate: 65 },
    { month: "2023-09", rate: 80 },
    { month: "2023-11", rate: 120 },
    { month: "2024-01", rate: 140 },
    { month: "2024-03", rate: 160 },
  ],

  rentRatioData: [
    { month: "2020-05", ratio: 8 },
    { month: "2020-09", ratio: 9 },
    { month: "2021-01", ratio: 11 },
    { month: "2021-05", ratio: 10 },
    { month: "2021-09", ratio: 12 },
    { month: "2022-01", ratio: 14 },
    { month: "2022-05", ratio: 16 },
    { month: "2022-09", ratio: 18 },
    { month: "2023-01", ratio: 15 },
    { month: "2023-05", ratio: 13 },
  ],

  rentalPriceData: [
    { month: "2023-01", price: 2200, leased: 450 },
    { month: "2023-03", price: 2350, leased: 520 },
    { month: "2023-05", price: 2500, leased: 580 },
    { month: "2023-07", price: 2650, leased: 610 },
    { month: "2023-09", price: 2800, leased: 650 },
    { month: "2023-11", price: 2900, leased: 680 },
  ],

  propertyTypeData: [
    { name: "Freehold Townhouse", value: 18, color: "#3b82f6" },
    { name: "Condo Apt", value: 35, color: "#06b6d4" },
    { name: "Detached", value: 25, color: "#10b981" },
    { name: "Link", value: 8, color: "#fbbf24" },
    { name: "Semi-Detached", value: 10, color: "#f97316" },
    { name: "Condo Townhouse", value: 3, color: "#ec4899" },
    { name: "Other", value: 1, color: "#a855f7" },
  ],
};

/* ==========================
   HELPERS: months, cloning
   ========================== */

const clone = (v) => JSON.parse(JSON.stringify(v));

function parseMonthStr(monthStr) {
  const [y, m] = monthStr.split("-");
  return { year: +y, month: +m };
}

function formatMonthStr(year, month) {
  const mm = month.toString().padStart(2, "0");
  return `${year}-${mm}`;
}

function addMonths(monthStr, add) {
  const { year, month } = parseMonthStr(monthStr);
  const total = year * 12 + (month - 1) + add;
  const newYear = Math.floor(total / 12);
  const newMonth = (total % 12) + 1;
  return formatMonthStr(newYear, newMonth);
}

function findClosestBefore(series, targetMonth) {
  const sorted = clone(series).sort((a, b) =>
    a.month > b.month ? 1 : a.month < b.month ? -1 : 0
  );
  for (let i = sorted.length - 1; i >= 0; i--) {
    if (sorted[i].month <= targetMonth) return sorted[i];
  }
  return sorted[0] || null;
}

/* ==========================
   FILTER + PREDICTION LOGIC
   ========================== */

const applyMultipliersToRecord = (rec, multiplier) => {
  const copy = {};
  Object.keys(rec).forEach((k) => {
    const val = rec[k];
    if (typeof val === "number") copy[k] = +(val * multiplier).toFixed(2);
    else copy[k] = val;
  });
  return copy;
};

const getMultiplier = (location, community, property) => {
  const loc = LOCATION_MULTIPLIERS[location] ?? 1;
  const com = COMMUNITY_MULTIPLIERS[community] ?? 1;
  const prop = PROPERTY_MULTIPLIERS[property] ?? 1;
  return loc * com * prop;
};

const sliceLastN = (arr, n) =>
  arr.length <= n ? clone(arr) : clone(arr.slice(arr.length - n));

function generatePredictionsForTimeSeries(series, numericKeys, maxRandomMonths = 3) {
  if (!series || series.length < 2) return clone(series || []);

  const base = clone(series);
  const last = base[base.length - 1];
  const secondLast = base[base.length - 2];
  const lastMonth = last.month;
  const slopes = {};
  numericKeys.forEach((k) => {
    slopes[k] = (last[k] - (secondLast[k] ?? last[k])) || 0;
  });

  const nextMonth = addMonths(lastMonth, 1);
  const nextPoint = { month: nextMonth, __predicted: true };
  numericKeys.forEach((k) => {
    const raw = (last[k] ?? 0) + slopes[k];
    const noise = raw * (Math.random() * 0.02 - 0.01);
    nextPoint[k] = +Math.max(0, raw + noise).toFixed(2);
  });

  const next12 = (function getNextMonthsList(lastMonthStr, count) {
    const arr = [];
    for (let i = 1; i <= count; i++) arr.push(addMonths(lastMonthStr, i));
    return arr;
  })(lastMonth, 12);

  const available = next12.slice(1);
  const pickCount = Math.min(maxRandomMonths, available.length);
  const picks = (() => {
    const out = new Set();
    while (out.size < Math.min(pickCount, available.length)) {
      out.add(Math.floor(Math.random() * available.length));
    }
    return [...out];
  })();

  const randomPoints = picks.map((p) => {
    const monthsAhead = (p as number) + 2;
    const mStr = addMonths(lastMonth, monthsAhead);
    const pt = { month: mStr, __predicted: true };
    numericKeys.forEach((k) => {
      const raw = (last[k] ?? 0) + slopes[k] * monthsAhead;
      const noise = raw * (Math.random() * 0.06 - 0.03);
      pt[k] = +Math.max(0, raw + noise).toFixed(2);
    });
    return pt;
  });

  const merged = [...base, nextPoint, ...randomPoints];
  merged.sort((a, b) =>
    a.month > b.month ? 1 : a.month < b.month ? -1 : 0
  );
  return merged;
}

function generatePredictionsForDistribution(dist, multiplier) {
  const base = clone(dist);
  const predicted = base.map((b) => ({
    range: `${b.range} (proj)`,
    count: Math.round(
      Math.max(0, b.count * (1 + (Math.random() * 0.12 - 0.06)) * multiplier)
    ),
    __predicted: true,
  }));
  return [...base, ...predicted];
}

function applyFiltersToSeries(
  series,
  numericKeys,
  selectedYears,
  multiplier,
  withPredictions
) {
  // ✔ Dynamic slicing so 5/10/15 years actually change the dataset
  const pointsForYears =
    selectedYears === 5 ? 4 :      // Last 4 points
    selectedYears === 10 ? 8 :     // Last 8 points
    12;                            // Last 12 points

  const sliced = series.length <= pointsForYears
    ? clone(series)
    : clone(series.slice(series.length - pointsForYears));

  const multiplied = sliced.map((r) =>
    applyMultipliersToRecord(r, multiplier)
  );

  if (withPredictions) {
    return generatePredictionsForTimeSeries(multiplied, numericKeys, 3);
  }

  return multiplied;
}


/* ==========================
   COMPONENT: MarketFilters
   (lifted-state compatible)
   ========================== */

const MarketFilters = ({
  selectedYears,
  setSelectedYears,
  location,
  setLocation,
  community,
  setCommunity,
  property,
  setProperty,
}) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const locations = [
    "GTA – All",
    "GTA – Central",
    "GTA – North",
    "GTA – East",
    "GTA – West",
    "Ottawa Area",
    "Hamilton - Niagara",
    "Central Ontario",
    "Southwestern Ontario",
    "Eastern Ontario",
  ];

  const Community = [
    "Bayview Hill",
    "Beaver Creek Business Park",
    "Crosby",
    "Devonsleigh",
    "Doncrest",
    "Harding",
    "Headford Business Park",
    "Jefferson",
    "Langstaff",
    "Mill Pond",
    "North Richvale",
    "Oak Ridges",
    "Oak Ridges Lake Wilcox",
    "Observatory",
    "Rouge Woods",
    "Rural Richmond Hill",
    "South Richvale",
    "Westbrook",
  ];

  const Property = [
    "Detached",
    "Semi-Detached",
    "Freehold Townhouse",
    "Condo Townhouse",
    "Condo Apt",
    "Link",
  ];


  return (
    <div className="market-filter-wrapper">
      <div className="market-filters">
        <div className="filter-tabs">
          <button
            className={`tab-btn ${selectedYears === 5 ? "active" : ""}`}
            onClick={() => setSelectedYears(5)}
          >
            5 Years
          </button>
          <button
            className={`tab-btn ${selectedYears === 10 ? "active" : ""}`}
            onClick={() => setSelectedYears(10)}
          >
            10 Years
          </button>
          <button
            className={`tab-btn ${selectedYears === 15 ? "active" : ""}`}
            onClick={() => setSelectedYears(15)}
          >
            15 Years
          </button>
        </div>

        <div className="dropdown-container">
          <button
            className="filter-select"
            onClick={() =>
              setOpenDropdown(openDropdown === "location" ? null : "location")
            }
          >
            {location} ▾
          </button>
          {openDropdown === "location" && (
            <div className="dropdown-menu">
              {locations.map((loc) => (
                <label className="dropdown-option" key={loc}>
                  <input
                    type="radio"
                    name="location"
                    value={loc}
                    checked={location === loc}
                    onChange={() => {
                      setLocation(loc);
                      setOpenDropdown(null);
                    }}
                  />
                  <span>{loc}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="dropdown-container">
          <button
            className="filter-select"
            onClick={() =>
              setOpenDropdown(
                openDropdown === "community" ? null : "community"
              )
            }
          >
            {community} ▾
          </button>
          {openDropdown === "community" && (
            <div className="dropdown-menu">
              {Community.map((c) => (
                <label className="dropdown-option" key={c}>
                  <input
                    type="radio"
                    name="community"
                    value={c}
                    checked={community === c}
                    onChange={() => {
                      setCommunity(c);
                      setOpenDropdown(null);
                    }}
                  />
                  <span>{c}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="dropdown-container">
          <button
            className="filter-select"
            onClick={() =>
              setOpenDropdown(
                openDropdown === "property" ? null : "property"
              )
            }
          >
            {property} ▾
          </button>
          {openDropdown === "property" && (
            <div className="dropdown-menu">
              {Property.map((p) => (
                <label className="dropdown-option" key={p}>
                  <input
                    type="radio"
                    name="property"
                    value={p}
                    checked={property === p}
                    onChange={() => {
                      setProperty(p);
                      setOpenDropdown(null);
                    }}
                  />
                  <span>{p}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ==========================
   COMPONENT: MarketStats
   (receives computed stats)
   ========================== */

const formatCurrency = (v) => {
  if (v == null) return "-";
  return v >= 1000 ? `$${Math.round(v).toLocaleString()}` : `$${v}`;
};

const formatPercent = (v) => {
  if (v == null || Number.isNaN(v)) return "-";
  return `${v > 0 ? "+" : ""}${v.toFixed(1)}%`;
};

const MarketStats = ({
  latestMonth,
  latestMedian,
  latestNewListings,
  change1y,
  change5y,
  change10y,
  statsTitle,
}) => {
  return (
    <div className="market-stats">
      <h1 className="market-stats-title">{statsTitle}</h1>

      <div className="market-stats-grid">
        <div className="stat-card">
          <div className="stat-header">
            <p className="stat-date">{latestMonth ?? "—"}</p>
            <p className="stat-label">Median Price</p>
          </div>
          <p className="stat-value">{formatCurrency(latestMedian)}</p>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <p className="stat-date">{latestMonth ?? "—"}</p>
            <p className="stat-label">New Listings</p>
          </div>
          <p className="stat-value">
            {latestNewListings != null ? latestNewListings.toLocaleString() : "-"}
          </p>
        </div>

        <div className="stat-card stat-changes">
          <div className="stat-change">
            <span className="change-label">1 Year Value Change</span>
            <span
              className={`change-value ${
                change1y != null && change1y < 0 ? "down" : "up"
              }`}
            >
              {change1y != null ? formatPercent(change1y) : "—"}
              {change1y != null && change1y < 0 ? (
                <TrendingDown className="change-icon" />
              ) : change1y != null ? (
                <TrendingUp className="change-icon" />
              ) : null}
            </span>
          </div>

          <div className="stat-change">
            <span className="change-label">5 Years Value Change</span>
            <span
              className={`change-value ${
                change5y != null && change5y < 0 ? "down" : "up"
              }`}
            >
              {change5y != null ? formatPercent(change5y) : "—"}
              {change5y != null && change5y < 0 ? (
                <TrendingDown className="change-icon" />
              ) : change5y != null ? (
                <TrendingUp className="change-icon" />
              ) : null}
            </span>
          </div>

          <div className="stat-change">
            <span className="change-label">10 Years Value Change</span>
            <span
              className={`change-value ${
                change10y != null && change10y < 0 ? "down" : "up"
              }`}
            >
              {change10y != null ? formatPercent(change10y) : "—"}
              {change10y != null && change10y < 0 ? (
                <TrendingDown className="change-icon" />
              ) : change10y != null ? (
                <TrendingUp className="change-icon" />
              ) : null}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==========================
   COMPONENT: MarketCharts
   (accepts datasets + chartHeight)
   ========================== */

const MarketCharts = ({ datasets, chartHeight }) => {
  return (
    <div className="market-charts">
      {/* 1 — Median Price & Days on Market */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Median Sold Price & Average Days On Market</h2>
          <p className="chart-subtitle">
            Property Days on Market does not reset when the property is delisted and quickly re-listed.
          </p>
        </div>

        <ResponsiveContainer height={chartHeight}>
          <ComposedChart data={datasets.medianPriceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
            <YAxis yAxisId="left" stroke="#1A9BFC" />
            <YAxis yAxisId="right" stroke="#F3722C" />
            <Tooltip />
            <Legend />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="medianPrice"
              fill="#cdeeff"
              stroke="#1A9BFC"
            />
            <Bar yAxisId="right" dataKey="daysOnMarket" fill="#F3722C" name="Days on Market" />
            <Bar yAxisId="right" dataKey="propertyDays" fill="#28A3B3" name="Property Days on Market" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* 2 — Popularity */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Popularity Score & Sold Listings</h2>
          <p className="chart-subtitle">
            The Popularity Score is a measure of online activity, like listing views, in this area.
          </p>
        </div>

        <ResponsiveContainer height={chartHeight}>
          <ComposedChart data={datasets.popularityData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
            <YAxis yAxisId="left" stroke="#FF0300" />
            <YAxis yAxisId="right" stroke="#f59525" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="hot" stroke="#FF0300" />
            <Line yAxisId="left" type="monotone" dataKey="medium" stroke="#10b981" />
            <Line yAxisId="left" type="monotone" dataKey="cold" stroke="#3b82f6" />
            <Bar yAxisId="right" dataKey="soldCount" fill="#f59525" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* 3 — Sold / Active / New Listings */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Sold, Active & New Listings</h2>
        </div>

        <ResponsiveContainer height={chartHeight}>
          <ComposedChart data={datasets.listingsData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="active" fill="#f59525" />
            <Bar dataKey="new" fill="#d1d5db" />
            <Line type="monotone" dataKey="sold" stroke="#69c6d5" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* 4 — Price Distribution */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Sold Price Distribution (Last 6 Months)</h2>
          <p className="chart-subtitle">Overview of sold price distribution for All property types.</p>
        </div>

        <ResponsiveContainer height={chartHeight}>
          <ComposedChart data={datasets.priceDistributionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="range" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#f59525" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* 5 — Absorption Rate */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Market Temperature (Absorption Rate)</h2>
        </div>

        <ResponsiveContainer height={chartHeight}>
          <AreaChart data={datasets.absorptionRateData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <ReferenceLine y={30} stroke="#ef4444" strokeDasharray="5 5" />
            <ReferenceLine y={60} stroke="#ef4444" strokeDasharray="5 5" />
            <ReferenceLine y={150} stroke="#ef4444" strokeDasharray="5 5" />
            <Area type="monotone" dataKey="rate" stroke="#3b82f6" fill="#cdeaff" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 6 — Rent Ratio */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Investor Demand (Rent Ratio)</h2>
        </div>
        <p className="chart-subtitle">Overview of sold price distribution for All property types.</p>

        <ResponsiveContainer height={chartHeight}>
          <AreaChart data={datasets.rentRatioData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="ratio" stroke="#3b82f6" fill="#ddeeff" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 7 — Rental Price */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Median Rental Price</h2>
        </div>

        <ResponsiveContainer height={chartHeight}>
          <ComposedChart data={datasets.rentalPriceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
            <YAxis yAxisId="left" stroke="#3b82f6" />
            <YAxis yAxisId="right" stroke="#f59525" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" dataKey="price" stroke="#3b82f6" />
            <Bar yAxisId="right" dataKey="leased" fill="#f59525" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* 8 — Pie Chart */}
      <div className="chart-section">
        <div className="chart-header">
          <h2 className="chart-title">Property Type Distribution</h2>
        </div>

        <ResponsiveContainer height={chartHeight}>
          <PieChart>
            <Pie
              data={datasets.propertyTypeData}
              cx="50%"
              cy="50%"
              outerRadius={Math.max(80, chartHeight / 3)}
              labelLine
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              dataKey="value"
            >
              {datasets.propertyTypeData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <p className="chart-source">* Source: Analysis of past listings (dummy data).</p>
    </div>
  );
};

/* ==========================
   COMPONENT: ContactForm
   ========================== */

const ContactForm = () => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Contact agent clicked");
  };

  return (
    <div className="contact-form">
      <h2 className="contact-form-title">Contact HouseSigma Agent</h2>

      <form className="contact-form-content" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name *" className="contact-form-input" />
        <div className="contact-form-input-group">
          <input type="tel" placeholder="Your Contact Number *" className="contact-form-input" />
          <input type="email" placeholder="Your Email Address *" className="contact-form-input" />
        </div>
        <textarea placeholder="Message" rows={4} className="contact-form-textarea" />
        <p className="contact-form-required">* Required field</p>
        <p className="contact-form-privacy">
          By submitting this form, I understand HouseSigma will share my information with registered real estate professionals.
        </p>
        <button type="button" onClick={handleClick} className="contact-form-submit-button">
          Contact Agent
        </button>
      </form>
    </div>
  );
};

/* ==========================
   MAIN PAGE: MarketTrends (final)
   ========================== */

const chartHeight = 400;

const MarketTrends = () => {
  const [selectedYears, setSelectedYears] = useState(10);
  const [location, setLocation] = useState("GTA – All");
  const [community, setCommunity] = useState("Bayview Hill");
  const [property, setProperty] = useState("Detached");
  const [withPredictions, setWithPredictions] = useState(true);

  const multiplier = useMemo(
    () => getMultiplier(location, community, property),
    [location, community, property]
  );

  // Prepare datasets for charts (with predictions)
  const datasets = useMemo(() => {
    const medianPriceData = applyFiltersToSeries(
      BASE.medianPriceData,
      ["medianPrice", "daysOnMarket", "propertyDays"],
      selectedYears,
      multiplier,
      withPredictions
    );

    const popularityData = applyFiltersToSeries(
      BASE.popularityData,
      ["hot", "medium", "cold", "soldCount"],
      selectedYears,
      multiplier,
      withPredictions
    );

    const listingsData = applyFiltersToSeries(
      BASE.listingsData,
      ["sold", "active", "new"],
      selectedYears,
      multiplier,
      withPredictions
    );

    const priceDistributionData = withPredictions
      ? generatePredictionsForDistribution(BASE.priceDistributionData, multiplier)
      : clone(BASE.priceDistributionData).map((r) => ({
          ...r,
          count: Math.round(r.count * multiplier),
        }));

    const absorptionRateData = applyFiltersToSeries(
      BASE.absorptionRateData,
      ["rate"],
      selectedYears,
      multiplier,
      withPredictions
    );

    const rentRatioData = applyFiltersToSeries(
      BASE.rentRatioData,
      ["ratio"],
      selectedYears,
      multiplier,
      withPredictions
    );

    const rentalPriceData = applyFiltersToSeries(
      BASE.rentalPriceData,
      ["price", "leased"],
      selectedYears,
      multiplier,
      withPredictions
    );

    const propertyTypeData = clone(BASE.propertyTypeData).map((p) => ({
      ...p,
      value: Math.round(p.value * multiplier),
    }));

    return {
      medianPriceData,
      popularityData,
      listingsData,
      priceDistributionData,
      absorptionRateData,
      rentRatioData,
      rentalPriceData,
      propertyTypeData,
    };
  }, [selectedYears, multiplier, withPredictions]);

  /* -------------------------
     Dynamic Market Stats (UPDATED - AGGREGATED OVER SLICED DATA)
     ------------------------- */

  // datasets.* are already sliced & multiplied (and may include predicted points)
  // For stats we ONLY want the real (non-predicted) points inside the sliced window:
  const medianSeries = datasets.medianPriceData.filter((d) => !d.__predicted);
  const listingsSeries = datasets.listingsData.filter((d) => !d.__predicted);

  // If there's no data, keep behavior safe
  const hasMedian = medianSeries && medianSeries.length > 0;
  const hasListings = listingsSeries && listingsSeries.length > 0;

  // Latest month = last record's month in the sliced series
  const latestMedianRec = hasMedian ? medianSeries[medianSeries.length - 1] : null;
  const latestMonth = latestMedianRec?.month ?? null;

  // 1) Median Price shown as AVERAGE of medianPrice across the sliced window
  const avgMedian =
    hasMedian
      ? Math.round(
          medianSeries.reduce((s, r) => s + (r.medianPrice ?? 0), 0) /
            medianSeries.length
        )
      : null;

  // 2) New Listings shown as SUM of 'new' across the sliced window
  const totalNewListings =
    hasListings
      ? listingsSeries.reduce((s, r) => s + (r.new ?? 0), 0)
      : null;

  // 3) Percent changes: compare FIRST vs LAST in the sliced window
  const medianFirst = hasMedian ? medianSeries[0].medianPrice ?? null : null;
  const medianLast = hasMedian ? medianSeries[medianSeries.length - 1].medianPrice ?? null : null;

  const computeChangeFromFirstToLast = (first, last) => {
    if (first == null || last == null || first === 0) return null;
    return ((last - first) / first) * 100;
  };
  // Changes are relative to the current sliced window:
  // - 1y / 5y / 10y labels remain (UI), but they will all compute using the same window
  //   the labels still make sense because the window changes when you click the tabs.
  const changeWindowPercent = computeChangeFromFirstToLast(medianFirst, medianLast);

  // For display we keep three fields but they all reflect the chosen window
  const change1y = changeWindowPercent;
  const change5y = changeWindowPercent;
  const change10y = changeWindowPercent;

  // Prepare values used in JSX
  const latestMedian = avgMedian;
  const latestNewListings = totalNewListings;

  const statsTitle = `Real Estate Market Trends – ${location}, ${community}, ${property}`;

  return (
    <div className="market-trends-page">
      <Navbar />
      <MarketFilters
        selectedYears={selectedYears}
        setSelectedYears={setSelectedYears}
        location={location}
        setLocation={setLocation}
        community={community}
        setCommunity={setCommunity}
        property={property}
        setProperty={setProperty}
      />

      <div className="market-trends-container">
        <main className="market-trends-main">
          <div className="market-trends-content">
            <div className="market-trends-main-content">
              <MarketStats
                latestMonth={latestMonth}
                latestMedian={latestMedian}
                latestNewListings={latestNewListings}
                change1y={change1y}
                change5y={change5y}
                change10y={change10y}
                statsTitle={statsTitle}
              />

              {/* small controls for predictions */}
              <div className="predictions-controls">
                <label className="predictions-checkbox">
                  <input
                    type="checkbox"
                    checked={withPredictions}
                    onChange={(e) => setWithPredictions(e.target.checked)}
                  />
                  <span>Show predictions (next month + up to 3 months)</span>
                </label>
                <div className="filters-summary">
                  {`Filters: ${selectedYears}y · ${location} · ${community} · ${property}`}
                </div>
              </div>

              <MarketCharts datasets={{
                medianPriceData: datasets.medianPriceData,
                popularityData: datasets.popularityData,
                listingsData: datasets.listingsData,
                priceDistributionData: datasets.priceDistributionData,
                absorptionRateData: datasets.absorptionRateData,
                rentRatioData: datasets.rentRatioData,
                rentalPriceData: datasets.rentalPriceData,
                propertyTypeData: datasets.propertyTypeData,
              }} chartHeight={chartHeight} />

              <ContactForm />
            </div>
          </div>
        </main>
      </div>
      <Footer />
        
    </div>
  );
};

export default MarketTrends;
