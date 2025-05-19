import { useState } from "react";
import styles from "../styles/Services.module.css";
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
    <section id="features" className="bg-white dark:bg-[#1a1a1a] py-12 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-300">
      <h2 className={styles.featuresTitle}>Features</h2>

      <div className={styles.featuresGrid}>
        {/* Button list */}
        <div className={styles.featuresButtons}>
          {serviceList.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`${styles.featureButton} ${
                activeIndex === index ? styles.activeButton : ""
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Phone image */}
        <div className={styles.phoneMockupWrapper}>
          <img
            src={activeFeature.gif}
            alt={activeFeature.title}
            className={styles.phoneMockupImage}
          />
        </div>
      </div>

      {/* Feature description box */}
      <div className={styles.featureDescriptionBox}>
        <p className={styles.featureDescriptionText}>
          {activeFeature.description}
        </p>
      </div>
    </section>
  );
};
