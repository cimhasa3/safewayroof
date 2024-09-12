import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ProfessionalRoofing from "./components/ProfessionalRoofing";

import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ProfessionalRoofing />
 
      <WhyChoose />
      <Footer />
    </div>
  );
}
