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
      {/* Headline & Subheadline */}
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold">
          A Technology Solution Aligned with SYFA’s Mission
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          More than just club management—this is about building stronger clubs, communities, 
          and a better future for grassroots football.
        </p>
      </div>

      {/* 1. Why We Are Doing This */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          1. Why We Are Doing This
        </h3>
        <p className="mb-2">
          Clann.App exists to give clubs control over their own future—ensuring long-term financial 
          stability while easing the burden on volunteers and administrators.
        </p>
        <p className="mb-2">
          We refuse to accept that communities should struggle or that children should grow up in places 
          they feel disconnected from.
        </p>
        <p className="mb-2">
          Yes, we see challenges—but we also see solutions.
        </p>
        <p>
          By building this platform and ensuring it is used in the right way, we have the opportunity 
          to make a real impact—for clubs, for communities, and for the next generation.
        </p>
      </div>

      {/* 2. Why SYFA’s Support Matters */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          2. Why SYFA’s Support Matters
        </h3>
        <p className="mb-2">
          SYFA plays a vital role in the success of grassroots football, supporting clubs with essential 
          resources and governance. Our platform is designed to complement these efforts by providing clubs with:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>A fully integrated management system – Reducing admin and improving club operations.</li>
          <li>New financial sustainability tools – Helping clubs generate funding effortlessly.</li>
          <li>Better engagement &amp; communication – Keeping clubs connected and organised.</li>
        </ul>
        <p className="mt-2">
          We are not asking SYFA for financial investment or operational involvement. We are simply asking SYFA 
          to support a vision that ensures clubs remain strong for the future.
        </p>
        <p className="mt-2">
          We are seeking:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li><strong>Endorsement &amp; Recognition</strong> – To validate the platform as a recommended tool for clubs.</li>
          <li><strong>Awareness &amp; Introduction</strong> – To help clubs understand how this solution supports them.</li>
          <li><strong>Adoption Support</strong> – Encouraging clubs to explore and integrate this into their management systems.</li>
        </ul>
      </div>

      {/* 3. How This Benefits SYFA & Its Clubs */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          3. How This Benefits SYFA & Its Clubs
        </h3>
        <p className="mb-2">
          SYFA has always been focused on the long-term health of grassroots football. This platform supports 
          that mission by:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Providing tools that make club management easier, reducing the burden on volunteers.</li>
          <li>Introducing passive funding methods that ensure long-term financial sustainability.</li>
          <li>Strengthening football communities by allowing clubs to focus on sport—not admin.</li>
        </ul>
      </div>

      {/* 4. Long-Term Vision & Next Steps */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          4. Long-Term Vision &amp; Next Steps
        </h3>
        <p className="mb-2">
          The future of Scottish football will be defined by strong, sustainable clubs—not ones that 
          struggle to survive year after year.
        </p>
        <p className="mb-2">
          By ensuring clubs have the right tools, we can:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Empower clubs to operate more efficiently.</li>
          <li>Enable clubs to generate sustainable funding.</li>
          <li>Support SYFA’s continued leadership in grassroots football development.</li>
        </ul>
        <p>
          This is about more than technology. It’s about building a stronger future for Scottish football, 
          for our children, and for the communities we live in.
        </p>
      </div>

      {/* CTA */}
      <div>
        <a
          href="#about-ave" // Adjust to link to your "About Ave Ltd." or next section
          className="inline-block px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
        >
          The Team &amp; Vision Behind the Platform →
        </a>
      </div>
    </motion.div>
  );
};

export default InvestorEndorsement;
