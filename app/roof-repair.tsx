import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ProfessionalRoofing from "./components/ProfessionalRoofing";
import ExploringRoofing from "./components/ExploringRoofing";

import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ProfessionalRoofing />

      <ExploringRoofing />
 
      <Footer />
    </div>
  );
}
