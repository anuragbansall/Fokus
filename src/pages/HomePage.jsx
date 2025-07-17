import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/homepage/HeroSection";
import FavoritesSection from "../components/homepage/FavoritesSection";
import CommercialSection from "../components/homepage/CommercialSection";
import WhyUsSection from "../components/homepage/WhyUsSection";
import KnowUsSection from "../components/homepage/KnowUsSection";
import CarouselSection from "../components/homepage/CarouselSection";
import LatestContentSection from "../components/homepage/LatestContentSection";

function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <Helmet>
        <title>Fokus Energy Drink – Stay Sharp, Stay Hydrated 🍹</title>
        <meta
          name="description"
          content="Fokus Energy Drink by Triggered and Fukra Insaan. No Added Sugar, Coconut Water Based, and Natural Caffeine. Stay sharp, stay focused!"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Fokus Energy Drink – Stay Sharp, Stay Hydrated 🍹"
        />
        <meta
          property="og:description"
          content="India’s most hyped energy drink by Triggered & Fukra Insaan. Refreshing coconut water based energy with natural ingredients."
        />
        <meta
          property="og:image"
          content="https://fokus-energy.vercel.app/preview.png"
        />
        <meta property="og:url" content="https://fokus-energy.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fokus Energy Drink – Stay Sharp, Stay Hydrated 🍹"
        />
        <meta
          name="twitter:description"
          content="Stay sharp with Fokus Energy Drink – coconut water based, no added sugar, natural caffeine!"
        />
        <meta
          name="twitter:image"
          content="https://fokus-energy.vercel.app/preview.png"
        />
      </Helmet>

      <HeroSection />
      <FavoritesSection />
      <CommercialSection />
      <WhyUsSection />
      <KnowUsSection />
      <CarouselSection />
      <LatestContentSection />
    </div>
  );
}

export default HomePage;
