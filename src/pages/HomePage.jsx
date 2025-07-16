import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import FavoritesSection from "../components/homepage/FavoritesSection";
import CommercialSection from "../components/homepage/CommercialSection";
import WhyUsSection from "../components/homepage/WhyUsSection";

function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <FavoritesSection />
      <CommercialSection />
      <WhyUsSection />
    </div>
  );
}

export default HomePage;
