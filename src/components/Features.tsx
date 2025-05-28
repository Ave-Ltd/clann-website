import { useState } from "react";
import { useTheme } from "@/context/useTheme";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/services.module.css";
import {
  CalendarCheck,
  MessageSquare,
  Wallet,
  LockKeyhole,
  Bell,
  ShieldCheck,
} from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  key: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    key: "scheduling",
    title: "Smart Scheduling",
    description: "Create and manage training, matches, or events — all visible in one place.",
    icon: <CalendarCheck className={styles.icon} />,
  },
  {
    key: "messaging",
    title: "Built-in Messaging",
    description: "No more chasing messages across apps — keep it all in Clann.",
    icon: <MessageSquare className={styles.icon} />,
  },
  {
    key: "wallet",
    title: "Club Wallet",
    description: "Track earnings, view balances, and withdraw funds with full transparency.",
    icon: <Wallet className={styles.icon} />,
  },
  {
    key: "roles",
    title: "Role-Based Access",
    description: "Staff, members, parents — everyone sees only what they need.",
    icon: <LockKeyhole className={styles.icon} />,
  },
  {
    key: "notifications",
    title: "Automated Notifications",
    description: "Send the right updates to the right people — from payments to sessions, changes, and reminders.",
    icon: <Bell className={styles.icon} />,
  },
  {
    key: "payments",
    title: "Secure Payments",
    description: "Collect fees, event payments, or subscriptions safely and efficiently.",
    icon: <ShieldCheck className={styles.icon} />,
  },
];

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();
  const activeFeature = serviceList[activeIndex];

  const getImagePath = (key: string) => {
    return new URL(
      `/src/assets/screenshots/${theme === "dark" ? "dark" : "light"}/${key}.png`,
      import.meta.url
    ).href;
  };

  return (
    <section
      id="features"
      className="bg-white dark:bg-[#1a1a1a] py-12 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-300"
    >
      <h2 className={`${styles.featuresTitle} text-3xl font-bold text-foreground mb-8`}>
        Features
      </h2>

      <div className={styles.featuresGrid}>
        {/* Button list */}
        <div className={`${styles.featuresButtons} flex flex-wrap justify-center gap-4`}>
          {serviceList.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`text-sm font-semibold px-5 py-3 rounded-lg border transition-all
                ${
                  activeIndex === index
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Phone frame with swipe-style animated screen (no speaker bar) */}
        <div className="flex justify-center mt-8 min-h-[320px] relative">
          <div className="relative w-[260px] md:w-[300px] aspect-[9/19.5] rounded-[2rem] border-[6px] border-neutral-700 bg-black shadow-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeFeature.key + theme}
                src={getImagePath(activeFeature.key)}
                alt={activeFeature.title}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full object-cover z-10"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Feature description with fixed height */}
      <div className="mt-8 min-h-[60px]">
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          {activeFeature.description}
        </p>
      </div>
    </section>
  );
};
