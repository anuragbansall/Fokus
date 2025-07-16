import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import FavoritesSection from "../components/homepage/FavoritesSection";
import CommercialSection from "../components/homepage/CommercialSection";

function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <FavoritesSection />
      <CommercialSection />
    </div>
  );
}

export default HomePage;
