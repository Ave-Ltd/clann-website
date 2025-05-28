import { useState } from "react";
import {
  CalendarCheck,
  MessageSquare,
  Wallet,
  LockKeyhole,
  Bell,
  ShieldCheck,
} from "lucide-react";

import calendarGif from "../assets/gifs/calendar.gif";
import messageGif from "../assets/gifs/social-engagement.gif";
import walletGif from "../assets/gifs/money.gif";
import roleGif from "../assets/gifs/task-management.gif";
import notifyGif from "../assets/gifs/profit.gif";
import secureGif from "../assets/gifs/calendar.gif";

const serviceList = [
  {
    title: "Smart Scheduling",
    description: "Create and manage training, matches, or events — all visible in one place.",
    icon: <CalendarCheck className="w-5 h-5 mr-2" />,
    gif: calendarGif,
  },
  {
    title: "Built-in Messaging",
    description: "No more chasing messages across apps — keep it all in Clann.",
    icon: <MessageSquare className="w-5 h-5 mr-2" />,
    gif: messageGif,
  },
  {
    title: "Club Wallet",
    description: "Track earnings, view balances, and withdraw funds with full transparency.",
    icon: <Wallet className="w-5 h-5 mr-2" />,
    gif: walletGif,
  },
  {
    title: "Role-Based Access",
    description: "Staff, members, parents — everyone sees only what they need.",
    icon: <LockKeyhole className="w-5 h-5 mr-2" />,
    gif: roleGif,
  },
  {
    title: "Automated Notifications",
    description: "Send the right updates to the right people — from payments to sessions, changes, and reminders.",
    icon: <Bell className="w-5 h-5 mr-2" />,
    gif: notifyGif,
  },
  {
    title: "Secure Payments",
    description: "Collect fees, event payments, or subscriptions safely and efficiently.",
    icon: <ShieldCheck className="w-5 h-5 mr-2" />,
    gif: secureGif,
  },
];

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = serviceList[activeIndex];

  return (
    <section
      id="features"
      className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-white dark:bg-[#1a1a1a] transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-foreground mb-10">Features</h2>

      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        {/* Buttons and GIF side-by-side, centered */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="flex flex-col gap-3 w-64">
            {serviceList.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-sm font-semibold px-4 py-3 rounded-md border transition-all text-left
                  ${
                    activeIndex === index
                      ? "bg-primary text-primary-foreground shadow"
                      : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          <div className="max-w-xs w-full">
            <div className="bg-white dark:bg-muted rounded-xl shadow-md p-4">
              <img
                src={activeFeature.gif}
                alt={activeFeature.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Lock-height feature description */}
        <p
          className="text-muted-foreground text-base sm:text-lg px-4"
          style={{
            minHeight: "3.5rem", // ≈ two lines
            maxWidth: "600px",
          }}
        >
          {activeFeature.description}
        </p>
      </div>
    </section>
  );
};
