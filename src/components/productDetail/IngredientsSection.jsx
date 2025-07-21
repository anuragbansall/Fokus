import React, { useState } from "react";
import threeBottlesImage from "../../assets/three-bottles.png";
import { FaPlus } from "react-icons/fa";

function IngredientsSection({ INGREDIENTS = [], INGREDIENTS_IMAGE = {}, FEATURES }) {
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

          <div className="space-y-6">
            {INGREDIENTS.map((ingredient, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg border border-[#FFE060]"
                  style={{ boxShadow: "1.5px 1.5px 0 2.5px #000000cc" }}
                >
                  <button
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="w-full flex justify-between items-center text-left focus:outline-none cursor-pointer"
                  >
                    <h3 className="font-bold text-xl">{ingredient.name}</h3>
                    <span
                      className={`transition-transform duration-300 ${
                        isActive ? "rotate-45 text-[#FF6262]" : "rotate-0"
                      }`}
                    >
                      <FaPlus className="text-2xl" />
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isActive ? "max-h-40 mt-4" : "max-h-0 mt-0"
                    }`}
                  >
                    <p className="text-gray-700">{ingredient.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IngredientsSection;
