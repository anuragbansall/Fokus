import React from "react";
import VideoFrame from "../VideoFrame";
import kiwiLemonCommercial from "../../assets/kiwi-lemon-commercial.webm";
import fightOffFatigue from "../../assets/fight-off-fatigue.png";
import madeWithCoconut from "../../assets/made-with-coconut.png";
import noAddedSugar from "../../assets/no-added-sugar.png";
import increaseYourEnergy from "../../assets/increase-your-energy.png";

function CommercialSection() {
  const features = [
    {
      image: fightOffFatigue,
      title: "Fight off fatigue",
      description:
        "Our drinks are designed to keep you energized throughout the day.",
    },
    {
      image: madeWithCoconut,
      title: "Made with coconut",
      description:
        "Experience the refreshing taste of our coconut-based beverages.",
    },
    {
      image: noAddedSugar,
      title: "No added sugar",
      description:
        "Enjoy a guilt-free hydration experience with no added sugars.",
    },
    {
      image: increaseYourEnergy,
      title: "Increase your energy",
      description:
        "Boost your energy levels naturally with our specially formulated drinks.",
    },
  ];

  return (
    <section className="w-full p-6 bg-[#94DA49]">
      <h2 className="text-4xl text-center font-semibold my-4">
        Stay Active, Stay Hydrated,{" "}
        <span className="text-white font-bold italic">Stay Fokus</span>
      </h2>

      <div className="w-full flex flex-col lg:flex-row justify-between items-center mt-16 mb-8 px-4 lg:px-8 gap-8 gap-y-18">
        {/* Features */}
        <div className="flex flex-col gap-8 max-w-sm w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-white/10 md:-rotate-2"
              style={{
                boxShadow: "2.5px 2.5px 0 5px #ffffff",
              }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-32 h-auto object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Video */}
        <VideoFrame
          className="max-w-full w-[22rem] aspect-[9/16] mx-auto rounded-md overflow-hidden md:rotate-2"
          style={{
            boxShadow: "5px 5px 0 10px #ffffff",
          }}
        >
          <video
            className="w-full h-full object-cover"
            muted
            autoPlay
            loop
            playsInline
            src={kiwiLemonCommercial}
            type="video/webm"
          />
        </VideoFrame>
      </div>
    </section>
  );
}

export default CommercialSection;
