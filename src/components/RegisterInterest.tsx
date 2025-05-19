import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import SuccessModal from "./ui/success-modal";
import backgroundImage from "../assets/grass-bg.jpg"; // Replace with your actual image path

export const RegisterInterest: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateEmail(email)) {
      setIsError(true);
      setErrorMessage("Please enter a valid email address.");
      setIsLoading(false);
      setModalOpen(true);
      return;
    }

    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      setIsError(true);
      setErrorMessage("Missing EmailJS credentials. Check console.");
      setIsLoading(false);
      setModalOpen(true);
      return;
    }

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          email,
          interest_only: true,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      console.log("EmailJS Response:", response);
      setIsError(false);
      setModalOpen(true);
      setEmail("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsError(true);
      setErrorMessage("There was an error submitting your interest. Please try again.");
      setModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="registerinterest"
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 dark:bg-black/60 backdrop-blur-sm z-0"></div>

      {/* Content Box */}
      <div className="relative z-10 max-w-xl mx-auto bg-white dark:bg-[#1a1a1a] border border-blue-400 rounded-2xl shadow-xl text-center p-8 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
          Ready to empower your Club?
        </h2>
        <p className="text-muted-foreground text-lg">
          Join the interest list while we build Clann.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:flex-1 border border-border rounded-md p-3 bg-input text-foreground focus:ring-2 focus:ring-[hsl(var(--primary))] focus:outline-none placeholder:text-muted-foreground"
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full sm:w-auto py-2 px-6 rounded-full font-semibold transition flex items-center justify-center ${
              isLoading
                ? "bg-muted text-muted-foreground cursor-not-allowed"
                : "bg-[hsl(var(--primary-accessible))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary-hover))]"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4 text-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Register Interest"
            )}
          </button>
        </form>
      </div>

      {/* Modal */}
      <SuccessModal
        isOpen={isModalOpen}
        isError={isError}
        message={errorMessage}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};
