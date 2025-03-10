import { motion } from "framer-motion";

const InvestorPassiveRevenue = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-8"
      id="passive-revenue"
    >
      {/* Headline */}
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold">
          Unlocking Sustainable Funding for Clubs
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          Helping clubs grow financially without increasing fees or relying solely on traditional fundraising.
        </p>
      </div>

      {/* 1. Supporting, Not Replacing SYFA Grants & Funding */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          1. Supporting, Not Replacing SYFA Grants & Funding
        </h3>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>SYFA grants remain essential for club development.</li>
          <li>This platform complements, not replaces, existing funding sources.</li>
          <li>Financial sustainability ensures grants focus on growth, not survival.</li>
        </ul>
      </div>

      {/* 2. How Clubs Generate Revenue – Passive Fundraising */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          2. How Clubs Generate Revenue – Passive Fundraising
        </h3>
        <p className="mb-2">
          Clubs benefit financially from everyday transactions, not extra effort.
        </p>

        <h4 className="text-base md:text-lg font-semibold mt-4">
          Cashback on Everyday Spending – The Core Revenue Model
        </h4>
        <p className="mb-2">
          Every time a club member, parent, or supporter shops with our affiliate network partners,
          a small percentage of the transaction is paid back as cashback, with a portion automatically
          directed to their club.
        </p>

        <div className="space-y-2">
          <h5 className="text-sm md:text-base font-semibold">Who Contributes?</h5>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Club Members</strong> – Players, coaches, and volunteers.</li>
            <li><strong>Parents &amp; Guardians</strong> – Covering costs for children.</li>
            <li><strong>Family &amp; Supporters</strong> – Extended family and friends.</li>
            <li><strong>Club Partners &amp; Local Businesses</strong> – Can also contribute through purchases.</li>
          </ul>
        </div>

        <div className="space-y-2 mt-4">
          <h5 className="text-sm md:text-base font-semibold">What Kind of Spending Qualifies?</h5>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Supermarkets &amp; Grocery Shopping</li>
            <li>Clothing &amp; Footwear</li>
            <li>Online Retail (Amazon, eBay, etc.)</li>
            <li>Dining &amp; Takeaways</li>
            <li>Petrol &amp; Travel</li>
            <li>Entertainment &amp; Streaming Services</li>
          </ul>
        </div>

        <h5 className="text-sm md:text-base font-semibold mt-4 mb-2">How It Works:</h5>
        <ol className="list-decimal list-inside ml-4 space-y-1">
          <li>
            A user makes a normal purchase (e.g., £50 grocery shop at a cashback-enabled supermarket).
          </li>
          <li>A small percentage (e.g., 1-5%) is earned as cashback from the retailer.</li>
          <li>
            The cashback is automatically allocated to their club, with no extra cost to the user.
          </li>
        </ol>

        <p className="mt-2">
          <strong>Key Points:</strong> Fully passive – no selling, no extra effort. Supports clubs without requiring
          additional donations. Exclusive – no other club management platform has done this before.
        </p>
      </div>

      {/* 3. Card-Linked Offers (Planned Feature) */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          3. Card-Linked Offers (Planned Feature)
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Users securely link their card once and automatically earn cashback at participating retailers.</li>
          <li>No need for vouchers, QR codes, or manual tracking.</li>
          <li>Cashback is instantly processed and credited to clubs.</li>
        </ul>
      </div>

      {/* 4. Club Marketplace & Shop */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          4. Club Marketplace &amp; Shop
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Second-hand marketplace – Members buy and sell used sports gear.</li>
          <li>Club shop – Sell official club apparel, kits, and branded merchandise.</li>
        </ul>
      </div>

      {/* 5. Utilities & Insurance Commissions (Planned Feature) */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          5. Utilities &amp; Insurance Commissions (Planned Feature)
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Clubs and members switch providers &amp; earn cashback on:</li>
          <ul className="list-disc list-inside ml-6 space-y-1">
            <li>Gas &amp; electricity</li>
            <li>Broadband &amp; mobile</li>
            <li>Home &amp; car insurance</li>
          </ul>
        </ul>
      </div>

      {/* 6. Projected Financial Impact for Clubs */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          6. Projected Financial Impact for Clubs
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Potential to generate £X per year per club (based on member participation).</li>
          <li>Reduces reliance on membership fees &amp; fundraising events.</li>
          <li>Sustainable revenue means long-term financial security.</li>
        </ul>
      </div>

      {/* 7. The Long-Term Vision – Aligning with SYFA’s Mission */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          7. The Long-Term Vision – Aligning with SYFA’s Mission
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Stronger clubs mean stronger grassroots football.</li>
          <li>Financially stable clubs can invest in better facilities &amp; opportunities.</li>
          <li>A nationwide movement to create self-sufficient, thriving clubs.</li>
        </ul>
      </div>

      {/* CTA */}
      {/* <div>
        <a
          href="#next-section" // Adjust to link to your next section ID
          className="inline-block px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
        >
          Why SYFA’s Support Will Strengthen This Model →
        </a>
      </div> */}
    </motion.div>
  );
};

export default InvestorPassiveRevenue;
