import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Check } from "lucide-react";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Free",
    popular: PopularPlanType.NO,
    price: 0,
    description:
      "Get started with the basics to manage your team and streamline communication at no cost.",
    buttonText: "Sign Up Free",
    benefitList: [
      "1 Team member",
      "Event scheduling",
      "Basic messaging tools",
      "Attendance tracking",
      "Community support",
    ],
  },
  {
    title: "Premium",
    popular: PopularPlanType.YES,
    price: 5,
    description:
      "Unlock advanced features for improved team management and streamlined collaboration.",
    buttonText: "Start Free Trial",
    benefitList: [
      "4 Team members",
      "Custom notifications",
      "Team roster management",
      "Detailed analytics and reports",
      "Priority support",
    ],
  },
  {
    title: "Enterprise",
    popular: PopularPlanType.NO,
    price: 40,
    description:
      "For large clubs and organizations, gain access to all features with tailored solutions.",
    buttonText: "Contact Us",
    benefitList: [
      "Unlimited team members",
      "Advanced fundraising tools",
      "Secure data storage",
      "Event RSVPs and confirmations",
      "Dedicated support team",
    ],
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Find the{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Perfect Plan{" "}
        </span>
        for Your Club
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Choose a plan that fits your team’s needs and scale effortlessly as your club grows.
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {pricing.title}
                {pricing.popular === PopularPlanType.YES ? (
                  <Badge
                    variant="secondary"
                    className="text-sm text-primary"
                  >
                    Most popular
                  </Badge>
                ) : null}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">£{pricing.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span
                    key={benefit}
                    className="flex"
                  >
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
