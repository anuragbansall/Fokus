import React from "react";
import HeroSection from "../components/HomePage/HeroSection";
import FavoritesSection from "../components/HomePage/FavoritesSection";
import CommercialSection from "../components/HomePage/CommercialSection";
import WhyUsSection from "../components/HomePage/WhyUsSection";
import KnowUsSection from "../components/HomePage/KnowUsSection";
import CarouselSection from "../components/HomePage/CarouselSection";
import LatestContentSection from "../components/HomePage/LatestContentSection";
import ReviewsSection from "../components/HomePage/ReviewsSection";

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
