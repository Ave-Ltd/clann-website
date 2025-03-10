import { motion } from "framer-motion";

const InvestorContactAndNextSteps = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-8"
      id="contact"
    >
      {/* Headline & Subheadline */}
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold">
          We’re Here to Talk – Let’s Connect
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          Have questions? Want to discuss further? Here’s how to reach us.
        </p>
      </div>

      {/* 1. Ways to Get in Touch */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          1. Ways to Get in Touch
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            Ask a Question – If you have any queries, we’re happy to clarify.
          </li>
          <li>
            Schedule a Meeting – Arrange a discussion at a convenient time.
          </li>
          <li>
            Schedule a Call – A quick conversation to go through any key points.
          </li>
          <li>
            Register Interest – Let us know if you’d like to support or explore further opportunities.
          </li>
        </ul>
      </div>

      {/* 2. Contact Details */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          2. Contact Details
        </h3>
        <p>
          Email: <span className="font-medium">contact@example.com</span>
        </p>
        <p>
          Phone: <span className="font-medium">+1234567890</span>
        </p>
      </div>

      {/* 3. Call-to-Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
          Ask a Question
        </button>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
          Schedule a Meeting
        </button>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
          Schedule a Call
        </button>
        <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90">
          Register Interest
        </button>
      </div>
    </motion.div>
  );
};

export default InvestorContactAndNextSteps;
