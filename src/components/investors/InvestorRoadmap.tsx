import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const milestones = [
  { title: "Live Game Tracking", date: "Q2 2025", status: "Completed", color: "text-green-500" },
  { title: "AI Scheduling", date: "Q3 2025", status: "In Progress", color: "text-yellow-500" },
  { title: "iOS & Android Updates", date: "Q4 2025", status: "Upcoming", color: "text-blue-500" },
];

const InvestorRoadmap = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">🛠️ Roadmap & Features</h2>
      <p className="text-muted-foreground">Planned updates & key milestones</p>

      <div className="mt-6 space-y-4">
        {milestones.map(({ title, date, status, color }, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-3 p-4 border rounded-lg shadow-sm bg-secondary"
            whileHover={{ scale: 1.02 }}
          >
            <CheckCircle className={`w-6 h-6 ${color}`} />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">{date} – {status}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InvestorRoadmap;
