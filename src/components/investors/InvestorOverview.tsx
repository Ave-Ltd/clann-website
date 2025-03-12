import { motion } from "framer-motion";

const InvestorOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-8"
      id="section2"
    >
      {/* HERO-LIKE INTRO (Phil’s Section 1 Content) */}
      <div className="space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          Revolutionising Club Management for Scottish Football
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Empowering clubs and communities through innovation, efficiency, and sustainable fundraising.
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>
            The first and only platform built to modernise Scottish football club management.
          </li>
          <li>
            Designed to simplify operations, reduce admin, and create new income streams.
          </li>
          <li>
            A technology-driven solution backed by key industry players.
          </li>
        </ul>
        {/* <button
          onClick={() => {
            // Optional scroll or route to Section 2 (this component), 
            // or remove if not needed
            const aboutPlatform = document.getElementById("section2");
            aboutPlatform?.scrollIntoView({ behavior: "smooth" });
          }}
          className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
        >
          See What This Means for Scottish Football Clubs
        </button> */}
      </div>

     

      {/* CTA Link to Section 3 */}
      {/* <div>
        <a
          href="#syfa-benefits" // Adjust the ID or route as needed
          className="inline-block px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
        >
          Explore the Impact on Clubs
        </a>
      </div> */}
    </motion.div>
  );
};

export default InvestorOverview;
