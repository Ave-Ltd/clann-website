import { motion } from "framer-motion";

const InvestorPassiveRevenue = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-8"
      id="passive-revenue"
    >
      {/* Section Headings */}
      <h2 className="text-2xl md:text-3xl font-bold">
        Unlocking Sustainable Funding for Clubs
      </h2>
      <p className="text-base md:text-lg text-muted-foreground">
        Helping clubs grow financially without increasing fees or relying solely on traditional fundraising.
      </p>

      {/* Key Financial Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Supporting, Not Replacing Grants */}
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
            Supporting, Not Replacing SYFA Grants
          </h3>
          <div className="space-y-3">
            {[ 
              "SYFA grants remain essential for club development.",
              "This platform complements, rather than replaces, existing funding sources.",
              "Financial sustainability ensures grants focus on growth, not survival."
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How Clubs Generate Revenue */}
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
            How Clubs Generate Revenue
          </h3>
          <div className="space-y-3">
            {[ 
              "Clubs benefit financially from everyday transactions, rather than extra fundraising efforts.",
              "Every time a club member, parent, or supporter shops with an affiliate partner, cashback is earned and allocated to their club.",
              "No extra effort—fully passive fundraising."
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cashback on Everyday Spending */}
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
          Cashback on Everyday Spending
        </h3>
        <p className="text-base md:text-lg text-muted-foreground">
          Every time a club member, parent, or supporter shops with an affiliate partner, a percentage of the transaction is returned as cashback, benefiting their club.
        </p>
      </div>

      {/* Who Contributes & What Kind of Spending Qualifies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
            Who Contributes?
          </h3>
          <div className="space-y-3">
            {[ 
              "Club members – Players, coaches, and volunteers.",
              "Parents and guardians – Covering costs for children.",
              "Family and supporters – Extended family and friends.",
              "Club partners and local businesses – Contributing through purchases."
            ].map((group, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <p>{group}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
            What Kind of Spending Qualifies?
          </h3>
          <div className="space-y-3">
            {[ 
              "Supermarkets and grocery shopping.",
              "Clothing and footwear.",
              "Online retail (Amazon, eBay, etc.).",
              "Dining and takeaways.",
              "Petrol and travel.",
              "Entertainment and streaming services."
            ].map((category, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <p>{category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Future Features & Long-Term Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
            Planned Features
          </h3>
          <div className="space-y-3">
            {[ 
              "Card-linked offers—securely link cards for automatic cashback.",
              "Club marketplace for second-hand sports gear.",
              "Club shop—sell official apparel, kits, and merchandise.",
              "Cashback on utilities and insurance switching."
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
            The Long-Term Vision
          </h3>
          <div className="space-y-3">
            {[ 
              "Stronger clubs mean a stronger grassroots football system.",
              "Financially stable clubs can invest in better facilities and opportunities.",
              "A nationwide movement to create self-sufficient, thriving clubs."
            ].map((vision, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <p>{vision}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InvestorPassiveRevenue;
