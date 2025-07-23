import React from "react";
import HeroSection from "../components/home/HeroSection";
import FavoritesSection from "../components/home/FavoritesSection";
import CommercialSection from "../components/home/CommercialSection";
import WhyUsSection from "../components/home/WhyUsSection";
import KnowUsSection from "../components/home/KnowUsSection";
import CarouselSection from "../components/home/CarouselSection";
import LatestContentSection from "../components/home/LatestContentSection";
import ReviewsSection from "../components/home/ReviewsSection";
import PageTransition from "../components/PageTransition";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

function HomePage() {
  return (
    <PageTransition>
      <main className="w-full min-h-screen">
        <HeroSection />
        <FadeInWhenVisible delay={0.1}>
          <FavoritesSection />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <CommercialSection />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.1}>
          <WhyUsSection />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <KnowUsSection />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.1}>
          <CarouselSection />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <LatestContentSection />
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.1}>
          <ReviewsSection />
        </FadeInWhenVisible>
      </main>
    </PageTransition>
  );
}

export default HomePage;
