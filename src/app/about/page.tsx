import type { NextPage } from "next";
import { BaseLayout } from "../components/layouts";
import { MisionSection, VisionSection, OurValues } from "../components/about";
import { HeroSection } from "../components/home/HeroSection";

const AboutPage: NextPage = () => {
  return (
    <BaseLayout>
      <HeroSection></HeroSection>
      <OurValues></OurValues>
      <MisionSection></MisionSection>
      <VisionSection></VisionSection>
    </BaseLayout>
  );
};

export default AboutPage;
