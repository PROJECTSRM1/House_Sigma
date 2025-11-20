import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { Link } from "react-router-dom";
import styles from "./StatsChart.module.css";

const data = [
  { month: "Jan", medianPrice: 580000, totalSold: 450 },
  { month: "Feb", medianPrice: 595000, totalSold: 520 },
  { month: "Mar", medianPrice: 610000, totalSold: 680 },
  { month: "Apr", medianPrice: 625000, totalSold: 750 },
  { month: "May", medianPrice: 640000, totalSold: 820 },
  { month: "Jun", medianPrice: 655000, totalSold: 780 },
  { month: "Jul", medianPrice: 645000, totalSold: 720 },
  { month: "Aug", medianPrice: 638000, totalSold: 690 },
  { month: "Sep", medianPrice: 630000, totalSold: 650 },
  { month: "Oct", medianPrice: 635000, totalSold: 620 },
  { month: "Nov", medianPrice: 628000, totalSold: 480 },
  { month: "Dec", medianPrice: 620000, totalSold: 380 }
];

const StatsChart = () => {
  return (
    <div className={styles.chartSection}>
      {/* Heading */}
      <h2 className={styles.title}>Calgary Statistics *(All property types)</h2>

      {/* Legend ABOVE chart - CENTERED */}
      <div className={styles.topLegend}>
        <span className={styles.legendItemBlue}>● Median Price</span>
        <span className={styles.legendItemOrange}>■ Total Sold</span>
      </div>

      <ResponsiveContainer width="100%" height={380}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" angle={-45} textAnchor="end" height={60} />

          <YAxis yAxisId="left" stroke="#2563eb" />
          <YAxis yAxisId="right" orientation="right" stroke="#f59e0b" />

          <Tooltip />

          <Bar dataKey="totalSold" yAxisId="right" fill="#f59e0b" />

          <Line
            dataKey="medianPrice"
            yAxisId="left"
            stroke="#2563eb"
            strokeWidth={2}
            type="monotone"
          />
        </ComposedChart>
      </ResponsiveContainer>

      {/* Larger Source Text */}
      <p className={styles.source}>
        * Source: Based on analysis of information from past listings from
        respective real estate boards.
      </p>

      {/* Right aligned button - Navigate to Market Trends */}
      <div className={styles.buttonRow}>
        <Link to="/market-trends">
          <button className={styles.statsButton}>View More Stats</button>
        </Link>
      </div>
    </div>
  );
};

export default StatsChart;
