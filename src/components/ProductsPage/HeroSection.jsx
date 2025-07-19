import React from "react";
import threeBottleImage from "../../assets/three-bottles.png";

function HeroSection() {
  return (
    <section className="flex items-center justify-around w-full p-8 text-center bg-gradient-to-r from-[rgb(255,98,98)] via-[#94DA49] to-[#FFE060] text-white mb-12 relative overflow-hidden">
      <div className="hidden md:block">
        <h1 className="text-5xl font-bold mb-4">Discover Fokus Flavours</h1>
        <p className="text-xl max-w-xl mx-auto">
          Natural ingredients, refreshing hydration, and a burst of
          energy—choose your Fokus!
        </p>
      </div>

      <img
        src={threeBottleImage}
        alt="Fokus Drinks"
        className="w-[16rem] h-auto"
      />
    </section>
  );
}

export default HeroSection;
