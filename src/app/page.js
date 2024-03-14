import FeaturesSection from "./Components/FeaturesSection/FeaturesSection";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import ServiceSection from "./Components/ServicesSection/ServiceSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
