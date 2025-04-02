import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowUpToLine } from "lucide-react";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showTopBtn && (
        <Button
          onClick={goToTop}
          size="icon"
          className="
            fixed z-50 
            bottom-4 right-4 
            sm:bottom-5 sm:right-5 
            md:bottom-6 md:right-6
            p-3 
            rounded-full 
            bg-primary 
            text-white 
            shadow-lg 
            flex items-center justify-center 
            transition-transform 
            hover:scale-105
          "
          aria-label="Scroll to top"
        >
          <ArrowUpToLine className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
        </Button>
      )}
    </>
  );
};
