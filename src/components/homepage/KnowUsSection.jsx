import React from "react";
import knowUsImage from "../../assets/know-us.png";
import abhishekLeftImage from "../../assets/abhishek-left.png";
import nischayRightImage from "../../assets/nischay-right.png";
import strawberryImage from "../../assets/strawberry.png";
import mangoImage from "../../assets/mango.png";

function KnowUsSection() {
  return (
    <div className="w-full p-6 py-18 bg-[#94DA49] flex flex-col gap-12 items-center justify-center overflow-hidden">
      <div
        className="relative w-full min-h-[550px] max-w-6xl mx-auto flex flex-col items-center justify-center gap-y-12 bg-[#B2F56F] p-8 rounded-lg shadow-lg"
        style={{
          boxShadow: "10px 10px 0 20px #ffffff",
        }}
      >
        <img
          src={abhishekLeftImage}
          alt="Abhishek"
          className="absolute left-0 bottom-0 w-100 h-auto drop-shadow-xl z-2"
        />
        <img
          src={nischayRightImage}
          alt="Nischay"
          className="absolute right-0 bottom-0 w-100 h-auto drop-shadow-xl z-2"
        />

        <img
          src={strawberryImage}
          alt="Strawberry"
          className="absolute left-0 bottom-0 transform -translate-x-1/2 w-60 h-auto drop-shadow-xl shake-animation"
        />
        <img
          src={mangoImage}
          alt="Mango"
          className="absolute right-0 bottom-0 transform translate-x-1/2 w-50 h-auto drop-shadow-xl shake-animation"
        />

        <img
          src={knowUsImage}
          alt="Know Us"
          className="w-80 h-auto relative z-10"
        />
        <p className="text-center text-4xl leading-normal font-semibold max-w-[360px] text-[#1A1A1A] relative z-10">
          Fokus isn’t just a drink—it’s a lifestyle you live every day. Dive
          into our story and see what makes us different.
        </p>
      </div>
    </div>
  );
}

export default KnowUsSection;
