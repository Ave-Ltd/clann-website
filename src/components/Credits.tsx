// src/components/ui/CreditsPage.tsx
import { useNavigate } from "react-router-dom";
import styles from "../styles/credits.module.css";

export const CreditsPage = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.creditsSection}>
      <div className={styles.container}>
        <button onClick={() => navigate(-1)} className={styles.backButton}>
          ← Back
        </button>

        <h1 className={styles.creditsTitle}>Credits & Attributions</h1>
        <p className={styles.creditsSubtitle}>
          We acknowledge and thank the creators of the icons and illustrations used in this project.
        </p>

        <ul className={styles.creditsList}>
          <li>
            General icons provided by{" "}
            <a href="https://lucide.dev/" target="_blank" rel="noopener noreferrer">
              Lucide Icons
            </a>
          </li>
          <li>
            Scheduling:{" "}
            <a
              href="https://www.flaticon.com/free-animated-icons/time-management"
              title="time management animated icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Time management animated icons created by Freepik - Flaticon
            </a>
          </li>
          <li>
            Calendar:{" "}
            <a
              href="https://www.flaticon.com/free-animated-icons/calendar"
              title="calendar animated icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Calendar animated icons created by Freepik - Flaticon
            </a>
          </li>
          <li>
            Money:{" "}
            <a
              href="https://www.flaticon.com/free-animated-icons/online-payment"
              title="online payment animated icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Online payment animated icons created by Freepik - Flaticon
            </a>
          </li>
          <li>
            Social Engagement:{" "}
            <a
              href="https://www.flaticon.com/free-animated-icons/magnet"
              title="magnet animated icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Magnet animated icons created by Freepik - Flaticon
            </a>
          </li>
          <li>
            Financial Sustainability:{" "}
            <a
              href="https://www.flaticon.com/free-animated-icons/income"
              title="income animated icons"
              target="_blank"
              rel="noopener noreferrer"
            >
              Income animated icons created by Freepik - Flaticon
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
