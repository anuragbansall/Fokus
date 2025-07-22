import React, { useState } from "react";
import threeBottlesImage from "../../assets/three-bottles.png";
import { FaPlus } from "react-icons/fa";
import Dropdown from "../Dropdown";

function IngredientsSection({
  INGREDIENTS = [],
  INGREDIENTS_IMAGE = {},
  FEATURES,
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative bg-[#fcd94f] mt-16 pt-12 pb-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-around space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="flex justify-center items-center">
          <img
            src={threeBottlesImage}
            alt={INGREDIENTS_IMAGE.alt || "Ingredient bottles"}
            className="object-contain w-70"
          />
        </div>

        <div className="w-full max-w-xl p-6">
          <h2 className="text-4xl font-bold mb-3">Ingredients</h2>
          <p className="font-semibold text-lg mb-6">
            Crafted with the Finest Natural Ingredients for Refreshing Taste
          </p>

          <Dropdown options={INGREDIENTS} />
        </div>
      </div>
    </section>
  );
}

export default IngredientsSection;
