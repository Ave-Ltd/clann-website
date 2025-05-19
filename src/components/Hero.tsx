import styles from "../styles/Hero.module.css";
import { useRef, useEffect, useState } from "react";
import heroImage from "/src/assets/hero-image.png";
import businessGateway from "/src/assets/business-gateway.png";
import codeBase from "/src/assets/codebase.png";
import techScaler from "/src/assets/techscaler.png";

export const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageHeight, setImageHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const updateImageHeight = () => {
      if (textRef.current && imageRef.current) {
        const textHeight = textRef.current.offsetHeight;
        setImageHeight(textHeight * 1.1);
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
    <section
      id="home"
      className={`${styles.heroSection} bg-gradient-to-br from-blue-100 to-blue-300 dark:from-[#0a0a0a] dark:to-[#1a1a1a] text-gray-900 dark:text-white transition-colors duration-300`}
    >
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroImage}>
            <img
              ref={imageRef}
              src={heroImage}
              alt="Clann app in action"
              className={styles.heroImageResponsive}
              style={{ height: imageHeight }}
            />
          </div>

          <div className={styles.heroText} ref={textRef}>
            <h1 className={`${styles.heroTitleGradient} text-gray-900 dark:text-white`}>
              Club <span className="text-blue-700 dark:text-blue-400">Funding</span>
              <br /> Reinvented
            </h1>
            <p className={`${styles.heroSubtitle} text-gray-700 dark:text-gray-300`}>
              Clann helps Clubs unlock new income streams.
            </p>

            <div className={styles.heroButtons}>
              <button
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
                onClick={scrollToRegisterInterest}
              >
                Register Interest
              </button>
            </div>

            <div className={styles.supportedByBlock}>
              <p className="font-semibold text-gray-700 dark:text-gray-300">
                Proudly Supported By:
              </p>
              <div className={styles.supportersRow}>
                <img src={businessGateway} alt="Business Gateway" />
                <img src={codeBase} alt="CodeBase" />
                <img src={techScaler} alt="TechScaler" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
