import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", users: 500 },
  { month: "Feb", users: 1200 },
  { month: "Mar", users: 3000 },
  { month: "Apr", users: 6200 },
  { month: "May", users: 9200 },
];

const InvestorGrowth = () => {
  return (
    <div className="p-6 bg-card shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">📈 User Growth & Engagement</h2>
      <p className="text-muted-foreground">Tracking active users & retention</p>

      <div className="mt-6 w-full h-60">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#22c55e" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default InvestorGrowth;
