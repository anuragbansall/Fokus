import React from "react";
import heroVideo from "../../assets/hero-video.mp4";
import Button from "../Button";
import watermelon from "../../assets/watermelon.png";
import strawberry from "../../assets/strawberry.png";
import kiwi from "../../assets/kiwi.png";
import lemon from "../../assets/lemon.png";

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
    <div className="w-full h-screen relative">
      <video
        src={heroVideo}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute z-10 left-1/2 bottom-[6rem] -translate-x-1/2 px-16 py-2 rounded-full border border-white/50 bg-white/10 backdrop-blur-md group overflow-visible">
          {/* Fruit Icons */}
          {fruits.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.name}
              style={item.style}
              className="h-12 absolute opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500"
            />
          ))}

          {/* Buy Now Button */}
          <Button className="w-[12rem] rounded-full text-lg z-10 relative">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
