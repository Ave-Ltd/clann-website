import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organisation: "",
    message: "",
    newsletter: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target;

    // If this is a checkbox, use `checked`. Otherwise, use `value`.
    const fieldValue =
      e.target instanceof HTMLInputElement && type === "checkbox"
        ? e.target.checked
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // EmailJS integration
    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formData,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your message has been sent successfully!");
          setFormData({
            fullName: "",
            email: "",
            organisation: "",
            message: "",
            newsletter: false,
          });
        },
        (error) => {
          console.error(error.text);
          alert("There was an error sending your message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Let’s Connect & Build the Future Together
      </h2>

      {/* Improved paragraph styling */}
      <p className="text-xl text-muted-foreground text-center pt-4 pb-8 max-w-2xl mx-auto leading-relaxed">
        Clann.App is transforming how clubs and organisations operate—
        <span className="font-semibold"> seamlessly</span>,
        <span className="font-semibold"> efficiently</span>, and
        <span className="font-semibold"> sustainably</span>. Whether you’re
        looking for better management tools or long-term financial solutions,
        we’d love to discuss how we can help.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label htmlFor="organisation" className="block text-sm font-medium">
            Organisation/Club Name (if applicable)
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Additional Engagement Options */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="newsletter" className="text-sm">
            Sign up for our newsletter – Stay updated on platform developments.
          </label>
        </div>

        <div className="flex items-center">
          <a
            href="https://calendly.com/your-scheduling-link" // Replace with your scheduling link
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary underline"
          >
            Request a meeting – Schedule a call directly.
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-white rounded-md"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};
