import { motion } from "framer-motion";

const InvestorEndorsement = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-8"
      id="endorsement"
    >
      {/* Section Headings */}
      <h2 className="text-2xl md:text-3xl font-bold">
        A Technology Solution Aligned with SYFA’s Mission
      </h2>
      <p className="text-base md:text-lg text-muted-foreground">
        More than just club management—this is about building stronger clubs, communities, and a better future for grassroots football.
      </p>

      {/* Why We Are Doing This */}
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
          Why We Are Doing This
        </h3>
        <div className="space-y-3">
          {[ 
            "Clann.App exists to give clubs control over their future—ensuring long-term financial stability while easing the burden on volunteers and administrators.",
            "We refuse to accept that communities should struggle or that children should grow up disconnected from the clubs that shape them.",
            "Yes, we see challenges—but we also see solutions.",
            "By building this platform and ensuring it is used in the right way, we have the opportunity to create real impact—for clubs, for communities, and for the next generation."
          ].map((reason, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why SYFA’s Support Matters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
            Why SYFA’s Support Matters
          </h3>
          <div className="space-y-3">
            {[ 
              "SYFA plays a vital role in the success of grassroots football by providing essential governance and resources.",
              "Our platform is designed to complement these efforts by offering:",
              "A fully integrated management system – Reducing admin and improving club operations.",
              "Financial sustainability tools – Helping clubs generate funding effortlessly.",
              "Better engagement & communication – Keeping clubs connected and organised."
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What We Are Seeking */}
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
            What We Are Seeking
          </h3>
          <div className="space-y-3">
            {[ 
              "Endorsement & Recognition – Validating Clann.App as a recommended tool for clubs.",
              "Awareness & Introduction – Helping clubs understand how this solution benefits them.",
              "Adoption Support – Encouraging clubs to explore and integrate the platform into their management systems."
            ].map((support, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <p>{support}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How This Benefits SYFA & Its Clubs */}
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
          How This Benefits SYFA & Its Clubs
        </h3>
        <div className="space-y-3">
          {[ 
            "Providing tools that make club management easier, reducing the burden on volunteers.",
            "Introducing passive funding methods that ensure clubs remain financially stable.",
            "Strengthening football communities by allowing clubs to focus on sport, not admin."
          ].map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Long-Term Vision & Next Steps */}
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
          Long-Term Vision & Next Steps
        </h3>
        <div className="space-y-3">
          {[ 
            "The future of Scottish football depends on strong, sustainable clubs, not clubs struggling to survive year after year.",
            "By ensuring clubs have the right tools, we can:",
            "Empower clubs to operate more efficiently.",
            "Enable financial sustainability through passive fundraising.",
            "Support SYFA’s continued leadership in grassroots football development.",
            "This is about more than technology—it’s about creating a stronger future for Scottish football, for our children, and for the communities we live in."
          ].map((vision, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p>{vision}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default InvestorEndorsement;
