import React from "react";
import HeroSection from "../components/homepage/HeroSection";
import FavoritesSection from "../components/homepage/FavoritesSection";
import CommercialSection from "../components/homepage/CommercialSection";
import WhyUsSection from "../components/homepage/WhyUsSection";
import KnowUsSection from "../components/homepage/KnowUsSection";
import CarouselSection from "../components/homepage/CarouselSection";
import LatestContentSection from "../components/homepage/LatestContentSection";
import ReviewsSection from "../components/homepage/ReviewsSection";

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
