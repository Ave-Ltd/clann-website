import { motion } from "framer-motion";
import { Timer, Users, Coins } from "lucide-react";

const ClubBenefits = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-12"
      id="benefits"
    >
      {/* Section Heading */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Club Benefits</h1>
        <div className="h-1 w-24 bg-yellow-400 rounded"></div>
      </div>

      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold">
          Helping Clubs Save Time, Reduce Costs, and Grow Financially
        </h2>
        <p className="text-base md:text-lg text-primary-foreground/90 max-w-3xl leading-relaxed">
          The free platform built to streamline operations, enhance community engagement, and generate sustainable income for clubs.
        </p>
      </div>

      {/* Key Benefits Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
          Key Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative bg-card dark:bg-muted/60 rounded-lg p-6 border border-border shadow-md overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-yellow-400 rounded-t-md" />
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mb-4 font-bold">
              <Timer className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-3">
              Less Admin, More Time for What Matters
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Automated scheduling, RSVP tracking, and club management",
                "Integrated communication tools reduce admin workload",
                "One platform for everything—no need for multiple apps",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="relative bg-card dark:bg-muted/60 rounded-lg p-6 border border-border shadow-md overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-yellow-400 rounded-t-md" />
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mb-4 font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-3">
              Stronger Community Engagement
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Club feed and messaging keep members, parents, and staff informed",
                "Event management tools simplify training and match coordination",
                "Improved participation tracking helps clubs stay organised",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="relative bg-card dark:bg-muted/60 rounded-lg p-6 border border-border shadow-md overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-yellow-400 rounded-t-md" />
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mb-4 font-bold">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-3">
              Financial Sustainability and Growth
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Fundraising is built into club operations—no extra effort required",
                "Innovative passive revenue model ensures clubs receive a substantial share of every transaction",
                "Sustainable income stream that can reduce club fees and support reinvestment",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Feature Highlight Section */}
      <div className="bg-card dark:bg-muted/60 p-6 rounded-lg border border-border shadow-md space-y-4">
        <h3 className="text-lg md:text-xl font-semibold text-primary">
          Building a Stronger Future for Local Clubs
        </h3>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          This platform helps clubs focus on what matters, not admin. By streamlining operations and unlocking financial opportunities, clubs can save time, reduce costs, and build a stronger future for their community.
        </p>
      </div>
    </motion.div>
  );
};

export default ClubBenefits;
