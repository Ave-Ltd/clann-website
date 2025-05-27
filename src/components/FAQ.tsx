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
        Clann is a platform that helps Clubs{" "}
        <span className="font-semibold">manage their operations</span> and{" "}
        <span className="font-semibold">generate passive income</span> — without fundraising campaigns or extra admin.
      </>
    ),
    value: "item-1",
  },
  {
    question: "Who can use Clann?",
    answer: (
      <>
        Any <span className="font-semibold">UK-based club, group, or organisation</span> —{" "}
        <span className="font-semibold">sports, martial arts, youth, or community</span>.
      </>
    ),
    value: "item-2",
  },
  {
    question: "Is Clann free to use?",
    answer: (
      <>
        Yes. The <span className="font-semibold">core platform is free</span> for Clubs, with{" "}
        <span className="font-semibold">optional upgrades</span> in future.
      </>
    ),
    value: "item-3",
  },
  {
    question: "How does Clann help clubs grow financially?",
    answer: (
      <>
        We help Clubs <span className="font-semibold">unlock recurring income streams</span> —{" "}
        <span className="font-semibold">without extra admin</span> or{" "}
        <span className="font-semibold">pressure on volunteers</span>.
      </>
    ),
    value: "item-4",
  },
  {
    question: "Can I try it now?",
    answer: (
      <>
        We’re <span className="font-semibold">not live yet</span>, but you can{" "}
        <span className="font-semibold">register interest now</span> and we’ll notify you when we launch.
      </>
    ),
    value: "item-5",
  },
  {
    question: "What happens after I register interest?",
    answer: (
      <>
        We’ll <span className="font-semibold">add your Club to the early access list</span> and keep you updated —{" "}
        <span className="font-semibold">no spam, no obligations</span>.
      </>
    ),
    value: "item-6",
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
          href="#registerinterest"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
