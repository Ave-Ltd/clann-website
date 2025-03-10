import { motion } from "framer-motion";

const InvestorFAQs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-8"
      id="faqs"
    >
      {/* Headline & Subheadline */}
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          Clear answers to ensure confidence in the platform and its benefits.
        </p>
      </div>

      {/* 1. Who can access Clann.App? */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          1. Who can access Clann.App?
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            Clann.App is open to all clubs across different sports and activities.
          </li>
          <li>
            Initially, clubs within endorsed networks will receive free access.
          </li>
          <li>
            As the platform expands, additional club types will be onboarded, with pricing models determined based on scale and partnerships.
          </li>
        </ul>
      </div>

      {/* 2. Why is Clann.App free for endorsed clubs? */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          2. Why is Clann.App free for endorsed clubs?
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            Providing free access to clubs within endorsed networks.
          </li>
          <li>
            Allowing all clubs to join, but pricing models may evolve as we scale.
          </li>
          <li>
            Funding development through affiliate cashback, marketplace transactions, and optional premium features instead of charging clubs upfront.
          </li>
        </ul>
      </div>

      {/* 3. How does Clann.App ensure financial transparency? */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          3. How does Clann.App ensure financial transparency?
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            Clubs retain at least 75% of all revenue generated through Clann.App.
          </li>
          <li>
            No hidden fees or surprise charges—all transactions and earnings are fully trackable in each club’s dashboard.
          </li>
          <li>
            Full financial transparency ensures clubs know exactly how much they are earning and where funds are allocated.
          </li>
        </ul>
      </div>

      {/* 4. How does this compare to other club management platforms? */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          4. How does this compare to other club management platforms?
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            Combines club management tools with passive fundraising opportunities.
          </li>
          <li>
            Does not charge mandatory subscription fees for endorsed networks.
          </li>
          <li>
            Generates revenue for clubs instead of just processing payments.
          </li>
          <li>
            Competitors like Spond, Heja, and TeamSnap provide useful tools but do not create financial sustainability for clubs.
          </li>
        </ul>
      </div>

      {/* 5. How is user and payment data protected? */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          5. How is user and payment data protected?
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            GDPR-compliant with strict data protection policies.
          </li>
          <li>
            No financial or payment details are stored by Clann.App—transactions are handled via secure third-party processors.
          </li>
          <li>
            No data is sold or shared with advertisers—our platform is built for clubs, not for selling user information.
          </li>
        </ul>
      </div>

      {/* 6. What happens if a club decides to stop using Clann.App? */}
      <div>
        <h3 className="text-lg md:text-xl font-semibold mb-2">
          6. What happens if a club decides to stop using Clann.App?
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>
            Clubs can withdraw their funds at any time—no lock-ins or restrictions.
          </li>
          <li>
            All data remains the property of the club and can be exported upon request.
          </li>
          <li>
            If a club chooses to stop using the platform, there are no penalties or financial implications.
          </li>
        </ul>
      </div>

      {/* CTA */}
      {/* <div>
        <a
          href="#contact"  // Adjust to point to your contact/support page
          className="inline-block px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
        >
          Let’s Address Any Remaining Questions →
        </a>
      </div> */}
    </motion.div>
  );
};

export default InvestorFAQs;
