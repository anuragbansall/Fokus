import React from "react";
import strawberryWatermelonBottle from "../../assets/strawberry-watermelon-bottle.png";
import kiwiLemonBottle from "../../assets/kiwi-lemon-bottle.png";

function LatestContentSection() {
  return (
    <div className="relative w-full p-6 border-t-100 border-[#94DA49] overflow-hidden">
      <h2 className="text-4xl font-semibold my-8 text-center">
        Latest from Fokus Community
      </h2>

      <img
        src={strawberryWatermelonBottle}
        alt="Strawberry Watermelon Bottle"
        className="w-[30rem] h-auto absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hover:rotate-4 transition-transform duration-300"
      />
      <img
        src={kiwiLemonBottle}
        alt="Kiwi Lemon Bottle"
        className="w-[30rem] h-auto absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hover:-rotate-4 transition-transform duration-300"
      />

      <div
        className="relative my-18 mx-auto w-fit rounded-lg z-10 overflow-hidden"
        style={{
          boxShadow: "10px 10px 0 20px #ffc53e",
        }}
      >
        <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/aqPSd-Ecrrs?si=Zy93ipmjLjMa9DGo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default LatestContentSection;
