import { motion } from "framer-motion";
import { useAssociation } from "../../context/AssociationContext";

const InvestorEndorsement = () => {

  const { key, config } = useAssociation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-background space-y-8"
      id="endorsement"
    >
      {/* Section Heading */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">{config?.sportName} Endorsement</h1>
        <div className="h-1 w-24 bg-yellow-400 rounded"></div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary to-blue-900 text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full -mt-20 -mr-20 z-0" />
        <div className="relative z-10 space-y-4">
          <h2 className="text-3xl font-bold">
            A Technology Solution Aligned with {config?.orgShortName}'s Mission
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-3xl leading-relaxed">
            More than just club management — this is about building stronger clubs, communities, and a better future for grassroots {config?.sportNameBenefit}
          </p>
        </div>
      </div>

      {/* Why We Are Doing This */}
      <div className="bg-card p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-primary">Why We Are Doing This</h2>
        <p className="text-muted-foreground">
          Clann exists to give clubs control over their future—ensuring long-term financial stability while easing the operational load on club managers, staff, and volunteers. We believe every community deserves to thrive, and every child should remain connected to the clubs that inspire them.
        </p>
        <p className="text-muted-foreground">
          While we recognise the challenges, we are committed to finding innovative solutions that make a real difference. By building this platform and supporting its proper use, we can create lasting impact—for clubs, for communities, and for the next generation.
        </p>
      </div>

      {/* Why Associations's Support Matters */}
      <div className="bg-card p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-xl font-semibold text-primary">Why {config?.orgShortName}'s Support Matters</h2>
        <p className="text-muted-foreground">
          The {config?.orgShortName}'s plays a vital role in the success of {config?.clubSpecific} by providing essential governance and resources. Our platform is designed to complement these efforts by offering:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "A fully integrated management system",
              text: "Reducing admin and improving club operations.",
              icon: "⚙️"
            },
            {
              title: "Financial sustainability tools",
              text: "Helping clubs generate funding effortlessly.",
              icon: "💰"
            },
            {
              title: "Enhanced engagement & communication",
              text: "Keeping clubs connected and organised.",
              icon: "💬"
            }
          ].map((item, index) => (
            <div key={index} className="bg-muted/10 p-4 rounded-lg border-l-4 border-primary shadow-sm">
              <div className="text-xl mb-2">{item.icon}</div>
              <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground">
          We are not asking {config?.orgShortName}'s for financial investment or operational involvement; instead, we seek {config?.orgShortName}'s endorsement to validate our vision and promote widespread adoption.
        </p>
      </div>

      {/* What We Are Seeking */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "Endorsement & Recognition",
            text: "Validating Clann as a recommended tool for clubs.",
            icon: "🏅"
          },
          {
            title: "Awareness & Introduction",
            text: "Helping clubs understand how this solution benefits them.",
            icon: "📢"
          },
          {
            title: "Adoption Support",
            text: "Encouraging clubs to explore and integrate Clann into their management systems.",
            icon: "🚀"
          }
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-card p-6 rounded-lg shadow-md border-t-4 border-yellow-400 text-center space-y-2"
          >
            <div className="text-3xl">{card.icon}</div>
            <h3 className="text-primary font-semibold">{card.title}</h3>
            <p className="text-muted-foreground text-sm">{card.text}</p>
          </div>
        ))}
      </div>

      {/* How This Benefits Associations & Its Clubs */}
      <div className="bg-card p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-primary">
          How This Benefits {config?.orgShortName}'s & Its Clubs
        </h2>
        <p className="text-muted-foreground">
          {config?.orgShortName} has always been committed to the long-term health of{" "}
          {key === "kickboxing" ? "" : "grassroots "}
          {config?.sportNameBenefit?.toLowerCase()}. Clann strengthens this mission by:
        </p>

        <ul className="space-y-3">
          {[
            "Providing tools that simplify club management and reduce administrative workload.",
            "Introducing passive funding methods that ensure clubs remain financially stable.",
            `Allowing clubs to focus on ${config?.clubSpecifc} rather than administrative challenges.`
          ].map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              <p className="text-muted-foreground">{point}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Long-Term Vision & Next Steps */}
      <div className="bg-card p-6 rounded-lg shadow-md space-y-8">
        <h2 className="text-xl font-semibold text-primary">🔮 Long-Term Vision & Next Steps</h2>

        {[
          {
            title: "Empower Clubs with Better Tools",
            desc: `The future of ${config?.sportName} depends on strong, sustainable clubs — not on clubs struggling to survive year after year.`
          },
          {
            title: "Drive Financial Sustainability",
            desc: "By enabling passive fundraising and reducing admin burden, clubs can operate with greater confidence and less pressure."
          },
          {
            title: "Build a Stronger Future Together",
            desc: `With ${config?.orgShortName} support, we can collectively strengthen ${key === "kickboxing" ? "" : "grassroots "
              }${config?.sportNameBenefit} for our children, our communities, and our future.`

          }
        ].map((step, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
              {idx + 1}
            </div>
            <div>
              <h3 className="text-primary font-semibold mb-1">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default InvestorEndorsement;
