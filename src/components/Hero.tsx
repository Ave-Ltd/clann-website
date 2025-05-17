import styles from "../styles/Hero.module.css";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { Supporters } from "./Supporters";
import heroImage from "/src/assets/hero-image.png";

export const Hero = () => {
  const navigate = useNavigate();

  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
  const updateImageHeight = () => {
    if (textRef.current && imageRef.current) {
      const textHeight = textRef.current.offsetHeight;
      setImageHeight(textHeight * 1.25); // Increase image height by 15%
    }
  };


    updateImageHeight();
    window.addEventListener("resize", updateImageHeight);

    return () => {
      window.removeEventListener("resize", updateImageHeight);
    };
  }, []);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroShapes}>
        <div className={styles.shapeOne}></div>
        <div className={styles.shapeTwo}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText} ref={textRef}>
            <h1 className={styles.heroTitle}>Club Funding. Reinvented</h1>
            <p className={styles.heroSubtitle}>
              Clann helps clubs to unlock new income streams.
            </p>

            <div className={styles.heroButtons}>
              <button
                className={styles.primaryBtn}
                onClick={() => navigate("/register")}
              >
                Download the app <i className="fas fa-arrow-right" />
              </button>
              <button
                className={styles.secondaryBtn}
                onClick={() => navigate("/login")}
              >
                Explore Club Funding <i className="fas fa-lock" />
              </button>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img
              ref={imageRef}
              src={heroImage}
              alt="Clann app in action"
              className={styles.heroImageResponsive}
              style={{ height: imageHeight }}
            />
          </div>
        </div>

        <Supporters />
      </div>
    </section>
  );
};
