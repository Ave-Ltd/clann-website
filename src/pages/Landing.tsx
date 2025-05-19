import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { RegisterInterest } from "@/components/RegisterInterest";
import { WhyClann } from "@/components/WhyClann";
import { Benefits } from "@/components/Benefits";

export const Landing = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyClann />
      <Benefits />
      <Features />
      <RegisterInterest />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
};
