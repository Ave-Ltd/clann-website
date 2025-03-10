import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Seamless Club & Organisation Management",
    description:
      "Everything in one place, simple and effective",
    icon: <ChartIcon />,
  },
  {
    title: "Scheduling & Communication",
    description:
      "Keep teams, members, and supporters connected effortlessly.",
    icon: <WalletIcon />,
  },
  {
    title: "Secure Membership & Event Payment",
    description:
      "Simplify finances with easy-to-use payment solutions.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Community Engagement & Growth",
    description:
      "Strengthening relationships between organisations and their members",
    icon: <MagnifierIcon />,
  },
  {
    title: "Unlocking Financial Sustainability",
    description:
      "Helping clubs and organisations become more self-sufficient",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Core{" "}
            </span>
            Services
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8">
            At Clann, we provide tailored services to simplify team management,
            enhance communication, and empower clubs to reach their full
            potential.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src="./assets/services.png" // ✅ Fixed path
          className="w-[00px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
