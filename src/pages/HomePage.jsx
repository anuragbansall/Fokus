import React from "react";
import HeroSection from "../components/home/HeroSection";
import FavoritesSection from "../components/home/FavoritesSection";
import CommercialSection from "../components/home/CommercialSection";
import WhyUsSection from "../components/home/WhyUsSection";
import KnowUsSection from "../components/home/KnowUsSection";
import CarouselSection from "../components/home/CarouselSection";
import LatestContentSection from "../components/home/LatestContentSection";
import ReviewsSection from "../components/home/ReviewsSection";

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
