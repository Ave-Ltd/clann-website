import styles from "../styles/features.module.css";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

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
    image: "./assets/player.png",
  },
  {
    title: "Simplified Scheduling",
    description:
      "Plan games, training sessions, and tournaments with ease. Share schedules with the whole team instantly, and ensure no one misses an event.",
    image: "./assets/calander.png",
  },
  {
    title: "Efficient Fundraising Tools",
    description:
      "Raise funds for your team with built-in tools that streamline event promotion and track contributions, helping your club grow sustainably.",
    image: "./assets/donation.png",
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
    <section id="features" className={styles.featuresSection}>
      <h2 className={styles.title}>
        Many{" "}
        <span className={styles.gradientText}>
          Great Features
        </span>
      </h2>

      {/* Feature Badges */}
      <div className={styles.badgeWrapper}>
        {featureList.map((feature: string) => (
          <Badge key={feature} variant="secondary" className={styles.badge}>
            {feature}
          </Badge>
        ))}
      </div>

      {/* Feature Cards */}
      <div className={styles.cardGrid}>
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title} className={styles.card}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p>{description}</p>
            </CardContent>

            <CardFooter>
              <img
                src={image}
                alt={title}
                className={styles.image}
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
