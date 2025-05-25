import { motion } from "framer-motion";
import {
  PiggyBank,
  SlidersHorizontal,
  HeartHandshake,
  Wrench,
  ShoppingCart,
  Wallet,
  HandCoins,
} from "lucide-react";

const ClubMemberBenefits = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-12"
      id="benefits"
    >
      {/* Section Heading */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Member Benefits</h1>
        <div className="h-1 w-24 bg-accent rounded" />
      </div>

      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold">
          Helping Members Save, Earn, and Support Their Club
        </h2>
        <p className="text-base md:text-lg text-primary-foreground/90 max-w-3xl leading-relaxed">
          Clann is completely free to use — helping members earn cashback, reduce their costs, and support their club through everyday spending.
        </p>
      </div>

      {/* Key Benefits Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
          <PiggyBank className="w-6 h-6 text-blue-600 dark:text-accent" />
          Key Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative bg-card rounded-lg shadow-md p-6 overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-accent rounded-t-md" />
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <PiggyBank className="w-7 h-7 text-blue-600 dark:text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-3">
              Earn Cashback Automatically
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Shop online or in-store through the Clann network",
                "Use the Clann app or browser extension to activate cashback before you shop.",
                "Securely link your bank card—no vouchers or codes required.",
                "Cashback is automatic from participating retailers",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="relative bg-card rounded-lg shadow-md p-6 overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-accent rounded-t-md" />
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <SlidersHorizontal className="w-7 h-7 text-blue-600 dark:text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-3">
              You're in Control
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Use your Clann Balance to pay club fees",
                "Convert your balance into gift cards (Amazon, Argos, etc.)",
                "Support club fundraising goals — only if you want to",
                "All balances are fully visible in your dashboard and completely under your control",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="relative bg-card rounded-lg shadow-md p-6 overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-accent rounded-t-md" />
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
              <HeartHandshake className="w-7 h-7 text-blue-600 dark:text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-3">
              Support Without Sacrifice
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "37.5% of cashback goes to your club",
                "No additional cost to the member",
                "Support happens automatically—no fundraising needed.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* How It Works: Cashback + Choice */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-primary flex items-center gap-2">
          <Wrench className="w-6 h-6 text-blue-600 dark:text-accent" />
          <span>How It Works: Cashback + Choice</span>
        </h3>

        <div className="space-y-6">
          {[
            {
              icon: <ShoppingCart className="w-5 h-5 text-blue-600 dark:text-accent" />,
              title: "Make an everyday purchase",
              desc: "Shop online or in-store using the Clann app, your linked payment card, or with our secure browser extension. Everything works seamlessly—no changes to how you shop.",
            },
            {
              icon: <HandCoins className="w-5 h-5 text-blue-600 dark:text-accent" />,
              title: "Cashback is tracked and split automatically",
              desc: "Whenever you spend with a participating brand, your purchase is tracked and the cashback is automatically split: 37.5% to your personal balance, 37.5% to your club and 25% to support Clann operations.",
            },
            {
              icon: <Wallet className="w-5 h-5 text-blue-600 dark:text-accent" />,
              title: "You use your balance however you choose",
              desc: "Your balance accumulates in your Clann Wallet. You decide how to use it — pay club fees, get gift cards, or contribute more to your club. Complete flexibility and control.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-4 rounded-lg border border-border p-4 bg-white dark:bg-muted"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 dark:bg-accent text-white dark:text-black text-sm font-bold shadow-md">
                  {index + 1}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1 flex items-center gap-2">
                  {step.icon}
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Highlight Section */}
      <div className="bg-card p-6 rounded-lg shadow-md space-y-4">
        <h3 className="text-lg md:text-xl font-semibold text-primary">
          Designed for Clubs, Their Members, and Their Communities
        </h3>
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Clann makes it easy for anyone connected to a club to contribute and benefit — without changing their behaviour or spending more.
        </p>
      </div>
    </motion.div>
  );
};

export default ClubMemberBenefits;
