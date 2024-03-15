import Copyright from "./Components/Copyright/Copyright";
import FeaturesSection from "./Components/FeaturesSection/FeaturesSection";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import ServiceSection from "./Components/ServicesSection/ServiceSection";
import ClientsSection from "./Components/ClientsSection/ClientsSection";
import SolutionSection from "./Components/SolutionsSection/SolutionSection";
import SubscribeSection from "./Components/SubscribeSection/SubscribeSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <FeaturesSection />
      <ClientsSection />
      <SolutionSection />
      <SubscribeSection />
      <Footer />
      <Copyright />
    </div>
  );
}
