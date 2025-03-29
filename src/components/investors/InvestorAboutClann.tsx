import { motion } from "framer-motion";
import {
  CheckCircle,
  FlaskConical,
  Rocket,
  Star,
  ClipboardList,
} from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

const liveFeatures: Feature[] = [
  {
    icon: "📱",
    title: "App and Browser Extension",
    desc: "Seamless access across all devices, allowing management on the go or from your computer.",
  },
  {
    icon: "🧑‍🤝‍🧑",
    title: "Create & Manage Clubs & Teams",
    desc: "Set up and oversee teams efficiently with comprehensive management tools.",
  },
  {
    icon: "👥",
    title: "Member & Player Management",
    desc: "Invite, approve, and organise members with intuitive tools designed for club administrators.",
  },
  {
    icon: "📅",
    title: "Event Scheduling & RSVP Management",
    desc: "Coordinate training, matches, and club events with built-in attendance tracking.",
  },
  {
    icon: "🛡️",
    title: "Parent/Guardian Controls",
    desc: "Manage children's participation and permissions with secure, family-friendly controls.",
  },
  {
    icon: "📢",
    title: "Club Feed & Communications",
    desc: "Keep members informed and engaged with news, updates, and important notifications.",
  },
];

const demoFeatures: Feature[] = [
  {
    icon: "💬",
    title: "Live Messaging",
    desc: "Real-time chat for club members, teams, and groups to enhance communication.",
  },
  {
    icon: "💳",
    title: "Integrated Payment Handling",
    desc: "Designed to streamline membership and event transactions with secure processing.",
  },
  {
    icon: "🪙",
    title: "Advanced Fundraising & Passive Revenue",
    desc: "Innovative club-specific revenue generation models including cashback conversion to gift cards.",
  },
  {
    icon: "🔗",
    title: "Card Linking & Cashback System",
    desc: "Showcasing how users generate club revenue through everyday spending at partner retailers.",
  },
  {
    icon: "🏪",
    title: "Club Marketplace",
    desc: "Interactive preview of the second-hand equipment buy-and-sell platform for members.",
  },
];

const futureFeatures: Feature[] = [
  {
    icon: "👕",
    title: "Club Shop & Merchandise Hub",
    desc: "Selling apparel, kits, and branded items directly through the platform.",
  },
  {
    icon: "👛",
    title: "Expanded Financial Tools",
    desc: "Enhancing payment and club finance management with advanced reporting.",
  },
  {
    icon: "📊",
    title: "Club Growth Analytics",
    desc: "Providing clubs with financial and performance tracking tools for data-driven decisions.",
  },
];

const statusTable: [string, string][] = [
  ["Create & Manage Clubs & Teams", "Live"],
  ["Invite & Manage Members", "Live"],
  ["Club Feed & Communications", "Live"],
  ["Event Scheduling & RSVP", "Live"],
  ["Parent/Guardian Controls", "Live"],
  ["Live Messaging", "In development"],
  ["Integrated Payment Handling", "In development"],
  ["Fundraising & Revenue Generation", "In development"],
  ["Card Linking & Cashback System", "In development"],
  ["Marketplace for Used Equipment", "In development"],
  ["Club Shop & Merchandise Hub", "Planned"],
  ["Expanded Financial Tools", "Planned"],
  ["Club Growth Analytics", "Planned"],
];

const renderFeatureCard = (feature: Feature, status: string) => {
  const badgeColor =
    status === "Live"
      ? "bg-green-100 text-green-700"
      : status === "In development" || status === "Demo"
      ? "bg-yellow-100 text-yellow-800"
      : "bg-blue-100 text-blue-800";

  const label =
    status === "Live"
      ? "Live Now"
      : status === "In development" || status === "Demo"
      ? "Interactive Demo"
      : "Planned";

  return (
    <div
      key={feature.title}
      className="bg-card border-l-4 p-4 rounded-lg shadow-md"
    >
      <div className="text-3xl mb-2">{feature.icon}</div>
      <h3 className="text-lg font-semibold text-primary">{feature.title}</h3>
      <p className="text-muted-foreground text-sm">{feature.desc}</p>
      <span
        className={`inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full ${badgeColor}`}
      >
        {label}
      </span>
    </div>
  );
};

const InvestorAboutClann = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-12"
      id="aboutClann"
    >
      {/* Page Heading */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">About Clann</h1>
        <div className="h-1 w-24 bg-yellow-400 rounded"></div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
        <h2 className="text-3xl font-bold mb-2">
          A Complete Club & Organisation Management Platform
        </h2>
        <p className="text-white/90">
          Live, Interactive, and Built for the Future.
        </p>
      </div>

      {/* Platform Overview */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-primary font-bold text-xl">
          <Star className="w-6 h-6 text-yellow-400" />
          Platform Overview
        </div>
        <p className="text-muted-foreground">
          Clann is a modern, all-in-one management platform designed to support
          grassroots clubs and organisations. From football and rugby to martial
          arts and youth groups, the platform streamlines admin, simplifies
          communication, and unlocks new revenue through passive fundraising and
          integrated tools. This section outlines which features are currently
          live, available for demo, or in development. Explore how Clann can
          help your club reduce admin, save time, and create sustainable income.
        </p>
      </div>

      {/* Live Features */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-semibold border-l-4 border-green-500 pl-3">
          <CheckCircle className="text-green-500" />
          Live & Functional Features
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {liveFeatures.map((feature) => renderFeatureCard(feature, "Live"))}
        </div>
      </div>

      {/* Demo Features */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-semibold border-l-4 border-yellow-400 pl-3">
          <FlaskConical className="text-yellow-500" />
          Demonstration Features
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {demoFeatures.map((feature) => renderFeatureCard(feature, "Demo"))}
        </div>
      </div>

      {/* Future Development */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-lg font-semibold border-l-4 border-blue-400 pl-3">
          <Rocket className="text-blue-500" />
          Future Development
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {futureFeatures.map((feature) => renderFeatureCard(feature, "Planned"))}
        </div>
      </div>

      {/* Feature Table */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xl font-bold text-primary">
          <ClipboardList className="w-6 h-6 text-yellow-400" />
          Feature Status Overview
        </div>
        <table className="w-full table-auto text-sm bg-background rounded-md overflow-hidden border border-border">
          <thead>
            <tr className="bg-accent text-foreground">
              <th className="text-left p-3 font-semibold">Feature</th>
              <th className="text-left p-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {statusTable.map(([name, status]) => (
              <tr
                key={name}
                className="border-t border-border hover:bg-muted transition"
              >
                <td className="p-3">{name}</td>
                <td className="p-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      status === "Live"
                        ? "bg-green-100 text-green-700"
                        : status === "In development"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default InvestorAboutClann;
