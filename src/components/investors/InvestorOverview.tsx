import { motion } from "framer-motion";
import { Users, DollarSign, Globe } from "lucide-react";

const stats = [
  { icon: <Users className="text-primary w-8 h-8" />, label: "15K+ Users", sub: "Active user base" },
  { icon: <DollarSign className="text-green-500 w-8 h-8" />, label: "$50K Revenue", sub: "From affiliate & ads" },
  { icon: <Globe className="text-blue-500 w-8 h-8" />, label: "10+ Countries", sub: "Global expansion" },
];

const InvestorOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">🚀 Clann Overview</h2>
      <p className="text-muted-foreground">Current Status & Business Insights</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {stats.map(({ icon, label, sub }, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-secondary"
            whileHover={{ scale: 1.05 }}
          >
            {icon}
            <h3 className="font-semibold mt-2">{label}</h3>
            <p className="text-sm text-muted-foreground">{sub}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InvestorOverview;
