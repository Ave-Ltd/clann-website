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
      {/* Headline & Subheadline */}
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold">
          A Trusted, Purpose-Driven Company Supporting Grassroots Clubs
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          Ave Ltd. is building solutions that help clubs operate more efficiently, strengthen financial independence, and grow their communities.
        </p>
      </div>

      {/* 1. Who We Are & Why This Matters */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          1. Who We Are &amp; Why This Matters
        </h3>
        <p className="mb-2">
          Ave Ltd. is the company behind Clann.App, a technology platform designed to empower clubs with better management tools and sustainable revenue streams.
        </p>
        <p className="mb-2">
          We are not a tech company chasing a market opportunity. We are a business rooted in real-world club needs, working to ensure that every club in Scotland—and beyond—can become financially independent.
        </p>
        <p>
          Clann.App is our flagship product, designed to be the go-to solution for club management and financial sustainability.
        </p>
      </div>

      {/* 2. Supported by Leading Organisations */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          2. Supported by Leading Organisations
        </h3>
        <p className="mb-2">
          Ave Ltd. has been recognised and supported by industry leaders, reinforcing the credibility and strength of Clann.App:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Scottish Enterprise</li>
          <li>Business Gateway</li>
          <li>Techscaler</li>
          <li>Codebase</li>
          <li>Barclays Eagle Labs</li>
        </ul>
        <p className="mt-2">
          Their support provides a strong foundation for growth, ensuring Clann.App is built with the highest standards in business, technology, and community impact.
        </p>
      </div>

      {/* 3. The Team Behind Clann.App */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          3. The Team Behind Clann.App
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            <strong>Philip Avery (Business &amp; Finance Lead)</strong> – Strategy, partnerships, financial models, and investor relations.
          </li>
          <li>
            <strong>Michael Walsh (Technology Lead)</strong> – Platform development, system architecture, and technical integrations.
          </li>
          <li>
            <strong>Jamie King (Full-Stack Developer)</strong> – Core feature development, front-end and back-end execution.
          </li>
        </ul>
        <p className="mt-2">
          This combination of business and technology expertise ensures that Clann.App is built right—scalable, sustainable, and effective.
        </p>
      </div>

      {/* 4. A Fair & Transparent Financial Model */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          4. A Fair &amp; Transparent Financial Model
        </h3>
        <p className="mb-2">
          We believe that clubs should retain the majority of their revenue—not be forced into high fees or hidden charges.
        </p>
        <p className="mb-2">
          That’s why clubs keep at least 75% of all revenue generated through the platform.
        </p>
        <p className="mb-2">
          Our role is simple:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Provide the technology that enables passive fundraising.</li>
          <li>Ensure clubs benefit the most, without excessive platform fees.</li>
          <li>Support long-term sustainability rather than treating this as a short-term revenue opportunity.</li>
        </ul>
        <p>
          This transparent model ensures that we remain a trusted platform for clubs, parents, and governing bodies.
        </p>
      </div>

      {/* 5. Long-Term Commitment & Sustainability */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          5. Long-Term Commitment &amp; Sustainability
        </h3>
        <p className="mb-2">
          Ave Ltd. is committed to:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Continuously improving Clann.App based on club needs.</li>
          <li>Providing financial tools that reduce reliance on membership fees.</li>
          <li>Ensuring clubs can reinvest in their growth, facilities, and community impact.</li>
        </ul>
        <p>
          This is about creating real, lasting change, ensuring that clubs are not just surviving—but thriving.
        </p>
      </div>

      {/* CTA */}
      {/* <div>
        <a
          href="#faqs" // Adjust this link as needed
          className="inline-block px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
        >
          FAQ’s &amp; Common Concerns
        </a>
      </div> */}
    </motion.div>
  );
};

export default InvestorAboutAve;
