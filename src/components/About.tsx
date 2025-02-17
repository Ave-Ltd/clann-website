import { Statistics } from "./Statistics";
import team from "../assets/team.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={team}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Us!
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                At Clann, we believe in empowering parents, coaches, and kids to stay organized and connected in their sports teams. 
                Founded by a passionate team of developers—Phil, Mick, and myself—we created this platform to streamline game schedules, 
                training sessions, and tournaments while making it easier to raise funds for your club.
              </p>
              <p className="text-xl text-muted-foreground mt-4">
                Whether you're managing a single team or coordinating multiple events, Clann provides an intuitive solution to 
                track everything. Our goal is to help sports communities thrive, all while simplifying the management process and 
                giving coaches and parents more time to focus on what truly matters—the kids.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
