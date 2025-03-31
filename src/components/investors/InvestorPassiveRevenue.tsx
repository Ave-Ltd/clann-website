import { motion } from "framer-motion";
import { useAssociation } from "../../context/AssociationContext";

const InvestorPassiveRevenue = () => {

  const { key, config } = useAssociation();

  const mainGroup =
    key === "kickboxing"
      ? config?.["orgPeople/WkcCustom"]
      : config?.["orgPeople/WkcCustom"] || "Players";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-background space-y-8"
      id="passive-revenue"
    >
      {/* Page Heading */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Club Revenue</h1>
        <div className="h-1 w-24 bg-yellow-400 rounded"></div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -mt-20 -mr-20 z-0" />
        <div className="relative z-10 space-y-4">
          <h2 className="text-3xl font-bold">
            Unlocking Sustainable Funding for Clubs
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-3xl leading-relaxed">
            Helping clubs grow financially without increasing fees or relying solely on traditional fundraising.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-card p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-primary mb-3">
          Supporting, Not Replacing  {config?.orgShortName} Grants & Funding
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          {key === "kickboxing" ? (
            config?.["orgShortName/WkcCustom"]
          ) : (
            <>
              {config?.orgShortName} funding remains a vital part of club growth and development. Clann is designed to complement these efforts by offering a sustainable, community-powered income stream—enabling existing funding to go further and support long-term progress.
            </>
          )}
        </p>
      </div>

      {/* Passive Revenue Model Card */}
      <div className="relative bg-card p-6 rounded-lg shadow-md overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400" />
        <div className="relative z-10">
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 text-lg font-bold">
            💸
          </div>
          <h3 className="text-lg font-semibold text-primary mb-2">
            How Clubs Generate Revenue — Passive Fundraising
          </h3>
          <p className="text-muted-foreground">
            Clubs benefit financially from <strong>everyday transactions</strong>, rather than extra fundraising efforts.
          </p>
        </div>
      </div>

      {/* How It Works Timeline */}
      <div className="bg-card p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-primary">
          How It Works: Cashback on Everyday Spending
        </h2>
        <div className="space-y-6 relative border-l-4 border-blue-400 pl-6">
          {[
            {
              number: 1,
              title: "Make a Normal Purchase",
              desc: "A user makes a normal purchase (e.g., a £50 grocery shop)."
            },
            {
              number: 2,
              title: "Earn Cashback",
              desc: "A small percentage (e.g., 1–5%) is earned as cashback from the retailer."
            },
            {
              number: 3,
              title: "Automatic Allocation",
              desc: "The cashback is automatically allocated: 25% to Clann, 37.5% to the club, and 37.5% is credited to the member as a balance."
            }
          ].map((step) => (
            <div key={step.number} className="relative pl-4">
              <div className="absolute -left-7 top-1 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                {step.number}
              </div>
              <h4 className="text-primary font-semibold mb-1">{step.title}</h4>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contributors Section */}
      <div>
        <h2 className="text-xl font-semibold text-primary mb-4">Who Contributes?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              title: "Club Members",
              list: [mainGroup, "Coaches", "Volunteers"],
              icon: "🧍"
            },
            {
              title: "Parents and Guardians",
              list: ["Covering costs for children"],
              icon: "👨‍👩‍👧"
            },
            {
              title: "Family and Supporters",
              list: ["Extended family", "Friends"],
              icon: "❤️"
            },
            {
              title: "Club Partners",
              list: ["Local businesses", "Sponsors"],
              icon: "🏪"
            }
          ].map((group, index) => (
            <div
              key={index}
              className="bg-card p-4 rounded-lg shadow-md text-center space-y-2"
            >
              <div className="text-2xl">{group.icon}</div>
              <h3 className="text-primary font-semibold">{group.title}</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {group.list.map((item, i) => (
                  <li key={i} className="flex items-center justify-center gap-1">
                    <span className="text-green-500">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Spending Categories */}
      <div>
        <h2 className="text-xl font-semibold text-primary mb-4">
          What Kind of Spending Qualifies?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            "Supermarkets & Grocery",
            "Clothing & Footwear",
            "Online Retail",
            "Dining & Takeaways",
            "Petrol & Travel",
            "Entertainment"
          ].map((name, i) => (
            <div
              key={i}
              className="bg-card text-center p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-3xl mb-2">🛒</div>
              <p className="text-sm font-semibold text-primary">{name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key Points */}
      <div className="bg-card p-6 rounded-lg shadow-md space-y-4 border-t-4 border-yellow-400">
        <h3 className="text-xl font-semibold text-primary">Key Points</h3>
        <ul className="space-y-3">
          {[
            "Fully passive — No selling, no extra effort.",
            "Supports clubs without additional fundraising.",
            "No other club management platform offers this feature.",
            "If a club leaves Clann, members can still access and redeem their balances."
          ].map((point, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Future Features */}
      <div>
        <h2 className="text-xl font-semibold text-primary mb-4">
          Coming Soon: Additional Revenue Streams
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative bg-card p-6 rounded-lg shadow-md border-l-4 border-yellow-400">
            <div className="text-2xl mb-2">💳</div>
            <h3 className="font-semibold text-primary mb-1">
              Card-Linked Offers <span className="ml-2 bg-yellow-300 text-xs text-black px-2 py-1 rounded-full">Planned</span>
            </h3>
            <p className="text-muted-foreground">
              Securely link cards for instant cashback at participating retailers—no manual steps.
            </p>
          </div>

          <div className="relative bg-card p-6 rounded-lg shadow-md border-l-4 border-yellow-400">
            <div className="text-2xl mb-2">🏷️</div>
            <h3 className="font-semibold text-primary mb-1">
              Club Marketplace & Shop <span className="ml-2 bg-yellow-300 text-xs text-black px-2 py-1 rounded-full">Planned</span>
            </h3>
            <p className="text-muted-foreground">
              Second-hand gear marketplace and official club shop to raise additional funds.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InvestorPassiveRevenue;
