import { useState } from "react";
import { Users, BarChart2, CalendarCheck, Lock, Map, LogOut, Moon, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SidebarProps {
  setActiveSection: (section: string) => void;
}

const sections = [
  { id: "overview", label: "Overview", icon: <Users className="w-5 h-5" /> },
  { id: "roadmap", label: "Roadmap", icon: <Map className="w-5 h-5" /> },
  { id: "growth", label: "User Growth", icon: <BarChart2 className="w-5 h-5" /> },
  { id: "financials", label: "Financials", icon: <CalendarCheck className="w-5 h-5" /> },
  { id: "security", label: "Security", icon: <Lock className="w-5 h-5" /> },
];

const InvestorSidebar = ({ setActiveSection }: SidebarProps) => {
  const [active, setActive] = useState("overview");
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user-auth-token");
    navigate("/login");
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <nav className="h-full bg-secondary text-foreground p-4 lg:border-r flex flex-col justify-between border-none !shadow-none">



      
      {/* Header Row with Dark Mode Toggle (Now Inline) */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg lg:text-xl font-bold">Investor Dashboard</h2>
        
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-md transition hover:bg-accent"
        >
          {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-2">
        {sections.map(({ id, label, icon }) => (
          <li
            key={id}
            onClick={() => {
              setActive(id);
              setActiveSection(id);
            }}
            className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition ${
              active === id ? "bg-primary text-white" : "hover:bg-accent"
            }`}
          >
            {icon} {label}
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-auto w-full flex items-center gap-3 justify-center text-lg font-semibold p-3 rounded-md transition 
                  bg-destructive text-white hover:bg-red-700 shadow-md"
      >
        <LogOut className="w-6 h-6" />
        Logout
      </button>
    </nav>
  );
};

export default InvestorSidebar;
