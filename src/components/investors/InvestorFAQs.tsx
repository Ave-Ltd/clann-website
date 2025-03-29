import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

const FAQList = [
  {
    question: "Who can access Clann?",
    value: "item-1",
    answer: (
      <>
        Clann is open to <span className="font-semibold text-primary">all clubs</span> across different sports and activities.
        <ul className="mt-2 list-disc list-inside">
          <li>Clubs within <span className="font-semibold text-primary">endorsed networks</span> will receive free access.</li>
          <li>As the platform expands, additional club types will be onboarded, with pricing models determined based on scale and partnerships.</li>
        </ul>
      </>
    ),
  },
  {
    question: "Why is Clann free for endorsed clubs?",
    value: "item-2",
    answer: (
      <>
        To ensure <span className="font-semibold text-primary">widespread adoption</span> and <span className="font-semibold text-primary">demonstrate impact</span>, we are:
        <ul className="mt-2 list-disc list-inside">
          <li>Providing <span className="font-semibold text-primary">free access</span> to clubs within endorsed networks.</li>
          <li>Allowing all clubs to join, with pricing models evolving as we scale.</li>
          <li>Funding development through <span className="font-semibold text-primary">affiliate cashback, marketplace transactions, and optional premium features</span>, rather than upfront fees.</li>
        </ul>
      </>
    ),
  },
  {
    question: "How does Clann ensure financial transparency?",
    value: "item-3",
    answer: (
      <>
        We operate on a <span className="font-semibold text-primary">clear and structured revenue model</span>:
        <ul className="mt-2 list-disc list-inside">
          <li><span className="font-semibold text-primary">Clubs receive 37.5%</span> and <span className="font-semibold text-primary">members receive 37.5%</span> — together, retaining at least 75% of revenue.</li>
          <li><span className="font-semibold text-primary">No hidden fees</span> — all earnings are trackable in each club's dashboard.</li>
          <li><span className="font-semibold text-primary">Full transparency</span> — clubs see exactly how much they earn and where it's allocated.</li>
        </ul>
      </>
    ),
  },
  {
    question: "How does Clann compare to other club management platforms?",
    value: "item-4",
    answer: (
      <>
        Unlike traditional club management software, Clann:
        <ul className="mt-2 list-disc list-inside">
          <li><span className="font-semibold text-primary">Combines tools</span> with passive fundraising opportunities.</li>
          <li><span className="font-semibold text-primary">No mandatory subscription fees</span> for endorsed networks.</li>
          <li><span className="font-semibold text-primary">Generates revenue</span> for clubs rather than just processing payments.</li>
        </ul>
        <p className="mt-2">
          Competitors like <span className="font-semibold text-primary">Spond, Heja, and TeamSnap</span> help with logistics but <span className="font-semibold text-primary">don’t create financial sustainability</span>.
        </p>
      </>
    ),
  },
  {
    question: "How is user and payment data protected?",
    value: "item-5",
    answer: (
      <>
        Security and privacy are a top priority:
        <ul className="mt-2 list-disc list-inside">
          <li><span className="font-semibold text-primary">GDPR-compliant</span> with strict data protection policies.</li>
          <li><span className="font-semibold text-primary">No financial data stored</span> — payments handled by secure third-party providers.</li>
          <li><span className="font-semibold text-primary">No data sold or shared</span> — Clann is built for clubs, not advertising.</li>
        </ul>
      </>
    ),
  },
  {
    question: "What happens if a member is part of two clubs?",
    value: "item-6",
    answer: (
      <>
        <ul className="mt-2 list-disc list-inside">
          <li>The <span className="font-semibold text-primary">37.5% club share</span> is split equally among all clubs the member is linked to.</li>
          <li>The member always keeps <span className="font-semibold text-primary">their full 37.5% balance</span>.</li>
        </ul>
      </>
    ),
  },
  {
    question: "What happens if a club decides to stop using Clann?",
    value: "item-7",
    answer: (
      <>
        <ul className="mt-2 list-disc list-inside">
          <li>Clubs can <span className="font-semibold text-primary">withdraw funds anytime</span> — no lock-ins.</li>
          <li>All data remains <span className="font-semibold text-primary">club property</span> and is exportable.</li>
          <li>Members retain their credits — they’ll be prompted to convert them before closure.</li>
        </ul>
      </>
    ),
  },
]

const InvestorFAQs = () => {
  const handleContactClick = () => {
    const trigger = document.querySelector<HTMLDivElement>("#investor-dashboard-section-trigger")
    if (trigger) {
      trigger.dispatchEvent(new CustomEvent("switch-section", { detail: "contact" }))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-background space-y-8"
      id="faqs"
    >
      {/* Heading */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">FAQs</h1>
        <div className="h-1 w-24 bg-yellow-400 rounded"></div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -mt-20 -mr-20 z-0" />
        <div className="relative z-10 space-y-4">
          <h2 className="text-2xl font-bold">Your Questions Answered</h2>
          <p className="text-base text-white/90">
            Clear answers to ensure confidence in the platform and its benefits.
          </p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <Accordion type="single" collapsible className="w-full">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value} className="mb-4">
            <AccordionTrigger className="text-left no-underline hover:no-underline text-primary">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Contact CTA */}
      <div className="bg-yellow-300 text-black p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-2 md:max-w-xl">
          <h2 className="text-xl font-bold">Still Have Questions?</h2>
          <p>
            Our team is ready to help clarify any aspects of Clann that you're curious about. We're committed to providing transparency and support for all clubs and members.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-block mt-3 px-5 py-2 bg-primary text-white font-semibold rounded hover:bg-blue-800 transition"
          >
            Contact Support
          </button>
        </div>
        <div className="text-5xl">🎧</div>
      </div>
    </motion.div>
  )
}

export default InvestorFAQs
