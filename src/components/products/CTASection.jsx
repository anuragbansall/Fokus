import React from "react";
import LiquidGlass from "../LiquidGlass";
import Button from "../Button";
import abhishekLeftImage from "../../assets/abhishek-left.png";
import nischayRightImage from "../../assets/nischay-right.png";
import abhishekNischayImage from "../../assets/abhishek-nischay.png";

function CTASection() {
  return (
    <section className="relative px-8 py-16 pb-0 lg:pb-16 text-center bg-[#94DA49] mb-12 lg:mt-50">
      <img
        src={abhishekLeftImage}
        alt="Abhishek Left"
        className="absolute left-0 bottom-0 w-80 hidden lg:block"
      />
      <img
        src={nischayRightImage}
        alt="Nischay Right"
        className="absolute right-0 bottom-0 w-80 hidden lg:block"
      />

      <div className="relative z-20">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Ready to Fuel Your Fokus?
        </h2>
        <p className="text-xl text-white mb-6">
          Order now and stay refreshed throughout your day.
        </p>

        {/* Buy Now Button */}
        <LiquidGlass className="mx-auto w-full sm:w-fit px-8 sm:px-16 py-2 rounded-full group">
          <Button
            className="w-full sm:w-48 rounded-full text-base sm:text-lg relative z-10"
            aria-label="Buy Fokus Energy Drink Now"
          >
            Buy Now
          </Button>
        </LiquidGlass>
      </div>

      <img
        src={abhishekNischayImage}
        alt="Abhishek and Nischay"
        className="w-full block lg:hidden mt-8"
      />
    </section>
  );
}

export default CTASection;
