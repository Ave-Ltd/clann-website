import { motion } from "framer-motion";

const InvestorBenefits = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-8"
      id="benefits"
    >
      {/* Section Headings */}
      <h2 className="text-2xl md:text-3xl font-bold">
        Helping Clubs Save Time, Reduce Costs, and Grow Financially
      </h2>
      <p className="text-base md:text-lg text-muted-foreground">
        Designed to support grassroots clubs with better management, seamless communication, and financial sustainability.
      </p>

      {/* Key Benefits */}
      <div className="space-y-6">
        {/* Benefit 1: Less Administrative Work */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            1. Less Administrative Work – More Time for Football
          </h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Automated scheduling, RSVP tracking, and team management.</li>
            <li>Integrated communication tools reduce admin burden.</li>
            <li>One platform for everything—no need for multiple apps.</li>
          </ul>
        </div>
        {/* Benefit 2: Stronger Community Engagement */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            2. Stronger Community Engagement
          </h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Club Feed & Messaging keep players, parents, and staff informed.</li>
            <li>Event management tools make training and matches easier to coordinate.</li>
            <li>Improved participation tracking helps clubs stay organised.</li>
          </ul>
        </div>
        {/* Benefit 3: Financial Sustainability & Growth */}
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            3. Financial Sustainability & Growth
          </h3>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Fundraising built into club operations (no extra work required).</li>
            <li>Planned cashback and revenue tools provide a sustainable income stream.</li>
            <li>Potential to reduce club fees and reinvest in facilities and development.</li>
          </ul>
        </div>
      </div>

      {/* Building a Stronger Future */}
      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-semibold">
          Building a Stronger Future for SYFA Clubs
        </h3>
        <p className="text-base md:text-lg text-muted-foreground">
          This platform is built to help clubs focus on football, not admin. By streamlining operations and unlocking financial opportunities, clubs can save time, reduce costs, and create a stronger future for grassroots football.
        </p>
      </div>

      {/* CTA */}
      {/* <div>
        <a
          href="#financials" // Adjust this if needed to point to the Passive Revenue & Club Financial Growth section
          className="inline-block px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
        >
          See How Clubs Can Secure Financial Stability →
        </a>
      </div> */}
    </motion.div>
  );
};

export default InvestorBenefits;
