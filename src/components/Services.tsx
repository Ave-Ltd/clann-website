import styles from "../styles/Services.module.css";
import {
  CalendarCheck,
  Settings,
  MessageSquare,
  ShieldCheck,
  Users,
} from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Seamless Management",
    description:
      "Streamline operations with our all-in-one dashboard, saving time and improving consistency.",
    icon: <Settings className={styles.icon} />,
  },
  {
    title: "Scheduling & Communication",
    description:
      "Stay connected with built-in scheduling, updates, and integrated messaging tools.",
    icon: <CalendarCheck className={styles.icon} />,
  },
  {
    title: "Secure Membership & Event Payment",
    description: "Simplify finances with easy-to-use payment solutions.",
    icon: <ShieldCheck className={styles.icon} />,
  },
  {
    title: "Community Engagement & Growth",
    description:
      "Strengthen relationships between organisations and their members.",
    icon: <Users className={styles.icon} />,
  },
  {
    title: "Unlocking Financial Sustainability",
    description:
      "Helping clubs and organisations become more self-sufficient.",
    icon: <MessageSquare className={styles.icon} />,
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
        {/* Row 1 */}
        <div className={`${styles.card} ${styles.cardGroup1}`}>
          {serviceList[0].icon}
          <h3 className={styles.cardTitle}>{serviceList[0].title}</h3>
          <p className={styles.cardDesc}>{serviceList[0].description}</p>
        </div>
        <div className={`${styles.ghostCard} ${styles.ghostGroup1}`} />

        {/* Row 2 */}
        <div className={`${styles.ghostCard} ${styles.ghostGroup2}`} />
        <div className={`${styles.card} ${styles.cardGroup2}`}>
          {serviceList[1].icon}
          <h3 className={styles.cardTitle}>{serviceList[1].title}</h3>
          <p className={styles.cardDesc}>{serviceList[1].description}</p>
        </div>

        {/* Row 3 */}
        <div className={`${styles.card} ${styles.cardGroup3}`}>
          {serviceList[2].icon}
          <h3 className={styles.cardTitle}>{serviceList[2].title}</h3>
          <p className={styles.cardDesc}>{serviceList[2].description}</p>
        </div>
        <div className={`${styles.ghostCard} ${styles.ghostGroup3}`} />

        {/* Row 4 */}
        <div className={`${styles.ghostCard} ${styles.ghostGroup4}`} />
        <div className={`${styles.card} ${styles.cardGroup4}`}>
          {serviceList[3].icon}
          <h3 className={styles.cardTitle}>{serviceList[3].title}</h3>
          <p className={styles.cardDesc}>{serviceList[3].description}</p>
        </div>

        {/* Row 5 */}
        <div className={`${styles.card} ${styles.cardGroup5}`}>
          {serviceList[4].icon}
          <h3 className={styles.cardTitle}>{serviceList[4].title}</h3>
          <p className={styles.cardDesc}>{serviceList[4].description}</p>
        </div>
        <div className={`${styles.ghostCard} ${styles.ghostGroup5}`} />
      </div>
    </section>
  );
};
