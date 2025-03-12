import { motion } from "framer-motion";

const InvestorAboutClann = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-8"
      id="aboutClann"
    >
      {/* Headline & Subheadline */}
       {/* ORIGINAL OVERVIEW HEADING & INTRO */}
       <h2 className="text-2xl md:text-3xl font-bold">
        A Complete Club & Organisation Management Platform – Live, Interactive, and Built for the Future
      </h2>
      <p className="text-base md:text-lg text-muted-foreground">
        Experience our functional platform today and see the next evolution of club management in action.
      </p>

      {/* 1. Live & Functional Features */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          1. Live & Functional Features (Available Now)
        </h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>App & Browser Extension – Seamless access across all devices.</li>
          <li>Create & Manage Clubs & Teams – Set up and oversee teams efficiently.</li>
          <li>Member & Player Management – Invite, approve, and organise members.</li>
          <li>Event Scheduling & RSVP Management – Coordinate training, matches, and club events.</li>
          <li>Parent/Guardian Controls – Manage children’s participation and permissions.</li>
          <li>Club Feed & Communications – Keep members informed and engaged.</li>
        </ul>
      </div>

      {/* 2. Mocked for Demonstration */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          2. Mocked for Demonstration (Visual & Interactive, But Not Yet Live)
        </h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Live Messaging – Real-time chat for club members, teams, and groups.</li>
          <li>Integrated Payment Handling – Designed to streamline membership and event transactions.</li>
          <li>Advanced Fundraising & Passive Revenue – Club-specific revenue generation models.</li>
          <li>
            Card Linking & Cashback System – Showcasing how users will generate club revenue
            through everyday spending.
          </li>
          <li>
            Club Marketplace – Interactive preview of the second-hand equipment buy-and-sell platform.
          </li>
        </ul>
      </div>

      {/* 3. Future Expansion */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          3. Future Expansion (Conceptual, Planned for Development)
        </h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Club Shop & Merchandise Hub – Selling apparel, kits, and branded items.</li>
          <li>Expanded Financial Tools – Enhancing payment and club finance management.</li>
          <li>Club Growth Analytics – Providing clubs with financial and performance tracking tools.</li>
        </ul>
      </div>

      {/* 4. Feature Status Overview (Table) */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          4. Feature Status Overview
        </h3>
        <div className="overflow-x-auto rounded-md border border-gray-700 shadow-sm">
          <table className="w-full text-sm text-left table-auto">
            <thead className="bg-secondary text-secondary-foreground">
              <tr>
                <th className="px-4 py-3 uppercase text-xs tracking-wider font-semibold border-b border-gray-700">
                  Feature
                </th>
                <th className="px-4 py-3 uppercase text-xs tracking-wider font-semibold border-b border-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              <tr className="odd:bg-card even:bg-secondary hover:bg-accent/50 transition-colors">
                <td className="px-4 py-2">Create & Manage Clubs & Teams</td>
                <td className="px-4 py-2">Live</td>
              </tr>
              <tr className="odd:bg-card even:bg-secondary hover:bg-accent/50 transition-colors">
                <td className="px-4 py-2">Invite & Manage Members</td>
                <td className="px-4 py-2">Live</td>
              </tr>
              <tr className="odd:bg-card even:bg-secondary hover:bg-accent/50 transition-colors">
                <td className="px-4 py-2">Club Feed & Communications</td>
                <td className="px-4 py-2">Live</td>
              </tr>
              <tr className="odd:bg-card even:bg-secondary hover:bg-accent/50 transition-colors">
                <td className="px-4 py-2">Event Scheduling & RSVP</td>
                <td className="px-4 py-2">Live</td>
              </tr>
              <tr className="odd:bg-card even:bg-secondary hover:bg-accent/50 transition-colors">
                <td className="px-4 py-2">Parent/Guardian Controls</td>
                <td className="px-4 py-2">Live</td>
              </tr>
              <tr className="odd:bg-card even:bg-secondary hover:bg-accent/50 transition-colors">
                <td className="px-4 py-2">Live Messaging</td>
                <td className="px-4 py-2">Mocked UI</td>
              </tr>
              <tr className="odd:bg-card even:bg-secondary hover:bg-accent/50 transition-colors">
                <td className="px-4 py-2">Integrated Payment Handling</td>
                <td className="px-4 py-2">Mocked UI</td>
              </tr>
              <tr className="odd:bg-card even:bg-secondary hover:bg-accent/50 transition-colors">
                <td className="px-4 py-2">Fundraising & Revenue Generation</td>
                <td className="px-4 py-2">Mocked UI</td>
              </tr>
              <tr className="odd:bg-card even:bg-secondary hover:bg-accent/50 transition-colors">
                <td className="px-4 py-2">Card Linking & Cashback System</td>
                <td className="px-4 py-2">Mocked UI</td>
              </tr>
              <tr className="odd:bg-card even:bg-secondary hover:bg-accent/50 transition-colors">
                <td className="px-4 py-2">Marketplace for Used Equipment</td>
                <td className="px-4 py-2">Mocked UI</td>
              </tr>
              <tr className="odd:bg-card even:bg-secondary hover:bg-accent/50 transition-colors">
                <td className="px-4 py-2">Club Shop & Merchandise Hub</td>
                <td className="px-4 py-2">Planned</td>
              </tr>
              <tr className="odd:bg-card even:bg-secondary hover:bg-accent/50 transition-colors">
                <td className="px-4 py-2">Expanded Financial Tools</td>
                <td className="px-4 py-2">Planned</td>
              </tr>
              <tr className="odd:bg-card even:bg-secondary hover:bg-accent/50 transition-colors">
                <td className="px-4 py-2">Club Growth Analytics</td>
                <td className="px-4 py-2">Planned</td>
              </tr>
            </tbody>
          </table>
        </div>
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

export default InvestorAboutClann;
