"use client";
import type { NextPage } from "next";
import { useEffect } from "react";

import { BaseLayout } from "../components/layouts";
import { MisionSection, VisionSection, OurValues } from "../components/about";
import { HeroSection } from "../components/home/HeroSection";

// import AOS
import Aos from "aos";
import "aos/dist/aos.css";

const AboutPage: NextPage = () => {
  // useEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
