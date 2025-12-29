import React from 'react';
import { useTranslation } from "react-i18next";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// CSS module for styles
import styles from './bcStatsChart.module.css';
import { useNavigate } from "react-router-dom";

// Mock data (example values)
const data = [
  { month: 'Jan', medianPrice: 580000, totalSold: 450 },
  { month: 'Feb', medianPrice: 595000, totalSold: 520 },
  { month: 'Mar', medianPrice: 610000, totalSold: 680 },
  { month: 'Apr', medianPrice: 625000, totalSold: 750 },
  { month: 'May', medianPrice: 640000, totalSold: 820 },
  { month: 'Jun', medianPrice: 655000, totalSold: 780 },
  { month: 'Jul', medianPrice: 645000, totalSold: 720 },
  { month: 'Aug', medianPrice: 638000, totalSold: 690 },
  { month: 'Sep', medianPrice: 630000, totalSold: 650 },
  { month: 'Oct', medianPrice: 635000, totalSold: 620 },
  { month: 'Nov', medianPrice: 628000, totalSold: 480 },
  { month: 'Dec', medianPrice: 620000, totalSold: 380 }
];

const StatsChart: React.FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <section className={styles.chartSection}>
      <h2 className={styles.title}>{t("british_columbia_statistics")}</h2>
      {/* Chart */}
      <div className={styles.chartWrapper}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 20, right: 24, left: 0, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" angle={-45} textAnchor="end" height={60} />
            <YAxis
              yAxisId="left"
              stroke="#0ea5a5"
              tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}k`}
            />
            <YAxis yAxisId="right" orientation="right" stroke="#f97316" />

            {/* Tooltip with explicit types (no `any`) */}
            <Tooltip
              formatter={(value: number | string, name: string) => {
                if (name === 'medianPrice') {
                  const num =
                    typeof value === 'string'
                      ? Number(value.replace(/[^0-9.-]+/g, ''))
                      : value;

                  const formatted = Number.isFinite(num)
                    ? `$${num.toLocaleString()}`
                    : String(value);

                  return [formatted, 'Median Price'];
                }

                return [value, name];
              }}
            />

            <Legend verticalAlign="top" height={36} />

            {/* Bars & Lines */}
            <Bar yAxisId="right" dataKey="totalSold" name="Total Sold" fill="#f97316" />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="medianPrice"
              stroke="#0ea5a5"
              strokeWidth={2}
              name="Median Price"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      {/* Footer row */}
      <div className={styles.chartFooter}>
        <div className={styles.sourceText}>
          <p className={styles.sourceLead}>{t(
            "source_based_on_analysis_of_information_from_past_listings_from_respective_real_estate_boards"
          )}</p>

          <ul className={styles.sourceList}>
            <li>{t("sales_records_in_real_estate_board_of_greater_vancouver")}</li>
            <li>{t("sales_records_in_fraser_valley_real_estate_board")}</li>
            <li>{t("sales_records_in_chilliwack_district_real_estate_board")}</li>
          </ul>
        </div>

        <div className={styles.buttonWrap}>
          <button
            className={styles.statsButton}
            onClick={() => navigate("/market-trends")}
            type="button"
          >{t("view_more_stats")}</button>
        </div>
      </div>
    </section>
  );
};

export default StatsChart;
