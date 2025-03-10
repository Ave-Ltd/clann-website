import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Affiliate Earnings", value: 15000, color: "#34D399" }, // Green
  { name: "Subscription Revenue", value: 25000, color: "#3B82F6" }, // Blue
  { name: "Ad Revenue", value: 10000, color: "#FBBF24" }, // Yellow
];

const InvestorFinancials = () => {
  const [showLabels, setShowLabels] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    // Delay label animation until pie chart completes spinning (~1.5s)
    const timer = setTimeout(() => setShowLabels(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg w-full max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">💰 Financial Insights</h2>
      <p className="text-muted-foreground">Revenue & funding breakdown</p>

      {/* Chart & Legend Container */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-6 gap-6">
        <ResponsiveContainer width="100%" height={300} className="max-w-md">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              animationDuration={1500} // Spins the chart in
              isAnimationActive
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={activeIndex === index ? "#fff" : "transparent"}
                  strokeWidth={activeIndex === index ? 3 : 0}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="horizontal" align="center" />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Animated Labels - Appear AFTER animation */}
      {showLabels && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 text-center"
        >
          {data.map((entry, index) => (
            <div key={index} className="flex items-center gap-2 text-sm font-medium justify-center">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              {entry.name}: ${entry.value.toLocaleString()}
            </div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default InvestorFinancials;
