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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Less Admin, More Football */}
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
            Less Admin, More Football
          </h3>
          <div className="space-y-3">
            {[ 
              "Automated scheduling, RSVP tracking, and team management.",
              "Integrated communication tools reduce admin workload.",
              "One platform for everything—no need for multiple apps."
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stronger Community Engagement */}
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
            Stronger Community Engagement
          </h3>
          <div className="space-y-3">
            {[ 
              "Club feed and messaging keep players, parents, and staff informed.",
              "Event management tools simplify training and match coordination.",
              "Improved participation tracking helps clubs stay organised."
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Sustainability and Growth */}
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
            Financial Sustainability and Growth
          </h3>
          <div className="space-y-3">
            {[ 
              "Fundraising is built into club operations—no extra effort required.",
              "Planned cashback and revenue tools provide a sustainable income stream.",
              "Potential to reduce club fees and reinvest in facilities and development."
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Building a Stronger Future */}
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
          Building a Stronger Future for SYFA Clubs
        </h3>
        <p className="text-base md:text-lg text-muted-foreground">
          This platform helps clubs focus on football, not admin. By streamlining operations and unlocking financial opportunities, clubs can save time, reduce costs, and create a stronger future for grassroots football.
        </p>
      </div>
    </motion.div>
  );
};

export default InvestorBenefits;
