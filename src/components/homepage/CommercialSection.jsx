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
    <div className="w-full p-6 bg-[#94DA49]">
      <h2 className="text-4xl text-center font-semibold my-4">
        Stay Active, Stay Hydrated,{" "}
        <span className="text-white font-bold italic">Stay Fokus</span>
      </h2>

      <div className="w-full flex justify-between items-center mt-16 mb-8 px-8">
        <div className="flex flex-col gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 rounded-lg max-w-sm -rotate-2 bg-white/10"
              style={{
                boxShadow: "5px 5px 0 10px #ffffff",
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

        <VideoFrame
          className="w-[25rem] h-[36rem] mx-auto rounded-md overflow-hidden rotate-2"
          style={{
            boxShadow: "10px 10px 0 20px #ffffff",
          }}
        >
          <video
            className="w-full h-full object-cover"
            muted
            autoPlay
            loop
            src={kiwiLemonCommercial}
            type="video/webm"
          />
        </VideoFrame>
      </div>
    </div>
  );
}

export default CommercialSection;
