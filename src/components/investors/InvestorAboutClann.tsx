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
      <h2 className="text-2xl md:text-3xl font-bold">
        A Complete Club & Organisation Management Platform
      </h2>
      <p className="text-base md:text-lg text-muted-foreground">
        Live, Interactive, and Built for the Future.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Live & Functional Features */}
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
            Live & Functional Features (Available Now)
          </h3>
          <div className="space-y-3">
            {[
              "App and Browser Extension – Seamless access across all devices.",
              "Create & Manage Clubs & Teams – Set up and oversee teams efficiently.",
              "Member & Player Management – Invite, approve, and organise members.",
              "Event Scheduling & RSVP Management – Coordinate training, matches, and club events.",
              "Parent/Guardian Controls – Manage children’s participation and permissions.",
              "Club Feed & Communications – Keep members informed and engaged."
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Demonstration Features */}
        <div className="bg-secondary p-4 rounded-lg shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
            Demonstration Features (Not Yet Live, but Interactive)
          </h3>
          <div className="space-y-3">
            {[
              "Live Messaging – Real-time chat for club members, teams, and groups.",
              "Integrated Payment Handling – Designed to streamline membership and event transactions.",
              "Advanced Fundraising & Passive Revenue – Club-specific revenue generation models.",
              "Card Linking & Cashback System – Showcasing how users will generate club revenue through everyday spending.",
              "Club Marketplace – Interactive preview of the second-hand equipment buy-and-sell platform."
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Future Development */}
      <div className="bg-secondary p-4 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-3 text-primary">
          Future Development (Planned Features)
        </h3>
        <div className="space-y-3">
          {[
            "Club Shop & Merchandise Hub – Selling apparel, kits, and branded items.",
            "Expanded Financial Tools – Enhancing payment and club finance management.",
            "Club Growth Analytics – Providing clubs with financial and performance tracking tools."
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Feature Status Overview */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          Feature Status Overview
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
              {[
                { feature: "Create & Manage Clubs & Teams", status: "Live" },
                { feature: "Invite & Manage Members", status: "Live" },
                { feature: "Club Feed & Communications", status: "Live" },
                { feature: "Event Scheduling & RSVP", status: "Live" },
                { feature: "Parent/Guardian Controls", status: "Live" },
                { feature: "Live Messaging", status: "Mocked UI" },
                { feature: "Integrated Payment Handling", status: "Mocked UI" },
                { feature: "Fundraising & Revenue Generation", status: "Mocked UI" },
                { feature: "Card Linking & Cashback System", status: "Mocked UI" },
                { feature: "Marketplace for Used Equipment", status: "Mocked UI" },
                { feature: "Club Shop & Merchandise Hub", status: "Planned" },
                { feature: "Expanded Financial Tools", status: "Planned" },
                { feature: "Club Growth Analytics", status: "Planned" },
              ].map(({ feature, status }, index) => (
                <tr key={index} className="odd:bg-card even:bg-secondary hover:bg-accent/50 transition-colors">
                  <td className="px-4 py-2">{feature}</td>
                  <td className="px-4 py-2">{status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default InvestorAboutClann;
