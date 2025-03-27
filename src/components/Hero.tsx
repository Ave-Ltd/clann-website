import styles from "../styles/Hero.module.css";
import { useNavigate } from "react-router-dom";
import { Sponsors } from "./Sponsors"; // ✅ Make sure the path matches your structure

export const Hero = () => {
  const navigate = useNavigate();

    return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroShapes}>
        <div className={styles.shapeOne}></div>
        <div className={styles.shapeTwo}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              The Future of <span>Club & Organisation</span> Management
            </h1>
            <p className={styles.heroSubtitle}>
              Empowering clubs, teams, and organisations with cutting-edge tools,
              seamless operations, and new funding opportunities.
            </p>

            <div className={styles.heroButtons}>
              <button className={styles.primaryBtn} onClick={() => navigate("/register")}>
                Learn More <i className="fas fa-arrow-right" />
              </button>
              <button className={styles.secondaryBtn} onClick={() => navigate("/login")}>
                Partner Access <i className="fas fa-lock" />
              </button>
            </div>

            {/* ✅ Replacing old placeholder with your animated component */}
            <Sponsors />
          </div>

          <div className={styles.heroImage}>
            <div className={styles.mobileMockup}>
              <div className={styles.mobileNotch}></div>
              <div className={styles.mobileScreen}></div>
              <div className={styles.mobileFrame}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
