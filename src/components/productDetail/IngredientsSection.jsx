import React, { useState } from "react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../StaggerAnimation";
import { FaPlus } from "react-icons/fa";
import Dropdown from "../Dropdown";

function IngredientsSection({
  INGREDIENTS = [],
  INGREDIENTS_IMAGE = {},
  FEATURES,
  backgroundColor,
}) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      className="relative pt-12 pb-20 overflow-hidden"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <StaggerContainer>
        <div className="flex flex-col lg:flex-row items-center justify-around space-y-8 lg:space-y-0 lg:space-x-12">
          <StaggerItem>
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <img
                src={INGREDIENTS_IMAGE.src}
                alt={INGREDIENTS_IMAGE.alt || "Ingredient bottles"}
                className="object-contain w-full"
              />
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              className="w-full max-w-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-3">Ingredients</h2>
              <p className="font-semibold text-lg mb-6">
                Crafted with the Finest Natural Ingredients for Refreshing Taste
              </p>

              <Dropdown options={INGREDIENTS} />
            </motion.div>
          </StaggerItem>
        </div>
      </StaggerContainer>
    </section>
  );
}

export default IngredientsSection;
