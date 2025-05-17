import styles from "../styles/HowItWorks.module.css";
import { Medal, Map, Plane } from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <Plane className={styles.icon} />,
    title: "No Additional Work Required",
    description:
      "Funding should enhance operations, not add complexity or admin burden.",
  },
  {
    icon: <Medal className={styles.icon} />,
    title: "Built for Long-Term Stability",
    description:
      "We prioritise lasting financial sustainability over quick wins.",
  },
  {
    icon: <Map className={styles.icon} />,
    title: "Seamless & Effortless",
    description:
      "Clubs and organisations benefit naturally through their everyday actions.",
  },
];

export const HowItWorks = () => {
  return (
    <section  className={styles.section}>
      <div  id="fundraising"className={styles.textCenter}>
        <p className={styles.subtitle}>Passive Fundraising</p>
        <h2 className={styles.heading}>
          Unlocking New Growth & Funding <span>Opportunities</span>
        </h2>
        <p className={styles.description}>
          Every club and organisation needs financial stability. We believe modern technology can create new,
          sustainable funding opportunities—without adding extra workload to volunteers, committees, or organisers.
        </p>
      </div>

      <div className={styles.cardGrid}>
        {features.map(({ icon, title, description }) => (
          <div key={title} className={styles.card}>
            {icon}
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{description}</p>
          </div>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        <a href="#contact" className={styles.button}>
          Find Out More
        </a>
      </div>
    </section>
  );
};
