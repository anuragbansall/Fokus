import React from "react";
import LiquidGlass from "../LiquidGlass";
import Button from "../Button";

function CTASection() {
  return (
    <section className="p-8 text-center bg-[#94DA49] mb-12">
      <h2 className="text-4xl font-bold mb-4 text-white">
        Ready to Fuel Your Fokus?
      </h2>
      <p className="text-xl text-white mb-6">
        Order now and stay refreshed throughout your day.
      </p>

      {/* Buy Now Button */}
      <LiquidGlass className="mx-auto w-fit px-8 sm:px-16 py-2 rounded-full group">
        <Button
          className="w-40 sm:w-48 rounded-full text-base sm:text-lg relative z-10"
          aria-label="Buy Fokus Energy Drink Now"
        >
          Buy Now
        </Button>
      </LiquidGlass>
    </section>
  );
}

export default CTASection;
