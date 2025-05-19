import styles from "../styles/passiveFundraising.module.css";
import {
  DollarSign,
  Users,
  CalendarCheck,
} from "lucide-react";

interface BenefitsProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const benefits: BenefitsProps[] = [
  {
    icon: <DollarSign className={styles.icon} />,
    title: "More income, less effort.",
    description:
      "We help your Club earn in the background while you focus on running it.",
  },
  {
    icon: <Users className={styles.icon} />,
    title: "Supplement your fundraising, effortlessly.",
    description:
      "Clann adds new income streams without extra admin or volunteer hours.",
  },
  {
    icon: <CalendarCheck className={styles.icon} />,
    title: "Manage everything, without the mess.",
    description:
      "From scheduling to payments, Clann keeps it all in one place.",
  },
];


export const Benefits = () => {
  return (
    <section className={styles.section}>
      <div id="fundraising" className={styles.textCenter}>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
          Everything You Need to Run Your Club
        </h2>
        {/* <p className={styles.description}>
          Sub paragraph
        </p> */}
      </div>

      <div className={styles.cardGrid}>
        {benefits.map(({ icon, title, description }) => (
          <div key={title} className={styles.card}>
            {icon}
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{description}</p>
          </div>
        ))}
      </div>

      {/* <div className={styles.buttonWrapper}>
        <a href="#benefits" className={styles.button}>
          Find Out More
        </a>
      </div> */}
    </section>
  );
};
