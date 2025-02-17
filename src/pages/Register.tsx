import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [locale, setLocale] = useState("English");
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Detect user's language from the browser
    const browserLang = navigator.language || navigator.languages[0];

    // Map language codes to image filenames
    const langMap: { [key: string]: string } = {
      en: "English",
      fr: "French",
      de: "German",
      es: "Spanish",
      it: "Italian",
      nl: "Dutch",
      pl: "Polish",
      pt: "Portuguese",
      ru: "Russian",
      ja: "Japanese",
      zh: "Chinese",
      ko: "Korean",
      ar: "Arabic",
      et: "Estonian",
    };

    const detectedLang = langMap[browserLang.split("-")[0]] || "English"; // Default to English
    setLocale(detectedLang);
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
      {/* Card container */}
      <div className="max-w-lg w-full bg-card border border-border shadow-lg rounded-xl p-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Download the Clann App
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Get started by downloading the Clann app from your preferred app store.
        </p>

        {/* Store Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          {/* Google Play Store Badge */}
          <a
            href="https://play.google.com/store/apps/details?id=com.clann.app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition transform flex items-center"
          >
            <img
              src={`/src/assets/google_icons/GetItOnGooglePlay_Badge_Web_color_${locale}.png`}
              alt="Get it on Google Play"
              className="h-14 md:h-16 w-auto"
            />
          </a>

          {/* Apple App Store Badge */}
          <a
            href="https://apps.apple.com/us/app/clann-app/id123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition transform flex items-center"
          >
            <img
              src={`/src/assets/apple_icons/Download_on_the_App_Store_Badge_${locale}_RGB_blk_100217.svg`}
              alt="Download on the App Store"
              className="h-14 md:h-16 w-auto"
            />
          </a>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
        >
          ← Back to Home
        </button>
      </div>
    </section>
  );
};
