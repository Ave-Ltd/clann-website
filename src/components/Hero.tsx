import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { MessageSquare, Users, CalendarCheck, Lock } from "lucide-react"; // Icons

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto flex flex-col items-center justify-center text-center lg:text-start lg:grid lg:grid-cols-2 py-20 md:py-32 gap-10">
      {/* Left Content */}
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold">
          <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
            The Future of Club & Organisation Management
          </span>
        </h1>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Empowering clubs, teams, and organisations with cutting-edge tools, seamless operations, and new funding opportunities.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md" onClick={() => navigate("/register")}>
            Learn more
          </Button>

          <Button
            variant="outline"
            className="w-full md:w-1/3 px-6 py-3 border border-gray-400 text-foreground hover:bg-gray-800 font-semibold rounded-lg shadow-md"
            onClick={() => navigate("/login")}
          >
            Partner access
          </Button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 w-full max-w-lg lg:max-w-xl">
        {[
          {
            icon: <Users className="w-12 h-12 text-primary" />,
            title: "Team Management",
            description: "Easily add, remove, and organize team members.",
          },
          {
            icon: <MessageSquare className="w-12 h-12 text-primary" />,
            title: "Real-Time Chat",
            description: "Communicate with teammates instantly via group or private chat.",
          },
          {
            icon: <CalendarCheck className="w-12 h-12 text-primary" />,
            title: "Event Scheduling",
            description: "Plan matches, training sessions, and other events effortlessly.",
          },
          {
            icon: <Lock className="w-12 h-12 text-primary" />,
            title: "Secure Access",
            description: "Keep your team's data safe with secure authentication.",
          },
        ].map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-card shadow-lg rounded-lg p-6 border h-40 transition hover:scale-105 hover:shadow-xl"
          >
            {icon}
            <h3 className="text-lg font-bold mt-2">{title}</h3>
            <p className="text-sm text-muted-foreground text-center">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
