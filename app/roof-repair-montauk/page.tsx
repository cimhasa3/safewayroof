import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ProfessionalRoofing from "./components/ProfessionalRoofing";
import ExploringRoofing from "./components/ExploringRoofing";
import WhyChoose from "./components/WhyChoose";
import Footer from "./components/Footer";
import Review from "./components/Review";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ProfessionalRoofing />
      <Review />
      <ExploringRoofing />
      <WhyChoose />
      <Footer />
    </div>
  );
}
