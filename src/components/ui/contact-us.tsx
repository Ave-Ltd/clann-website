import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import SuccessModal from "./success-modal";

interface FormData {
  fullName: string;
  email: string;
  organisation: string;
  message: string;
  newsletter: boolean;
  followup: boolean;
}

type StringFieldKeys = {
  [K in keyof FormData]: FormData[K] extends string ? K : never;
}[keyof FormData];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    organisation: "",
    message: "",
    newsletter: false,
    followup: false,
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target;
    const fieldValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const validateForm = () => {
    if (!formData.fullName || !formData.email || !formData.message) {
      setIsError(true);
      setErrorMessage("Please fill in all required fields.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setIsError(true);
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validateForm()) {
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
      const emailData = { ...formData };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      console.log("EmailJS Response:", response);

      setIsError(false);
      setModalOpen(true);

      setFormData({
        fullName: "",
        email: "",
        organisation: "",
        message: "",
        newsletter: false,
        followup: false,
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsError(true);
      setErrorMessage("There was an error sending your message. Please try again.");
      setModalOpen(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {[ 
        { id: "fullName", label: "Full Name", type: "text" },
        { id: "email", label: "Email", type: "email" },
        { id: "organisation", label: "Organisation/Club Name (optional)", type: "text" },
      ].map(({ id, label, type }) => (
        <input
          key={id}
          type={type}
          id={id}
          name={id}
          placeholder={label}
          value={formData[id as StringFieldKeys]}
          onChange={handleChange}
          required={id !== "organisation"}
          className="w-full border border-border rounded-md p-3 bg-input text-foreground focus:ring-2 focus:ring-[hsl(var(--primary))] focus:outline-none placeholder:text-muted-foreground"
        />
      ))}

      <textarea
        id="message"
        name="message"
        placeholder="Questions / Feedback"
        value={formData.message}
        onChange={handleChange}
        required
        rows={5}
        className="w-full border border-border rounded-md p-3 bg-input text-foreground focus:ring-2 focus:ring-[hsl(var(--primary))] focus:outline-none placeholder:text-muted-foreground"
      />

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-2 px-4 rounded-md font-semibold transition flex items-center justify-center ${
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
          "Submit"
        )}
      </button>

      <SuccessModal
        isOpen={isModalOpen}
        isError={isError}
        message={errorMessage}
        onClose={() => setModalOpen(false)}
      />
    </form>
  );
};
