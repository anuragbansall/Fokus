import React from "react";
import { Link } from "react-router-dom";
import heroBgDesktopVideo from "../../assets/hero-bg-desktop.mp4";
import heroBgDesktopImage from "../../assets/hero-bg-desktop.jpg";
import heroBgMobileVideo from "../../assets/hero-bg-mobile.mp4";
import heroBgMobileImage from "../../assets/hero-bg-mobile.jpg";
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
    <section className="relative w-full overflow-hidden">
      {/* Background Video */}
      <div className="w-full object-cover object-top max-h-screen">
        <video
          src={heroBgDesktopVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top hidden md:block aspect-[16/9] max-h-full"
          aria-hidden="true"
          preload="auto"
          poster={heroBgDesktopImage}
        />
        <video
          src={heroBgMobileVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top block md:hidden aspect-[9/16]"
          aria-hidden="true"
          preload="auto"
          poster={heroBgMobileImage}
        />
      </div>

      {/* Overlay with CTA */}
      <div className="absolute z-10 inset-0 flex items-center justify-center px-4">
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
          <Link to="/products">
            <Button
              className="w-40 sm:w-48 rounded-full text-base sm:text-lg relative z-10"
              aria-label="Buy Fokus Energy Drink Now"
            >
              Buy Now
            </Button>
          </Link>
        </LiquidGlass>
      </div>
    </section>
  );
}

export default HeroSection;
