import styles from "../styles/Services.module.css";
import {
  CalendarCheck,
  Settings,
  MessageSquare,
  ShieldCheck,
  Users,
} from "lucide-react";

// Importing GIFs from src/assets/gifs
import calendarGif from "../assets/gifs/calendar.gif";
import moneyGif from "../assets/gifs/money.gif";
import profitGif from "../assets/gifs/profit.gif";
import socialGif from "../assets/gifs/social-engagement.gif"; // <== confirm spelling!
import taskGif from "../assets/gifs/task-management.gif";


interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
  gif: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Seamless Management",
    description:
      "Streamline operations with our all-in-one dashboard, saving time and improving consistency.",
    icon: <Settings className={styles.icon} />,
    gif: taskGif,
  },
  {
    title: "Scheduling & Communication",
    description:
      "Stay connected with built-in scheduling, updates, and integrated messaging tools.",
    icon: <CalendarCheck className={styles.icon} />,
    gif: calendarGif,
  },
  {
    title: "Secure Membership & Event Payment",
    description: "Simplify finances with easy-to-use payment solutions.",
    icon: <ShieldCheck className={styles.icon} />,
    gif: moneyGif,
  },
  {
    title: "Community Engagement & Growth",
    description:
      "Strengthen relationships between organisations and their members.",
    icon: <Users className={styles.icon} />,
    gif: socialGif,
  },
  {
    title: "Unlocking Financial Sustainability",
    description:
      "Helping clubs and organisations become more self-sufficient.",
    icon: <MessageSquare className={styles.icon} />,
    gif: profitGif,
  },
];


export const Services = () => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.textCenter}>
        <p className={styles.subtitle}>Why Choose Clann.App</p>
        <h2 className={styles.title}>
          Smart, Simple, and Sustainable Club Management
        </h2>
        <p className={styles.description}>
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
