import type { NextPage } from "next";

import {
  ServiceSection,
  FeaturesSection,
  ClientsSection,
  SolutionSection,
  SubscribeSection,
} from "./components/home";
import { HeroSection } from "./components/ui";

export const metadata = {
  title: "ESSETEC",
  description:
    "Soluciones integrales que garanticen la protección de propiedades y activos mediante el uso de tecnologías innovadoras.",
};

const Home: NextPage = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <FeaturesSection />
      <SolutionSection />
      <ClientsSection />
      {/* <SubscribeSection /> */}
    </>
  );
};

export default Home;
