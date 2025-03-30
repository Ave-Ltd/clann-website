import { motion } from "framer-motion";

const ClubMemberBenefits = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-background space-y-12"
      id="benefits"
    >
      {/* Section Heading */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Member Benefits</h1>
        <div className="h-1 w-24 bg-yellow-400 rounded" />
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -mt-20 -mr-20 z-0" />
        <div className="relative z-10 space-y-4">
          <h2 className="text-3xl font-bold">
            Helping Members Save, Earn, and Support Their Club
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-3xl leading-relaxed">
            Clann is completely free to use — helping members earn cashback, reduce their costs, and support their club through everyday spending.
          </p>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
          Key Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative bg-card rounded-lg shadow-md p-6 overflow-hidden">
            <div className="absolute top-0 left-0 h-1 w-full bg-yellow-400 rounded-t-md" />
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mb-4 font-bold">
              💷
            </div>
            <h3 className="text-lg font-semibold text-primary mb-3">
              Earn Cashback Automatically
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Shop online or in-store through the Clann network",
                "Use the Clann app or browser extension to activate cashback before you shop.",
                "Securely link your bank card—no vouchers or codes required.",
                "Cashback is automatic from participating retailers"
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
            <div className="absolute top-0 left-0 h-1 w-full bg-yellow-400 rounded-t-md" />
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mb-4 font-bold">
              🎛️
            </div>
            <h3 className="text-lg font-semibold text-primary mb-3">
              You're in Control
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "Use your Clann Balance to pay club fees",
                "Convert your balance into gift cards (Amazon, Argos, etc.)",
                "Support club fundraising goals — only if you want to",
                "All balances are fully visible in your dashboard and completely under your control"
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
            <div className="absolute top-0 left-0 h-1 w-full bg-yellow-400 rounded-t-md" />
            <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mb-4 font-bold">
              ❤️
            </div>
            <h3 className="text-lg font-semibold text-primary mb-3">
              Support Without Sacrifice
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                "37.5% of cashback goes to your club",
                "No additional cost to the member",
                "Support happens automatically—no fundraising needed."
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
  <h2 className="text-2xl font-semibold text-primary flex items-center gap-2">
    🛠 <span className="text-yellow-500">How It Works: Cashback + Choice</span>
  </h2>

  <div className="relative pl-12">
    {/* Vertical Line */}
    <div className="absolute left-6 top-5 bottom-5 w-1 bg-yellow-300 rounded-full z-0" />

    {/* Steps */}
    {[
      {
        title: "Make an everyday purchase",
        desc: "Shop online or in-store using the Clann app, your linked payment card, or with our secure browser extension. Everything works seamlessly—no changes to how you shop.",
      },
      {
        title: "Cashback is tracked and split automatically",
        desc: "Whenever you spend with a participating brand, your purchase is tracked and the cashback is automatically split: 37.5% to your personal balance, 37.5% to your club and 25% to support Clann operations.",
      },
      {
        title: "You use your balance however you choose",
        desc: "Your balance accumulates in your Clann Wallet. You decide how to use it — pay club fees, get gift cards, or contribute more to your club. Complete flexibility and control.",
      },
    ].map((step, index) => (
      <div key={index} className="relative mb-8 pl-8 z-10">
        {/* Number Circle */}
        <div className="absolute -left-[18px] top-2 w-9 h-9 rounded-full bg-yellow-500 text-white text-sm font-bold flex items-center justify-center shadow-md z-10">
          {index + 1}
        </div>

        {/* Step Content */}
        <div className="bg-muted p-4 rounded-md shadow-sm">
          <h4 className="font-semibold text-primary mb-1">{step.title}</h4>
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
