import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface FAQProps {
  question: string;
  answer: JSX.Element;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is Clann.App?",
    answer: (
      <>
        Clann.App is a modern{" "}
        <span className="font-semibold">club and organisation management platform</span> designed to simplify operations, improve communication, and support{" "}
        <span className="font-semibold">long-term financial sustainability</span>.
      </>
    ),
    value: "item-1",
  },
  {
    question: "Who can use Clann.App?",
    answer: (
      <>
        Clann.App is built for{" "}
        <span className="font-semibold">clubs, teams, and organisations</span> across all sectors—<span className="font-semibold">sports, community groups, charities</span>, and more. Whether you manage a local football club or a membership-based organisation, Clann.App provides the tools you need.
      </>
    ),
    value: "item-2",
  },
  {
    question: "Is Clann.App free to use?",
    answer: (
      <>
        Yes, Clann.App is <span className="font-semibold">completely free</span> for clubs and organisations within our <span className="font-semibold">associated and endorsed networks</span>. These groups receive full access to all features at no cost. For other organisations, access options may vary—{" "}
        <span className="font-semibold">contact us</span> to learn more.
      </>
    ),
    value: "item-3",
  },
  {
    question: "How does Clann.App help clubs grow financially?",
    answer: (
      <>
        Clann.App provides <span className="font-semibold">smart financial solutions</span> that help clubs build{" "}
        <span className="font-semibold">long-term sustainability</span>. Our{" "}
        <span className="font-semibold">technology-driven approach</span> allows clubs to benefit naturally, without adding extra admin work or fundraising pressure.
      </>
    ),
    value: "item-4",
  },
  {
    question: "How can my club get started with Clann.App?",
    answer: (
      <>
        Getting started is easy! Simply <span className="font-semibold">contact us</span> to discuss how Clann.App can support your organisation and explore your access options.
      </>
    ),
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value} className="mb-4">
            <AccordionTrigger className="text-left">{question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-base text-muted-foreground">{answer}</p>
            </AccordionContent>
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
