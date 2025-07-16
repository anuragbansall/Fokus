import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import FavoritesSection from "../components/homepage/FavoritesSection";

function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <FavoritesSection />
    </div>
  );
}

export default HomePage;
