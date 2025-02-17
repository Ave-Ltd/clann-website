import { Button } from "../ui/button";

export const Cta = () => {
  return (
    <section
      id="cta"
      className="bg-muted/50 py-16 my-24 sm:my-32 rounded-lg"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Manage Your
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              {" "}
              Team Effortlessly{" "}
            </span>
            with Clubs Hub
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">
            Clubs Hub brings parents, coaches, and players together with tools to organize games, track attendance, plan tournaments, and streamline communication—all in one easy-to-use platform.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button
            className="w-full md:mr-4 md:w-auto"
            onClick={() => {
              // Add logic for handling demo requests, e.g., navigating or triggering a modal
              console.log("Demo Requested");
            }}
          >
            Request a Demo
          </Button>
          <Button
            variant="outline"
            className="w-full md:w-auto border text-foreground hover:bg-muted"
            onClick={() => {
              // Add logic for viewing features, e.g., scrolling to features section
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View All Features
          </Button>
        </div>
      </div>
    </section>
  );
};
