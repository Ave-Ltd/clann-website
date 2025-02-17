import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import player from "../assets/player.png"
import donation from "../assets/donation.png";
import calander from "../assets/calander.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Seamless Team Management",
    description:
      "Effortlessly add players, coaches, and parents to your team. Manage your roster, track attendance, and keep everyone updated in real-time.",
    image: player,
  },
  {
    title: "Simplified Scheduling",
    description:
      "Plan games, training sessions, and tournaments with ease. Share schedules with the whole team instantly, and ensure no one misses an event.",
    image: calander,
  },
  {
    title: "Efficient Fundraising Tools",
    description:
      "Raise funds for your team with built-in tools that streamline event promotion and track contributions, helping your club grow sustainably.",
    image: donation,
  },
];

const featureList: string[] = [
  "Roster Management",
  "Event Scheduling",
  "Fundraising Tools",
  "Team Messaging",
  "Custom Notifications",
  "Attendance Tracking",
  "Real-time Updates",
  "User-friendly Design",
  "Secure Platform",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      {/* Feature Badges */}
      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
