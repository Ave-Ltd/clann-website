import { useNavigate } from "react-router-dom";
import { MessageSquare, Users, CalendarCheck, Lock } from "lucide-react";

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto flex flex-col items-center justify-center text-center lg:text-start lg:grid lg:grid-cols-2 py-20 md:py-32 gap-10">
      {/* Left Content */}
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-[hsl(var(--primary-accessible))]">
          A Smarter, Simpler Way to Manage & Grow Clubs & Organisations
        </h1>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Empowering clubs, teams, and organisations with cutting-edge tools, seamless operations, and new funding opportunities.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
          <button
            onClick={() => navigate("/register")}
            className="w-full md:w-1/3 px-6 py-3 font-semibold rounded-lg shadow-md bg-[hsl(var(--primary-accessible))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary-hover))] transition"
          >
            Download the app
          </button>

          <button
            onClick={() => navigate("/login")}
            className="w-full md:w-1/3 px-6 py-3 font-semibold rounded-lg shadow-md border border-border text-foreground hover:bg-muted transition"
          >
            Partner access
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-lg lg:max-w-xl">
        {[
          {
            icon: <Users className="w-12 h-12 text-[hsl(var(--primary-accessible))]" />,
            title: "Fundraising",
            description: "Create long-term financial stability through team funding.",
          },
          {
            icon: <Users className="w-12 h-12 text-[hsl(var(--primary-accessible))]" />,
            title: "Team Management",
            description: "Easily add, remove, and organise team members.",
          },
          {
            icon: <CalendarCheck className="w-12 h-12 text-[hsl(var(--primary-accessible))]" />,
            title: "Event Scheduling",
            description: "Plan matches, training sessions, and events effortlessly.",
          },
          {
            icon: <MessageSquare className="w-12 h-12 text-[hsl(var(--primary-accessible))]" />,
            title: "Real-Time Chat",
            description: "Communicate instantly via group or private chat.",
          },
          {
            icon: <Lock className="w-12 h-12 text-[hsl(var(--primary-accessible))]" />,
            title: "Secure Access",
            description: "Keep your team's data safe with secure authentication.",
          },
          {
            icon: <Lock className="w-12 h-12 text-[hsl(var(--primary-accessible))]" />,
            title: "Data Privacy",
            description: "Protect your community with privacy-first tools.",
          },
        ].map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start bg-card shadow-lg rounded-lg p-6 border min-h-[180px] h-auto transition hover:scale-105 hover:shadow-xl text-center"
          >
            {icon}
            <h3 className="text-lg font-bold mt-4 text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
