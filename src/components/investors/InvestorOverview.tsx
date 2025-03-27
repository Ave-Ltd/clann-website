import { motion } from "framer-motion";
import {
  Zap,
  SlidersHorizontal,
  Coins,
  Users,
  ShieldCheck,
  User,
  Star,
  CircleDot,
} from "lucide-react";

const InvestorOverview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 sm:p-10 bg-background text-foreground space-y-16"
      id="overview"
    >
      {/* HERO SECTION */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">
          Revolutionising Club Management for Every Type of Club
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Empowering clubs and communities through innovation, efficiency, and sustainable fundraising.
        </p>
        <div className="h-1 w-24 bg-yellow-400 mx-auto rounded-full" />
      </div>

      {/* IMPACT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {[
          {
            amount: "£260 / year",
            label: "UK Avg. Cashback per Person",
          },
          {
            amount: "£50–130+ / year",
            label: "Club Revenue per Active Clann User",
          },
          {
            amount: "£9,000 / year",
            label: "Avg. Club Earnings with 100 Active Users",
          },
        ].map(({ amount, label }, idx) => (
          <div
            key={idx}
            className="rounded-xl p-6 bg-gradient-to-br from-yellow-300 to-blue-600 text-white shadow-md"
          >
            <div className="text-2xl font-bold">{amount}</div>
            <div className="text-sm mt-2">{label}</div>
          </div>
        ))}
      </div>

      {/* WHY CLUBS CHOOSE CLANN */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-primary flex items-center gap-2">
          <Zap className="text-green-500 w-5 h-5" />
          Why Clubs Choose Clann
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <SlidersHorizontal className="w-6 h-6 text-blue-500" />,
              title: "Effortless Setup",
              desc: "Set up once—earn automatically, forever.",
            },
            {
              icon: <Coins className="w-6 h-6 text-yellow-500" />,
              title: "Passive Income",
              desc: "Earn from members’ everyday spending—automatically.",
            },
            {
              icon: <Users className="w-6 h-6 text-green-500" />,
              title: "Works for Any Club",
              desc: "Youth, adult, grassroots or private—Clann adapts to all.",
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-card p-5 rounded-lg border border-border shadow-sm text-center"
            >
              <div className="mb-3 flex justify-center">{icon}</div>
              <h3 className="font-semibold text-lg text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* REVENUE BENEFITS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card p-6 rounded-lg border-l-4 border-yellow-400 shadow-sm">
          <h3 className="text-primary font-semibold text-lg flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" /> Club Revenue Per User
          </h3>
          <div className="text-xl font-bold mt-3">£50–£130+</div>
          <p className="text-muted-foreground mt-2">
            Clubs earn a share of platform revenue from each participating member.
          </p>
          <p className="text-xs italic text-muted-foreground mt-2">
            Based on revenue from adult users. Not generated from youth participants.
          </p>
        </div>
        <div className="bg-card p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
          <h3 className="text-primary font-semibold text-lg flex items-center gap-2">
            <User className="w-5 h-5" /> Member Benefit Per User
          </h3>
          <div className="text-xl font-bold mt-3">£50–£130+</div>
          <p className="text-muted-foreground mt-2">
            Members earn cashback through everyday spending, which they can put toward club fees, vouchers, or donations.
          </p>
        </div>
      </div>

      {/* FINAL FEATURE LIST */}
      <div className="bg-card p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-bold text-primary flex items-center gap-2 mb-4">
          <Star className="text-yellow-400 w-5 h-5" />
          Built for Clubs, Designed for Growth
        </h2>
        <ul className="space-y-5">
          {[
            {
              title: "First and Only Platform",
              desc: "The first and only platform built to modernise club management at every level.",
            },
            {
              title: "Simplified Operations",
              desc: "Designed to simplify operations, reduce admin, and create new income streams.",
            },
            {
              title: "Industry Backed",
              desc: "A technology-driven solution backed by key industry players.",
            },
          ].map(({ title, desc }, i) => (
            <li key={i} className="flex items-start gap-3">
              <CircleDot className="text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-md text-foreground">{title}</h4>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default InvestorOverview;
