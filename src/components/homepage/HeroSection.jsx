import React from "react";
import heroVideo from "../../assets/hero-video.mp4";
import Button from "../Button";
import watermelon from "../../assets/watermelon.png";
import lemon from "../../assets/lemon.png";
import LiquidGlass from "../LiquidGlass";

function HeroSection() {
  const fruits = [
    {
      id: 1,
      name: "Watermelon",
      image: watermelon,
      style: { top: "-20px", left: "10px" },
    },
    {
      id: 2,
      name: "Lemon",
      image: lemon,
      style: { top: "20px", left: "230px" },
    },
  ];

  return (
    <section className="relative w-full h-screen max-h-[800px] overflow-hidden">
      {/* Background Video */}
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-top"
        aria-hidden="true"
      />

      {/* Overlay with CTA */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <LiquidGlass className="absolute left-1/2 -translate-x-1/2 bottom-[6rem] px-8 sm:px-16 py-2 rounded-full group">
          {/* Fruit Icons */}
          {fruits.map((fruit) => (
            <img
              key={fruit.id}
              src={fruit.image}
              alt={fruit.name}
              style={fruit.style}
              className="h-10 sm:h-12 absolute opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
              loading="lazy"
            />
          ))}

          {/* Buy Now Button */}
          <Button
            className="w-40 sm:w-48 rounded-full text-base sm:text-lg relative z-10"
            aria-label="Buy Fokus Energy Drink Now"
          >
            Buy Now
          </Button>
        </LiquidGlass>
      </div>
    </section>
  );
}

export default HeroSection;
