import styles from "../styles/hero.module.css";
import { useRef } from "react";
import { useTheme } from "@/context/useTheme";

import heroImageLight from "../assets/hero-image-light.png";
import heroImageDark from "../assets/hero-image-dark.png";

import businessGateway from "../assets/business-gateway.png";
import codeBase from "../assets/codebase.png";
import techScaler from "../assets/techscaler.png";

export const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const heroImage = theme === "dark" ? heroImageDark : heroImageLight;

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 py-10 md:py-16">
          {/* LEFT: Phone Shell */}
          <div className="relative w-[260px] md:w-[290px] aspect-[9/19.5] bg-black border-[6px] border-neutral-700 rounded-[2rem] shadow-xl overflow-hidden">
            {/* Camera hole */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-black rounded-full z-10" />

            {/* App screenshot */}
            <img
              src={heroImage}
              alt="Clann app in action"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT: Text */}
          <div className="text-center md:text-left max-w-xl" ref={textRef}>
            <h1 className={`${styles.heroTitleGradient} ${styles.flagText}`}>
  Club Funding<br />Reinvented
</h1>
            <p className={`${styles.heroSubtitle} text-gray-700 dark:text-gray-300 mt-4`}>
              Clann helps Clubs unlock new income streams.
            </p>

            <div className={`${styles.heroButtons} mt-6`}>
              <button
                onClick={scrollToRegisterInterest}
                className="btn-primary-lg"
              >
                Register Interest
              </button>
            </div>

            <div className={`${styles.supportedByBlock} mt-8`}>
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
