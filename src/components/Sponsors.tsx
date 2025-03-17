import { Radar } from "lucide-react";
import "../styles/sponsors.css"; // Import the external CSS file

interface SponsorProps {
  logo: string; // Placeholder for the sponsor's logo
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    logo: "./assets/scottish-enterprise.png",
    name: "Scottish Enterprise",
  },
  {
    logo: "./assets/business-gateway.png",
    name: "Business Gateway",
  },
  {
    logo: "./assets/techscaler.png",
    name: "Techscaler",
  },
  {
    logo: "./assets/codebase.png",
    name: "Codebase",
  },
  {
    logo: "./assets/barclays-eagle-labs.png",
    name: "Barclays Eagle Labs",
  },
];

export const Sponsors = () => {
  return (
    <section id="sponsors" className="container py-12 overflow-hidden relative">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Investors and Founders
      </h2>

      {/* Scrolling Wrapper */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-scroll flex gap-8">
          {/* Duplicate list for infinite effect */}
          {[...sponsors, ...sponsors].map(({ logo, name }, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[150px] md:min-w-[200px] lg:min-w-[250px] p-4 bg-card shadow-md rounded-lg transition-transform hover:scale-105"
            >
              {/* Sponsor Logo */}
              <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-full overflow-hidden">
                {logo ? (
                  <img src={logo} alt={name} className="w-full h-full object-contain" />
                ) : (
                  <Radar size={34} className="text-muted-foreground" />
                )}
              </div>

              {/* Sponsor Name */}
              <h3 className="text-lg font-semibold text-center mt-3">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
