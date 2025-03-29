import { motion } from "framer-motion";

const InvestorAboutAve = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-background space-y-8"
      id="aboutAve"
    >
      {/* Page Heading */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">About Us</h1>
        <div className="h-1 w-24 bg-yellow-400 rounded"></div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -mt-20 -mr-20 z-0" />
        <div className="relative z-10 space-y-4">
          <h2 className="text-3xl font-bold">
            A Trusted, Purpose-Driven Company Supporting Clubs of All Sizes
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-3xl leading-relaxed">
            Building solutions that help clubs operate more efficiently, strengthen financial independence, and grow their communities.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <div className="bg-card p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-primary">Who We Are & Why This Matters</h2>
        <p className="text-muted-foreground">
          Ave Ltd. is the company behind Clann—a technology platform designed to empower clubs with advanced management tools and sustainable revenue streams.
          We are not a tech company chasing a market opportunity; we are a business rooted in real-world club needs, ensuring that every club in Scotland—and beyond—can achieve financial independence.
        </p>
        <p className="text-muted-foreground font-semibold text-lg">
          Clann is our flagship product, built to be the go-to solution for club management and financial sustainability.
        </p>
      </div>

      {/* Partner Logos */}
      <div className="bg-card p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-primary">Supported by Leading Organisations</h2>
        <p className="text-muted-foreground">
          Ave Ltd. has been recognised and supported by industry leaders, reinforcing the credibility and strength of Clann:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center mt-4">
          {["Scottish Enterprise", "Business Gateway", "Techscaler", "Codebase", "Barclays Eagle Labs"].map((org, i) => (
            <div key={i} className="bg-muted/10 p-4 rounded-md shadow-sm font-semibold text-primary">
              {org}
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-4">
          This support provides a strong foundation for growth, ensuring Clann is built to the highest standards in business, technology, and community impact.
        </p>
      </div>

      {/* Team Section */}
      <div className="bg-card p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-primary">The Team Behind Clann</h2>
        <p className="text-muted-foreground">
          Ave Ltd. is led by a team with deep expertise in business, technology, and community development:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              name: "Philip Avery",
              role: "Business & Finance Lead",
              desc: "Strategy, growth partnerships, sustainability, and investor relations.",
            },
            {
              name: "Michael Walsh",
              role: "Technology Lead",
              desc: "Platform development, system architecture, and technical integrations.",
            },
            {
              name: "Jamie King",
              role: "Full-Stack Developer",
              desc: "Core feature development, front-end and back-end execution.",
            },
          ].map((person, i) => (
            <div key={i} className="bg-muted/10 rounded-lg shadow-md p-4">
              <div className="text-3xl text-primary mb-2">👤</div>
              <h3 className="font-semibold text-primary">{person.name}</h3>
              <div className="text-sm text-muted-foreground mb-2">{person.role}</div>
              <p className="text-sm text-muted-foreground">{person.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground mt-4">
          This blend of business and technical expertise ensures that Clann is scalable, sustainable, and effective.
        </p>
      </div>

      {/* Financial Model */}
      <div className="bg-card p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-primary">A Fair & Transparent Financial Model</h2>
        <p className="text-muted-foreground">
          We believe clubs and members should retain the majority of their revenue—free from high platform fees and hidden charges.
        </p>
        <div className="flex flex-col md:flex-row justify-between bg-muted/10 p-4 rounded-lg mt-4">
          {[
            { percent: "37.5%", label: "For Clubs" },
            { percent: "37.5%", label: "For Members" },
            { percent: "25%", label: "Platform Share" },
          ].map((item, idx) => (
            <div key={idx} className="flex-1 text-center">
              <div className="text-3xl font-bold text-primary">{item.percent}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
        <ul className="list-disc list-inside mt-4 text-muted-foreground space-y-2">
          <li><strong>Provide</strong> the technology that enables passive fundraising</li>
          <li><strong>Ensure</strong> clubs and members benefit the most, with the majority of revenue going directly to them</li>
          <li><strong>Retain</strong> a small operational share (25%) to cover platform development, infrastructure, and ongoing support</li>
          <li><strong>Support</strong> long-term sustainability — not short-term profit-taking</li>
        </ul>
        <p className="text-muted-foreground mt-4">
          This transparent model ensures we remain a trusted platform for clubs, parents, and governing bodies.
        </p>
      </div>

      {/* Long-Term Commitment */}
      <div className="bg-card p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-primary">Long-Term Commitment & Sustainability</h2>
        <p className="text-muted-foreground">Ave Ltd. is committed to:</p>
        <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-2">
          <li>Continuously improving Clann based on club needs</li>
          <li>Providing financial tools that reduce reliance on membership fees</li>
          <li>Ensuring clubs can reinvest in their growth, facilities, and community impact</li>
        </ul>
        <p className="text-muted-foreground font-medium text-center mt-4">
          This is about creating <span className="text-primary font-semibold">real, lasting change</span>—
          ensuring that clubs are <span className="text-primary font-semibold">not just surviving, but thriving</span>.
        </p>
      </div>
    </motion.div>
  );
};

export default InvestorAboutAve;
