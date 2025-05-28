import { useState } from "react";
import styles from "../styles/services.module.css";
import {
  CalendarCheck,
  MessageSquare,
  Wallet,
  LockKeyhole,
  Bell,
  ShieldCheck,
} from "lucide-react";

import calendarGif from "../assets/gifs/calendar.gif";
import messageGif from "../assets/gifs/social-engagement.gif";
import walletGif from "../assets/gifs/money.gif";
import roleGif from "../assets/gifs/task-management.gif";
import notifyGif from "../assets/gifs/profit.gif";
import secureGif from "../assets/gifs/calendar.gif";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
  gif: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Smart Scheduling",
    description: "Create and manage training, matches, or events — all visible in one place.",
    icon: <CalendarCheck className={styles.icon} />,
    gif: calendarGif,
  },
  {
    title: "Built-in Messaging",
    description: "No more chasing messages across apps — keep it all in Clann.",
    icon: <MessageSquare className={styles.icon} />,
    gif: messageGif,
  },
  {
    title: "Club Wallet",
    description: "Track earnings, view balances, and withdraw funds with full transparency.",
    icon: <Wallet className={styles.icon} />,
    gif: walletGif,
  },
  {
    title: "Role-Based Access",
    description: "Staff, members, parents — everyone sees only what they need.",
    icon: <LockKeyhole className={styles.icon} />,
    gif: roleGif,
  },
  {
    title: "Automated Notifications",
    description: "Send the right updates to the right people — from payments to sessions, changes, and reminders.",
    icon: <Bell className={styles.icon} />,
    gif: notifyGif,
  },
  {
    title: "Secure Payments",
    description: "Collect fees, event payments, or subscriptions safely and efficiently.",
    icon: <ShieldCheck className={styles.icon} />,
    gif: secureGif,
  },
];

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = serviceList[activeIndex];

  return (
    <section
      id="features"
      className="bg-white dark:bg-[#1a1a1a] py-16 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-300"
    >
      <h2 className={`${styles.featuresTitle} text-3xl font-bold text-foreground mb-12`}>
        Features
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Buttons */}
          <div className="flex flex-col gap-3 w-[250px]">
            {serviceList.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-sm font-semibold px-5 py-3 rounded-lg border transition-all text-left whitespace-normal
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

          {/* GIF */}
          <div className="flex justify-center items-center max-w-xs w-full">
            <div className="rounded-xl shadow-md p-4 bg-white dark:bg-muted">
              <img
                src={activeFeature.gif}
                alt={activeFeature.title}
                className="max-w-[250px] md:max-w-[300px] h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 px-4">
          <p
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto"
            style={{ minHeight: "3.5rem" }} // prevent layout shift
          >
            {activeFeature.description}
          </p>
        </div>
      </div>
    </section>
  );
};
