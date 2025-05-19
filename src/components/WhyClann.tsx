// components/WhyClann.tsx

import { AlertTriangle, Clock, Users } from "lucide-react";

export const WhyClann = () => {
  const reasons = [
    {
      title: "Clubs are under pressure",
      text: "Costs are rising. Support is shrinking. We built Clann to change that.",
      icon: <AlertTriangle className="w-6 h-6 text-blue-700 dark:text-blue-400" />,
    },
    {
      title: "Time is already stretched",
      text: "Clann reduces admin and unlocks funding without extra effort.",
      icon: <Clock className="w-6 h-6 text-blue-700 dark:text-blue-400" />,
    },
    {
      title: "Communities deserve better",
      text: "This platform exists to help clubs grow, connect, and thrive — sustainably.",
      icon: <Users className="w-6 h-6 text-blue-700 dark:text-blue-400" />,
    },
  ];

  return (
    <section id="about" className="bg-white dark:bg-[#1a1a1a] py-24 px-4 sm:px-6 lg:px-8 text-center transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
          <span className="underline underline-offset-8 decoration-blue-500">Why We Built Clann</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12">
          We are developing Clann because Clubs deserve more than admin tools.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-[#2a2a2a] rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md dark:shadow-none text-center flex flex-col items-center justify-start space-y-4 transition duration-300 hover:shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-400 dark:from-blue-900 dark:to-blue-600 flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
          We’re here to change that.
        </p>
      </div>
    </section>
  );
};
