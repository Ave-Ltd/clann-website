import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const data = [
  { month: "Jan", users: 500 },
  { month: "Feb", users: 1200 },
  { month: "Mar", users: 3000 },
  { month: "Apr", users: 6200 },
  { month: "May", users: 9200 },
  { month: "Jun", users: 13000 },
  { month: "Jul", users: 18000 },
  { month: "Aug", users: 24000 },
  { month: "Sep", users: 31000 },
  { month: "Oct", users: 40000 },
  { month: "Nov", users: 50000 },
  { month: "Dec", users: 62000 },
];

const ClubGrowth = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">📈 Active User Growth & Engagement</h2>
      <p className="text-muted-foreground mb-4">
        Tracking the rapid increase in active users and engagement on Clann.App.
      </p>

      <div className="mt-6 w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip
              formatter={(value: string | number) => {
                if (typeof value === "number") {
                  return new Intl.NumberFormat("en").format(value);
                }
                return value;
              }}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#22c55e"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <p className="text-sm text-muted-foreground mt-4">
        Clann.App's user base is growing rapidly through organic adoption and active community
        engagement. As clubs discover the value of streamlined management and communication, our
        growth is set to accelerate even further.
      </p>
    </motion.div>
  );
};

export default ClubGrowth;
