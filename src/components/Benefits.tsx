import {
  DollarSign,
  Users,
  CalendarCheck,
} from "lucide-react";
import { ReactNode } from "react";

interface BenefitItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export const Benefits = () => {
  const benefits: BenefitItem[] = [
    {
      icon: <DollarSign className="w-6 h-6 text-blue-700 dark:text-blue-400" />,
      title: "More income, less effort",
      description:
        "We help your Club earn in the background while you focus on running it.",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-700 dark:text-blue-400" />,
      title: "Supplement your fundraising",
      description:
        "Clann adds new income streams without extra admin or volunteer hours.",
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-blue-700 dark:text-blue-400" />,
      title: "Manage everything with Clann",
      description:
        "From scheduling to payments, Clann keeps it all in one place.",
    },
  ];

  return (
    <section className="bg-blue-100 dark:bg-[#1a1a1a] py-20 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-12">
          Why Clubs choose Clann
        </h2>

        <div className="space-y-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white dark:bg-[#2a2a2a] border border-blue-200 dark:border-blue-900 shadow-md rounded-xl px-6 py-5 text-left space-x-6 hover:shadow-lg transition"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-400 dark:from-blue-900 dark:to-blue-600 flex items-center justify-center">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
