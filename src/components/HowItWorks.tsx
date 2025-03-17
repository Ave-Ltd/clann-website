import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MedalIcon, MapIcon, PlaneIcon } from "./Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <PlaneIcon />,
    title: "No Additional Work Required",
    description:
      "Funding should enhance operations, not add complexity. Clubs benefit without extra admin work for volunteers or organisers.",
  },
  {
    icon: <MedalIcon />,
    title: "Designed for Stability",
    description:
      "Our approach focuses on long-term financial sustainability rather than short-term gains, ensuring lasting support for your club.",
  },
  {
    icon: <MapIcon />,
    title: "Seamless & Effortless",
    description:
      "Clubs and organisations benefit naturally through their normal activities, without needing to change how they operate.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-bold">
        Unlocking New Growth & Funding{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Opportunities
        </span>
      </h2>

      {/* General Overview */}
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Every club and organisation needs financial stability. We believe{" "}
        <span className="font-semibold">modern technology</span> can create{" "}
        <span className="font-semibold">new, sustainable funding opportunities</span>—
        without adding extra workload to volunteers, committees, or organisers.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                <span className="text-lg md:text-xl font-bold">{title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
