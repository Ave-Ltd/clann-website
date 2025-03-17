import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQList = [
  {
    question: "Who can access Clann.App?",
    answer: (
      <>
        Clann.App is open to <strong>all clubs</strong> across different sports and activities.
        <ul className="mt-2 list-disc list-inside">
          <li>Initially, clubs within <strong>endorsed networks</strong> will receive free access.</li>
          <li>As the platform expands, additional club types will be onboarded, with pricing models determined based on scale and partnerships.</li>
        </ul>
      </>
    ),
    value: "item-1",
  },
  {
    question: "Why is Clann.App free for endorsed clubs?",
    answer: (
      <>
        To ensure <strong>widespread adoption</strong> and <strong>demonstrate impact</strong>, we are:
        <ul className="mt-2 list-disc list-inside">
          <li>Providing <strong>free access</strong> to clubs within endorsed networks.</li>
          <li>Allowing all clubs to join, with pricing models evolving as we scale.</li>
          <li>Funding development through <strong>affiliate cashback, marketplace transactions, and optional premium features</strong>, rather than upfront fees.</li>
        </ul>
      </>
    ),
    value: "item-2",
  },
  {
    question: "How does Clann.App ensure financial transparency?",
    answer: (
      <>
        We operate on a <strong>clear and structured revenue model</strong>:
        <ul className="mt-2 list-disc list-inside">
          <li>Clubs retain at least <strong>75% of all revenue</strong> generated through Clann.App.</li>
          <li>No hidden fees or surprise charges—all transactions and earnings are trackable in each club’s dashboard.</li>
          <li><strong>Full financial transparency</strong> ensures clubs know exactly how much they are earning and where funds are allocated.</li>
        </ul>
      </>
    ),
    value: "item-3",
  },
  {
    question: "How does Clann.App compare to other club management platforms?",
    answer: (
      <>
        Unlike traditional club management software, Clann.App:
        <ul className="mt-2 list-disc list-inside">
          <li>Combines club management tools with <strong>passive fundraising opportunities</strong>.</li>
          <li>Does not charge <strong>mandatory subscription fees</strong> for endorsed networks.</li>
          <li>Generates revenue for clubs, rather than just processing payments.</li>
        </ul>
        <p className="mt-2">Competitors like <strong>Spond, Heja, and TeamSnap</strong> provide useful tools but <strong>do not create financial sustainability for clubs</strong>.</p>
      </>
    ),
    value: "item-4",
  },
  {
    question: "How is user and payment data protected?",
    answer: (
      <>
        Security and privacy are a top priority:
        <ul className="mt-2 list-disc list-inside">
          <li><strong>GDPR-compliant</strong> with strict data protection policies.</li>
          <li>No financial or payment details are stored by Clann.App—transactions are handled via <strong>secure third-party processors</strong>.</li>
          <li>No data is sold or shared with advertisers—Clann.App is built for clubs, not for selling user information.</li>
        </ul>
      </>
    ),
    value: "item-5",
  },
  {
    question: "What happens if a club decides to stop using Clann.App?",
    answer: (
      <>
        <ul className="mt-2 list-disc list-inside">
          <li>Clubs can <strong>withdraw their funds at any time</strong>—no lock-ins or restrictions.</li>
          <li>All data remains the <strong>property of the club</strong> and can be exported upon request.</li>
          <li>If a club chooses to stop using the platform, there are <strong>no penalties or financial implications</strong>.</li>
        </ul>
      </>
    ),
    value: "item-6",
  },
];

const InvestorFAQs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-card shadow-lg rounded-lg space-y-8"
      id="faqs"
    >
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">
          Your Questions Answered
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          Clear answers to ensure confidence in the platform and its benefits.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value} className="mb-4">
            <AccordionTrigger className="text-left no-underline hover:no-underline">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions? {" "}
        <a
          rel="noreferrer noopener"
          href="#contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </motion.div>
  );
};

export default InvestorFAQs;
