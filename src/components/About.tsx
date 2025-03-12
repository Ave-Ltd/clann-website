// import { Statistics } from "./Statistics";

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src="./assets/team.png"
            alt="Team"
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
              </p>
              <p className="text-xl text-muted-foreground mt-4">
              Managing a club or organisation shouldn’t be complicated. 
              Clann.App provides the tools you need to operate efficiently, engage your community, and create long-term financial stability—all in one intuitive platform
              </p>
            </div>
            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
