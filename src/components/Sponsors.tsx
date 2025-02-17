import { Radar } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={34} />,
    name: "Scottish Youth Football Association",
  },
  {
    icon: <Radar size={34} />,
    name: "Rugby League",
  },
  {
    icon: <Radar size={34} />,
    name: "Aberdeenshire Council",
  },
  {
    icon: <Radar size={34} />,
    name: "Sports Scotland",
  },
  {
    icon: <Radar size={34} />,
    name: "Community Fund",
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
        <div className="flex gap-8 animate-scroll">
          {/* Duplicate list for infinite effect */}
          {[...sponsors, ...sponsors].map(({ icon, name }, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-muted-foreground/60 whitespace-nowrap"
            >
              <span>{icon}</span>
              <h3 className="text-lg font-bold">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
