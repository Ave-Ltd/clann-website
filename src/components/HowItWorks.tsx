import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "./Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Easy Team Setup",
    description:
      "Create and manage your teams effortlessly. Add players, coaches, and parents in just a few steps, ensuring everyone stays connected.",
  },
  {
    icon: <MapIcon />,
    title: "Streamlined Scheduling",
    description:
      "Organize games, training sessions, and tournaments with ease. Share schedules instantly with parents and coaches through the app.",
  },
  {
    icon: <PlaneIcon />,
    title: "Fundraising Simplified",
    description:
      "Boost your club's resources by utilizing our built-in fundraising tools. Promote events and track contributions in real-time.",
  },
  {
    icon: <GiftIcon />,
    title: "Engaging Gamification",
    description:
      "Motivate players and teams with reward-based features, leaderboards, and achievements to keep everyone inspired and focused.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Discover how Clann can simplify team management, enhance communication, 
        and help raise funds to support your team’s success.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
