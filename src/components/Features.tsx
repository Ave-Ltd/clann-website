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
  return (
    <section className={styles.servicesSection}>
      <div id="features" className="text-center max-w-4xl mx-auto mb-16 px-4">
        {/* Large Heading */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
          Why Choose Clann.App
        </h2>

        {/* Subheading */}
        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
          Smart, Simple, and Sustainable Club Management
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          Clann.App brings everything you need together — from scheduling and
          communication to payments and passive fundraising — with simplicity
          and style.
        </p>
      </div>

      <div className={styles.cardWrapper}>
        {serviceList.map((service, index) => (
          <div key={index} className={styles.cardRow}>
            {index % 2 === 0 ? (
              <>
                <div className={styles.card}>
                  {service.icon}
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>
                </div>
                <div className={`${styles.ghostCard} ${styles.desktopOnly}`}>
                  <img
                    src={service.gif}
                    alt={`${service.title} gif`}
                    className={styles.ghostImage}
                  />
                </div>
              </>
            ) : (
              <>
                <div className={`${styles.ghostCard} ${styles.desktopOnly}`}>
                  <img
                    src={service.gif}
                    alt={`${service.title} gif`}
                    className={styles.ghostImage}
                  />
                </div>
                <div className={styles.card}>
                  {service.icon}
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
