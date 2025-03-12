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
    question: "Is Clann free to use?",
    answer:
      "Yes, Clann offers a free plan with essential features for managing your team. Premium plans are available for advanced functionality.",
    value: "item-1",
  },
  {
    question: "Can I manage multiple teams on Clann?",
    answer:
      "Absolutely! Clann allows you to manage multiple teams, schedules, and events all in one place.",
    value: "item-2",
  },
  {
    question: "How does Clann help with fundraising?",
    answer:
      "Clann includes built-in fundraising tools to organize campaigns, track contributions, and help your team meet its goals.",
    value: "item-3",
  },
  {
    question: "Is Clann secure for storing team data?",
    answer:
      "Yes, Clann prioritizes security by using industry-standard encryption to ensure your team data remains safe and confidential.",
    value: "item-4",
  },
  {
    question: "Can parents and players communicate through Clann?",
    answer:
      "Yes, Clann provides messaging and notification features to streamline communication between coaches, parents, and players.",
    value: "item-5",
  },
]

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
            className="mb-4"
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
