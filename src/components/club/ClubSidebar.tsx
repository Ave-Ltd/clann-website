import {
  LayoutDashboard,
  BookOpen,
  TrendingUp,
  Users,
  HelpCircle,
  UserPlus,
  LogOut,
  Moon,
  Sun,
  Award,
  BadgeCheck,
} from "lucide-react";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/useTheme";

interface SidebarProps {
  currentSection: string;
  setActiveSection: (section: string) => void;
  closeSidebar: () => void;
}

const sections = [
  { id: "overview", label: "Overview", icon: <LayoutDashboard className="w-5 h-5" /> },
  { id: "aboutClann", label: "About Clann", icon: <BookOpen className="w-5 h-5" /> },
  { id: "benefits", label: "Club Benefits", icon: <Award className="w-5 h-5" /> },
  { id: "memberBenefits", label: "Member Benefits", icon: <BadgeCheck className="w-5 h-5" /> },
  { id: "passiveRevenue", label: "Club Revenue", icon: <TrendingUp className="w-5 h-5" /> },
  { id: "aboutAve", label: "About us", icon: <Users className="w-5 h-5" /> },
  { id: "faqs", label: "FAQs", icon: <HelpCircle className="w-5 h-5" /> },
  { id: "contact", label: "Join the Clann", icon: <UserPlus className="w-5 h-5" /> },
];

const ClubSidebar = ({ currentSection, setActiveSection, closeSidebar }: SidebarProps) => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleLogout = () => {
    localStorage.removeItem("user-auth-token");
    navigate("/login");
  };

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Close sidebar on outside click (mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        window.innerWidth < 1024
      ) {
        closeSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeSidebar]);

  return (
    <nav
      ref={sidebarRef}
      className="h-full p-4 flex flex-col justify-between shadow-none bg-white dark:bg-muted text-foreground lg:border-r lg:border-border/0"
    >
      {/* Header Row with Dark Mode Toggle */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg lg:text-xl font-bold">Club Dashboard</h2>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-md transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-primary" />
          ) : (
            <Moon className="w-5 h-5 text-primary" />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-2">
        {sections.map(({ id, label, icon }) => (
          <li
            key={id}
            onClick={() => {
              setActiveSection(id);
              closeSidebar();
            }}
            className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-colors ${currentSection === id
                ? "bg-yellow-400 text-black dark:bg-primary dark:text-primary-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
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
        className={`mt-auto w-full flex items-center justify-center gap-2 rounded-xl px-4 py-3
    text-sm font-medium transition-colors
    bg-red-100 text-red-700 hover:bg-red-200
    dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800 shadow-sm`}
      >
        <LogOut className="w-5 h-5" />
        Logout
      </button>


    </nav>
  );
};

export default ClubSidebar;
