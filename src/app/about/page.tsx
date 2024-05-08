import type { NextPage } from "next";
import {
  HeroSection,
  MisionSection,
  VisionSection,
  OurValues,
} from "../components/about";

const AboutPage: NextPage = () => {
  return (
    <>
      <HeroSection></HeroSection>

      <section className="section" id="mision">
        <div className="container">
          <MisionSection></MisionSection>
          <VisionSection></VisionSection>
        </div>
      </section>

      <OurValues></OurValues>
    </>
  );
};

export default AboutPage;
