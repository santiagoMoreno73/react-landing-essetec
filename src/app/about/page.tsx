import type { NextPage } from "next";
import { MisionSection, VisionSection, OurValues } from "../components/about";
import { HeroSection } from "../components/ui";

const AboutPage: NextPage = () => {
  return (
    <>
      <HeroSection isVideo={false} imgUrl="/images/about_us.jpg" />

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
