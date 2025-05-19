import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { RegisterInterest } from "@/components/RegisterInterest";
import { Supporters } from "@/components/Supporters";
import { WhyClann } from "@/components/WhyClann";
import { PassiveFundraising } from "@/components/PassiveFundraising";
import { Benefits } from "@/components/Benefits";
// import { ContactSection } from "@/components/ui/contact-us";
// import { Cta } from "../components/Cta";
// import { Testimonials } from "../components/Testimonials";
// import { About } from "../components/About";
// import { Features } from "../components/FeaturesLegacyComponent";
// import { Team } from "../components/Team";
// import { Pricing } from "../components/Pricing";
// import { Newsletter } from "../components/Newsletter";

export const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyClann />
      <Supporters />
      <Benefits />
      <Features />
      <PassiveFundraising />      
      <RegisterInterest />
      {/* <ContactSection />  */}
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
};
