import React from "react";
import HeroSection from "../components/Homepage/HeroSection";
import FavoritesSection from "../components/Homepage/FavoritesSection";
import CommercialSection from "../components/Homepage/CommercialSection";
import WhyUsSection from "../components/Homepage/WhyUsSection";
import KnowUsSection from "../components/Homepage/KnowUsSection";
import CarouselSection from "../components/Homepage/CarouselSection";
import LatestContentSection from "../components/Homepage/LatestContentSection";
import ReviewsSection from "../components/Homepage/ReviewsSection";

function HomePage() {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <FavoritesSection />
      <CommercialSection />
      <WhyUsSection />
      <KnowUsSection />
      <CarouselSection />
      <LatestContentSection />
      <ReviewsSection />
    </main>
  );
}

export default HomePage;
