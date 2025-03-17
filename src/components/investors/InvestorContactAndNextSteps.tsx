import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Loader } from "lucide-react";

const InvestorContactAndNextSteps = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send("your_service_id", "your_template_id", formData, "your_public_key")
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
          setFormData({ fullName: "", email: "", phone: "", message: "" });
          setTimeout(() => setSuccess(false), 3000);
        },
        (error) => {
          console.error(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-8 text-foreground"
      id="contact"
    >
      {/* Headline & Subheadline */}
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          Register Your Interest or Learn More
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          Be part of something bigger—help shape the future of Scottish grassroots football.
        </p>
      </div>

      {/* How You Can Get Involved */}
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold text-primary mb-3">How You Can Get Involved</h3>
        <ul className="space-y-2 text-base md:text-lg">
          <li><span className="font-semibold">Ask a Question:</span> Need more information? We’re happy to clarify.</li>
          <li><span className="font-semibold">Provide Feedback:</span> Share your thoughts on how Clann.App can better support Scottish football.</li>
          <li><span className="font-semibold">Express Your Interest:</span> If this aligns with your organisation, let us know how it could benefit your network of clubs.</li>
        </ul>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-foreground">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 bg-background text-foreground focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 bg-background text-foreground focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground">Phone Number (Optional)</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 bg-background text-foreground focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground">Questions/Feedback</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 bg-background text-foreground focus:ring-primary focus:border-primary"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-primary text-white rounded-md hover:bg-primary/90 flex justify-center items-center"
          disabled={loading}
        >
          {loading ? <Loader className="animate-spin w-5 h-5" /> : "Send Message"}
        </button>
      </form>

      {success && (
        <p className="text-green-600 font-semibold text-center mt-4">Your message has been sent successfully!</p>
      )}
    </motion.div>
  );
};

export default InvestorContactAndNextSteps;
