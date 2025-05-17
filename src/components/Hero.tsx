import styles from "../styles/Hero.module.css";
import { useRef, useEffect, useState } from "react";
import heroImage from "/src/assets/hero-image.png";

export const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const updateImageHeight = () => {
      if (textRef.current && imageRef.current) {
        const textHeight = textRef.current.offsetHeight;
        setImageHeight(textHeight * 1.1); // Slightly smaller ratio
      }
    };

    updateImageHeight();
    window.addEventListener("resize", updateImageHeight);
    return () => window.removeEventListener("resize", updateImageHeight);
  }, []);

  const scrollToRegisterInterest = () => {
    const section = document.getElementById("registerinterest");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
                onClick={scrollToRegisterInterest}
              >
                Register Interest
              </button>

              {/* Future: Uncomment when app is live */}
              {/*
              <button
                className={styles.secondaryBtn}
                onClick={() => navigate("/register")}
              >
                Download the app <i className="fas fa-arrow-right" />
              </button>
              */}
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
      </div>
    </section>
  );
};
