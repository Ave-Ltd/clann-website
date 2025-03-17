import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Clann.App?",
    answer:
      "Clann.App is a modern club and organisation management platform designed to simplify operations, improve communication, and support long-term financial sustainability.",
    value: "item-1",
  },
  {
    question: "Who can use Clann.App?",
    answer:
      "Clann.App is built for clubs, teams, and organisations across all sectors—sports, community groups, charities, and more. Whether you manage a local football club or a membership-based organisation, Clann.App provides the tools you need.",
    value: "item-2",
  },
  {
    question: "Is Clann.App free to use?",
    answer:
      "Yes, Clann.App is completely free for clubs and organisations within our associated and endorsed networks. These groups receive full access to all features at no cost. For other organisations, access options may vary—contact us to learn more.",
    value: "item-3",
  },
  {
    question: "How does Clann.App help clubs grow financially?",
    answer:
      "Clann.App provides smart financial solutions that help clubs build long-term sustainability. Our technology-driven approach allows clubs to benefit naturally, without adding extra admin work or fundraising pressure.",
    value: "item-4",
  },
  {
    question: "How can my club get started with Clann.App?",
    answer:
      "Getting started is easy! Simply contact us to discuss how Clann.App can support your organisation and explore your access options.",
    value: "item-5",
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
        <h2 className="text-2xl md:text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="text-base md:text-lg text-muted-foreground">
          Clear answers to ensure confidence in the platform and its benefits.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
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
