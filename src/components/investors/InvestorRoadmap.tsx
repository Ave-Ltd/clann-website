import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface Milestone {
  title: string
  date: string
  status: "Completed" | "In Progress" | "Upcoming" | "Planned"
  color: string
  description?: string
}

const milestones: Milestone[] = [
  {
    title: "Initial Live & Functional Features Launch",
    date: "Q4 2023",
    status: "Completed",
    color: "text-green-500",
    description:
      "Scheduling, RSVPs, membership management, club feed, and communications are fully operational.",
  },
  {
    title: "Endorsement & Partnerships with SYFA",
    date: "Q1 2024",
    status: "In Progress",
    color: "text-yellow-500",
    description:
      "Working closely with SYFA to integrate and endorse Clann.App as a recommended solution for clubs.",
  },
  {
    title: "Passive Revenue & Card Linking",
    date: "Q2 2024",
    status: "Upcoming",
    color: "text-blue-500",
    description:
      "Launching cashback and revenue streams for clubs through everyday spending, integrated payment handling, and card-linked offers.",
  },
  {
    title: "Club Marketplace & Shop",
    date: "Q3 2024",
    status: "Planned",
    color: "text-blue-500",
    description:
      "Enabling second-hand equipment trading, official merchandise sales, and fundraising tools directly within Clann.App.",
  },
  {
    title: "Advanced Analytics & Growth Tools",
    date: "Q4 2024",
    status: "Planned",
    color: "text-blue-500",
    description:
      "Providing clubs with performance metrics, financial tracking, and strategic insights to drive long-term growth.",
  },
]

const InvestorRoadmap = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">🛠️ Roadmap & Features</h2>
      <p className="text-muted-foreground">Planned updates & key milestones</p>

      <div className="mt-6 space-y-4">
        {milestones.map(({ title, date, status, color, description }, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3 p-4 border rounded-lg shadow-sm bg-secondary"
            whileHover={{ scale: 1.02 }}
          >
            <CheckCircle className={`w-6 h-6 mt-1 ${color}`} />
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground">
                {date} – {status}
              </p>
              {description && (
                <p className="text-xs mt-1 text-muted-foreground">{description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default InvestorRoadmap
