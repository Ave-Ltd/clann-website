import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
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
      <Hero />
      <Services />
      <HowItWorks />      
      <ContactSection /> 
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
};
