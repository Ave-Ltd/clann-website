// components/WhyClann.tsx
export const WhyClann = () => {
  return (
    <section id="whyclann" className="container py-24 text-center">
      <div className="max-w-3xl mx-auto mb-16 space-y-5">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
          Why we built Clann
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground">
          <strong>Clubs don’t need another admin tool.</strong> There are already got apps for scheduling and messaging.
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
    </section>
  );
};
