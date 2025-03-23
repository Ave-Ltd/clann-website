import React, { useEffect, useState } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  isError?: boolean;
  message?: string;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  isError = false,
  message,
  onClose,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => setAnimate(true), 100);
    } else {
      setAnimate(false);
      setTimeout(() => setShowModal(false), 300);
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        animate ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-card text-card-foreground p-6 rounded-lg shadow-lg text-center max-w-md transition-all duration-300 transform ${
          animate ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
        }`}
      >
        {isError ? (
          <>
            <h2 className="text-2xl font-bold text-red-500">❌ Error</h2>
            <p className="mt-2 text-muted-foreground">
              {message || "Something went wrong. Please try again."}
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-[hsl(var(--primary-accessible))]">🎉 Success!</h2>
            <p className="mt-2 text-muted-foreground">
              Your message has been sent successfully and we will get back to you shortly.
            </p>
          </>
        )}

        <button
          onClick={onClose}
          className={`mt-4 px-6 py-2 rounded-lg transition text-white ${
            isError
              ? "bg-red-500 hover:bg-red-600"
              : "bg-[hsl(var(--primary-accessible))] hover:bg-[hsl(var(--primary-hover))] text-[hsl(var(--primary-foreground))]"
          }`}
        >
          {isError ? "Try Again" : "Close"}
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
