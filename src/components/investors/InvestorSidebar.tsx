import { useState } from "react"
import {
  LayoutDashboard,
  BookOpen,
  Gift,
  TrendingUp,
  ThumbsUp,
  Users,
  HelpCircle,
  UserPlus,
  LogOut,
  Moon,
  Sun,
} from "lucide-react"
import { useNavigate } from "react-router-dom"

interface SidebarProps {
  setActiveSection: (section: string) => void
  closeSidebar: () => void
}

// Updated sections with improved icons
const sections = [
  { id: "overview", label: "Overview", icon: <LayoutDashboard className="w-5 h-5" /> },
  { id: "aboutClann", label: "About Clann", icon: <BookOpen className="w-5 h-5" /> },
  { id: "benefits", label: "Club Benefits", icon: <Gift className="w-5 h-5" /> },
  { id: "passiveRevenue", label: "Club Revenue", icon: <TrendingUp className="w-5 h-5" /> },
  { id: "endorsement", label: "Endorsement", icon: <ThumbsUp className="w-5 h-5" /> },
  { id: "aboutAve", label: "About us", icon: <Users className="w-5 h-5" /> },
  { id: "faqs", label: "FAQs", icon: <HelpCircle className="w-5 h-5" /> },
  { id: "contact", label: "Join the Clann", icon: <UserPlus className="w-5 h-5" /> },
]

const InvestorSidebar = ({ setActiveSection, closeSidebar }: SidebarProps) => {
  const [localActive, setLocalActive] = useState<string>("overview")
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark"
  })

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("user-auth-token")
    navigate("/login")
  }

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    document.documentElement.classList.toggle("dark", newMode)
    localStorage.setItem("theme", newMode ? "dark" : "light")
  }

  return (
    <nav className="h-full bg-secondary text-foreground p-4 lg:border-r flex flex-col justify-between border-none !shadow-none">
      {/* Header Row with Dark Mode Toggle */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg lg:text-xl font-bold">SYFA Dashboard</h2>
        <button onClick={toggleDarkMode} className="p-2 rounded-md transition hover:bg-accent">
          {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-2">
        {sections.map(({ id, label, icon }) => (
          <li
            key={id}
            onClick={() => {
              setLocalActive(id)
              setActiveSection(id)
              if (window.innerWidth < 1024) closeSidebar()
            }}
            className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition ${
              localActive === id ? "bg-primary text-white" : "hover:bg-accent"
            }`}
          >
            {icon}
            {label}
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-auto w-full flex items-center gap-3 justify-center text-lg font-semibold p-3 rounded-md transition bg-destructive text-white hover:bg-red-700 shadow-md"
      >
        <LogOut className="w-6 h-6" />
        Logout
      </button>
    </nav>
  )
}

export default InvestorSidebar
