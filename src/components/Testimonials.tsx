import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "Sarah Johnson",
    userName: "@soccerMomSarah",
    comment:
      "Clann has been a game-changer for our team! Managing schedules and keeping up with updates is now so easy.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Coach Mike",
    userName: "@coachMike",
    comment:
      "As a coach, I love the ability to track attendance and communicate with parents in real-time. Highly recommend Clann!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "James Thompson",
    userName: "@teamParentJames",
    comment:
      "Fundraising has always been a challenge, but Clann's built-in tools made it simple and effective for our club.",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Emily Carter",
    userName: "@emilyCarter12",
    comment:
      "The in-app messaging system is fantastic. It's so much easier to coordinate with other parents and the coach!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "David Brown",
    userName: "@davidB",
    comment:
      "Clann has made organizing tournaments a breeze. All the tools we need in one place—couldn’t ask for more!",
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Coach Lisa",
    userName: "@coachLisa",
    comment:
      "This app has transformed how we manage our team. From event planning to attendance tracking, it's all seamless!",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Teams Love{" "}
        </span>
        Clann
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Hear from parents, coaches, and players who use Clann to simplify team management and strengthen their clubs.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage
                    alt=""
                    src={image}
                  />
                  <AvatarFallback>{name.charAt(0)}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
