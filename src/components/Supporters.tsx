export const Supporters = () => {
  return (
    <section id="supporters" className="container py-24 text-center">
      {/* Why we built Clann */}
      <div className="max-w-3xl mx-auto mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold">Why we built Clann</h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          Clubs across the UK are struggling — rising costs, shrinking support, and too much admin.
        </p>
        <p className="text-lg md:text-xl font-semibold text-primary">
          Clann exists to change that.
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
