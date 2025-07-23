import React from "react";
import HeroSection from "../components/aboutUs/HeroSection";
import InfoSection from "../components/aboutUs/InfoSection";
import FoundersSection from "../components/aboutUs/FoundersSection";
import PageTransition from "../components/PageTransition";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

function AboutUsPage() {
  return (
    <PageTransition>
      <main className="">
        {/* Hero Section */}
        <HeroSection />

        {/* Colored Info Sections */}
        <FadeInWhenVisible delay={0.1}>
          <InfoSection />
        </FadeInWhenVisible>

        {/* Founders */}
        <FadeInWhenVisible delay={0.2}>
          <FoundersSection />
        </FadeInWhenVisible>
      </main>
    </PageTransition>
  );
}

export default AboutUsPage;
