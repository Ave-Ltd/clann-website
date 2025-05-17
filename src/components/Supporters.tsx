export const Supporters = () => {
  return (
    <section id="supporters" className="container py-24 text-center">
      {/* Why we built Clann */}
      <div className="max-w-3xl mx-auto mb-16 space-y-5">
        <h2 className="text-3xl md:text-4xl font-semibold">Why we built Clann</h2>

        <p className="text-lg md:text-xl text-muted-foreground">
          <strong>Clubs don’t need another admin tool.</strong> You’ve already got apps for scheduling and messaging.
        </p>

        <p className="text-lg md:text-xl text-muted-foreground">
          But <strong className="text-primary">none of them solve the real problem</strong>:
          <br />
          <span className="italic">How to bring in money — without asking volunteers to do more.</span>
        </p>

        <p className="text-lg md:text-xl font-semibold text-primary">
          Clann was built to change that.
        </p>

        <p className="text-lg md:text-xl text-muted-foreground">
          We help your Club <strong className="text-primary">generate income in the background</strong> — with no extra work.
        </p>

        <p className="text-lg md:text-xl">
          <strong>No selling.</strong> <strong>No donations.</strong> <strong>No fundraising pressure.</strong>
        </p>

        <p className="text-lg md:text-xl font-semibold text-primary">
          Just money back into your Club, where it belongs.
        </p>
      </div>

      {/* Supported By Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-12">Supported By</h2>

      {/* Responsive Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          gap-8 
          justify-items-center 
          md:grid-cols-5 
          md:grid-rows-2 
          md:gap-y-12 
          max-w-6xl 
          mx-auto
        "
      >
        {/* Top row (desktop) */}
        <img src="./src/assets/business-gateway.png" alt="Business Gateway" className="w-36 object-contain md:col-start-1 md:row-start-1" />
        <img src="./src/assets/codebase.png" alt="CodeBase" className="w-36 object-contain md:col-start-3 md:row-start-1" />
        <img src="./src/assets/techscaler.png" alt="Techscaler" className="w-36 object-contain md:col-start-5 md:row-start-1" />

        {/* Bottom row (desktop) */}
        <img src="./src/assets/scottish-enterprise.png" alt="Scottish Enterprise" className="w-36 object-contain md:col-start-2 md:row-start-2" />
        <img src="./src/assets/barclays-eagle-labs.png" alt="Barclays Eagle Labs" className="w-36 object-contain md:col-start-4 md:row-start-2" />
      </div>
    </section>
  );
};
