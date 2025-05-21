import { motion } from "framer-motion";
import {
  Wrench,
  User2,
  Users,
  HeartHandshake,
  Store,
  ShoppingCart,
  CreditCard,
  Tag,
  Star,
  CheckCircle,
  HandCoins,
  PiggyBank
} from "lucide-react";

const ClubPassiveRevenue = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-[24px] bg-background space-y-12"
      id="passiveRevenue"
    >
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Club Revenue</h1>
        <div className="h-1 w-24 bg-yellow-400 rounded"></div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -mt-20 -mr-20 z-0" />
        <div className="relative z-10 space-y-4">
          <h2 className="text-3xl font-bold mb-2">Unlocking Sustainable Funding for Clubs</h2>
          <p className="text-white/90 text-lg">
            Helping clubs grow financially without increasing fees or relying solely on traditional fundraising.
          </p>
        </div>
      </div>

      {/* Traditional Funding Complement */}
      <div className="bg-card p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
          <HandCoins className="w-5 h-5 text-blue-600 dark:text-yellow-400" /> Supporting, Not Replacing Existing Club Funding
        </h3>
        <p className="text-muted-foreground">
          Clann isn’t here to replace your current income — it’s here to boost it. Whether your club relies on memberships,
          session fees, or sponsorships, Clann introduces a passive, sustainable way to grow your revenue without adding
          more admin.
        </p>
      </div>

      {/* Passive Revenue Model */}
      <div className="bg-card p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-primary mb-3 flex items-center gap-2">
          <PiggyBank className="w-5 h-5 text-blue-600 dark:text-yellow-400" /> How Clubs Generate Revenue — Passive Fundraising
        </h3>
        <p className="text-muted-foreground">
          Clubs benefit financially from <strong>everyday transactions</strong>, rather than extra fundraising efforts.
        </p>
      </div>

      {/* How It Works */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
          <Wrench className="w-5 h-5 text-yellow-500" />
          <span>How It Works: Cashback on Everyday Spending</span>
        </h3>

        <div className="space-y-6">
          {[
            {
              title: "Make a regular purchase",
              desc: "A user makes a normal purchase (e.g., a £50 grocery shop)."
            },
            {
              title: "Earn Cashback",
              desc: "A small percentage (e.g., 1–5%) is earned as cashback from the retailer."
            },
            {
              title: "Automatic Allocation",
              desc: "The cashback is automatically allocated: 25% to Clann, 37.5% to the club, and 37.5% to the member."
            }
          ].map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg border border-border p-4 bg-white dark:bg-muted"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-500 text-white text-sm font-bold shadow-md">
                  {index + 1}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Who Contributes */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-primary">Who Contributes?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              icon: <User2 className="w-6 h-6" />,
              title: "Club Members",
              list: ["Participants", "Coaches", "Volunteers"]
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Families and Guardians",
              list: ["Supporting youth participation"]
            },
            {
              icon: <HeartHandshake className="w-6 h-6" />,
              title: "Family and Supporters",
              list: ["Extended family", "Friends"]
            },
            {
              icon: <Store className="w-6 h-6" />,
              title: "Club Partners",
              list: ["Local businesses", "Sponsors"]
            }
          ].map(({ icon, title, list }, i) => (
            <div key={i} className="bg-card p-4 rounded-lg shadow-md text-center">
              <div className="text-2xl mb-2 flex justify-center">{icon}</div>
              <h4 className="text-primary font-semibold">{title}</h4>
              <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                {list.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Eligible Spending */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-primary">What Kind of Spending Qualifies?</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            "Supermarkets & Grocery",
            "Clothing & Footwear",
            "Online Retail",
            "Dinning & Takeaways",
            "Fuel & Travel",
            "Entertainment"
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card text-center p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <ShoppingCart className="mx-auto mb-2 w-6 h-6 text-primary" />
              <p className="text-sm font-semibold text-primary">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Points */}
      <div className="bg-card p-6 rounded-lg shadow-md border-t-4 border-yellow-400 space-y-4">
        <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
          <Star className="text-blue-500 w-5 h-5" /> Key Points
        </h3>
        <ul className="space-y-3">
          {["Fully passive — No selling, no extra effort.",
            "Supports clubs without additional fundraising.",
            "Clann is the only platform to combine club tools with fully passive fundraising.",
            "If a club decides to stop using Clann, all accumulated member balances will remain fully accessible to the members. Members will be prompted to convert these balances into vouchers before the club’s account is closed."]
            .map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle className="text-green-500 w-4 h-4 mt-1" />
                <span>{point}</span>
              </li>
            ))}
        </ul>
      </div>

      {/* Coming Soon */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-primary">Coming Soon: Additional Revenue Streams</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <CreditCard className="w-6 h-6" />,
              title: "Card-Linked Offers",
              status: "Planned",
              desc: "Users securely link their card once and automatically earn cashback at participating retailers. No need for vouchers, QR codes, or manual tracking. Cashback is instantly processed and credited to clubs."
            },
            {
              icon: <Tag className="w-6 h-6" />,
              title: "Club Marketplace & Shop",
              status: "Planned",
              desc: "Second-hand marketplace for members to buy and sell equipment, kit, and other club-related items."
            }
          ].map(({ icon, title, status, desc }, idx) => (
            <div
              key={idx}
              className="relative bg-card p-6 rounded-lg shadow-md border-l-4 border-yellow-400"
            >
              <div className="text-2xl mb-2">{icon}</div>
              <h4 className="font-semibold text-primary mb-1">
                {title}
                <span className="ml-2 bg-yellow-300 text-xs text-black px-2 py-1 rounded-full">
                  {status}
                </span>
              </h4>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ClubPassiveRevenue;
