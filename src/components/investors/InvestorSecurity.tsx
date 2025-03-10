import { motion } from "framer-motion"
import {
  ShieldCheck,
  Lock,
  CheckCircle,
  CreditCard,
  EyeOff,
} from "lucide-react"

const securityItems = [
  {
    icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    text: "GDPR & Child Data Protection",
  },
  {
    icon: <Lock className="w-5 h-5 text-blue-500" />,
    text: "Encryption at Rest & in Transit",
  },
  {
    icon: <CreditCard className="w-5 h-5 text-purple-500" />,
    text: "PCI-Compliant Payment Flows",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-yellow-500" />,
    text: "Regular Security Audits & Testing",
  },
  {
    icon: <EyeOff className="w-5 h-5 text-red-500" />,
    text: "Minimal Data Storage & No Third-Party Sharing",
  },
]

const InvestorSecurity = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card rounded-lg shadow-lg border border-border"
    >
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Lock className="w-6 h-6 text-primary" />
        Security &amp; Compliance
      </h2>
      <p className="text-muted-foreground">
        Keeping club data safe and compliant at all times
      </p>

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

      <div className="mt-6 text-sm text-muted-foreground">
        <p>
          Clann.App ensures that personal and payment data is protected with
          industry-standard encryption and never shared with advertisers. Clubs
          maintain full control over their information, and we adhere to strict
          child-safeguarding guidelines to keep our youngest members safe.
        </p>
      </div>
    </motion.div>
  )
}

export default InvestorSecurity
