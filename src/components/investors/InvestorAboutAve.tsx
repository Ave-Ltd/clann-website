import { motion } from "framer-motion";

const InvestorAboutAve = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-8"
      id="aboutAve"
    >
      {/* Section Headings */}
      <h2 className="text-2xl md:text-3xl font-bold">
        A Trusted, Purpose-Driven Company Supporting Grassroots Clubs
      </h2>
      <p className="text-base md:text-lg text-muted-foreground">
        Building solutions that help clubs operate more efficiently, strengthen financial independence, and grow their communities.
      </p>

      {/* Who We Are & Why This Matters */}
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
          Who We Are & Why This Matters
        </h3>
        <div className="space-y-3">
          {[ 
            "Ave Ltd. is the company behind Clann.App, a technology platform designed to empower clubs with better management tools and sustainable revenue streams.",
            "We are not a tech company chasing a market opportunity. We are a business rooted in real-world club needs, ensuring that every club in Scotland—and beyond—can achieve financial independence.",
            "Clann.App is our flagship product, built to be the go-to solution for club management and financial sustainability."
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Supported by Leading Organisations */}
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
          Supported by Leading Organisations
        </h3>
        <p>Ave Ltd. has been recognised and supported by industry leaders:</p>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-3">
          {["Scottish Enterprise", "Business Gateway", "Techscaler", "Codebase", "Barclays Eagle Labs"].map((org, index) => (
            <li key={index} className="bg-accent p-3 rounded-md text-center font-semibold">{org}</li>
          ))}
        </ul>
      </div>

      {/* The Team Behind Clann.App */}
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
          The Team Behind Clann.App
        </h3>
        <ul className="space-y-3">
          {[ 
            { name: "Philip Avery", role: "Business & Finance Lead", details: "Strategy, partnerships, financial models, and investor relations." },
            { name: "Michael Walsh", role: "Technology Lead", details: "Platform development, system architecture, and technical integrations." },
            { name: "Jamie King", role: "Full-Stack Developer", details: "Core feature development, front-end and back-end execution." }
          ].map((team, index) => (
            <li key={index} className="flex flex-col bg-accent p-3 rounded-md">
              <span className="font-semibold text-primary">{team.name} – {team.role}</span>
              <span className="text-sm">{team.details}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* A Fair & Transparent Financial Model */}
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
          A Fair & Transparent Financial Model
        </h3>
        <p>We believe clubs should retain the majority of their revenue, without high platform fees or hidden charges.</p>
        <p className="font-semibold mt-2">Clubs keep at least 75% of all revenue generated through the platform.</p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
          {["Provide the technology that enables passive fundraising.", "Ensure clubs benefit the most, without excessive platform fees.", "Support long-term sustainability, not short-term profit-taking."].map((point, index) => (
            <li key={index} className="bg-accent p-3 rounded-md text-center font-semibold">{point}</li>
          ))}
        </ul>
      </div>

      {/* Long-Term Commitment & Sustainability */}
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
          Long-Term Commitment & Sustainability
        </h3>
        <p>Ave Ltd. is committed to:</p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
          {["Continuously improving Clann.App based on club needs.", "Providing financial tools that reduce reliance on membership fees.", "Ensuring clubs can reinvest in their growth, facilities, and community impact."].map((commitment, index) => (
            <li key={index} className="bg-accent p-3 rounded-md text-center font-semibold">{commitment}</li>
          ))}
        </ul>
        <p className="mt-4">This is about creating real, lasting change—ensuring that clubs are not just surviving, but thriving.</p>
      </div>
    </motion.div>
  );
};

export default InvestorAboutAve;
