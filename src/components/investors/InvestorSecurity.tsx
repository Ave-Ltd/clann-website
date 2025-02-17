import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle } from "lucide-react";

const securityItems = [
  { icon: <CheckCircle className="w-5 h-5 text-green-500" />, text: "GDPR Compliant" },
  { icon: <Lock className="w-5 h-5 text-blue-500" />, text: "Secure Data Encryption" },
  { icon: <ShieldCheck className="w-5 h-5 text-yellow-500" />, text: "Regular Security Audits" },
];

const InvestorSecurity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card rounded-lg shadow-lg border border-border"
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Lock className="w-6 h-6 text-primary" /> Security & Compliance
      </h2>
      <p className="text-muted-foreground">Ensuring data privacy and compliance</p>

      <ul className="mt-4 space-y-3">
        {securityItems.map(({ icon, text }, index) => (
          <motion.li
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg bg-secondary shadow-sm"
            whileHover={{ scale: 1.02 }}
          >
            {icon}
            <span className="text-lg">{text}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default InvestorSecurity;
