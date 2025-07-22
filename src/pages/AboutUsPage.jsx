import React from "react";
import HeroSection from "../components/aboutUs/HeroSection";
import InfoSection from "../components/aboutUs/InfoSection";
import FoundersSection from "../components/aboutUs/FoundersSection";

function AboutUsPage() {
  return (
    <main className="">
      {/* Hero Section */}
      <HeroSection />

      {/* Colored Info Sections */}
      <InfoSection />

      {/* Founders */}
      <FoundersSection />
    </main>
  );
}

export default AboutUsPage;
