import type { NextPage } from "next";

import { BaseLayout } from "./components/layouts";
import {
  ServiceSection,
  HeroSection,
  FeaturesSection,
  ClientsSection,
  SolutionSection,
} from "./components/home";

export const metadata = {
  title: "ESSETEC",
  description:
    "Soluciones integrales que garanticen la protección de propiedades y activos mediante el uso de tecnologías innovadoras.",
};

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <HeroSection />
      <ServiceSection />
      <FeaturesSection />
      <SolutionSection />
      <ClientsSection />
      {/* <SubscribeSection /> */}
    </BaseLayout>
  );
};

export default Home;
