import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Sponsors } from "../components/Sponsors";
import { HowItWorks } from "../components/HowItWorks";
import { Services } from "../components/Services";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { ContactSection } from "@/components/ui/contact-us";
// import { Cta } from "../components/Cta";
// import { Testimonials } from "../components/Testimonials";
// import { About } from "../components/About";
// import { Features } from "../components/Features";
// import { Team } from "../components/Team";
// import { Pricing } from "../components/Pricing";
// import { Newsletter } from "../components/Newsletter";

export const Landing = () => {
  return (
    <>
      <Navbar />
      {/* Hero section */}
      <Hero />
      <Sponsors />
      {/* Who we are & what we do section */}
      {/* <About /> */}
      {/* Team to be used in the Investors page? */}
      {/* <Team /> */}
      <Services />
      {/* Features section potentially just a duplicate of services */}
      {/* <Features />       */}
      <HowItWorks />      
                 
      {/* <Pricing /> */}
      {/* <Newsletter /> */}
      {/* <Testimonials /> */}
      {/* <Cta /> */}
      <ContactSection /> 
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
};
