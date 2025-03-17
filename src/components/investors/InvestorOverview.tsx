import { motion } from "framer-motion";

const InvestorOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-8"
      id="overview"
    >
      {/* HERO-LIKE INTRO */}
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-primary">
          Revolutionising Club Management for Scottish Football
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Empowering clubs and communities through innovation, efficiency, and sustainable fundraising.
        </p>
      </div>
      
      {/* Built for Clubs, Designed for Growth */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
            Built for Clubs, Designed for Growth
          </h3>
          <div className="space-y-3">
            {[
              "The first and only platform built to modernise Scottish football club management.",
              "Designed to simplify operations, reduce admin, and create new income streams.",
              "A technology-driven solution backed by key industry players."
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InvestorOverview;
