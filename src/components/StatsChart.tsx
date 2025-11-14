import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './StatsChart.module.css';

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
  { month: 'Dec', medianPrice: 620000, totalSold: 380 },
];

const StatsChart = () => {
  return (
    <div className={styles.chartSection}>
      <h2 className={styles.title}>Ottawa Statistics</h2>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" angle={-45} textAnchor="end" height={80} />
          <YAxis yAxisId="left" orientation="left" stroke="#3b82f6" />
          <YAxis yAxisId="right" orientation="right" stroke="#f97316" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="right" dataKey="totalSold" fill="#f97316" name="Total Sold" />
          <Line yAxisId="left" type="monotone" dataKey="medianPrice" stroke="#3b82f6" strokeWidth={2} name="Median Price" />
        </ComposedChart>
      </ResponsiveContainer>
      <p className={styles.source}>
        Source: Based on analysis of information from past listings from respective real estate boards.
      </p>
    </div>
  );
};

export default StatsChart;
