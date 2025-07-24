import React from "react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../StaggerAnimation";
import threeBottleImage from "../../assets/three-bottles.png";

function HeroSection() {
  return (
    <section className=" p-8 text-center bg-gradient-to-r from-[rgb(255,98,98)] via-[#94DA49] to-[#FFE060] text-white mb-12 relative overflow-hidden">
      <StaggerContainer className="flex items-center justify-around w-full">
        <div className="hidden md:block">
          <StaggerItem>
            <h1 className="text-5xl font-bold mb-4">Discover Fokus Flavours</h1>
          </StaggerItem>
          <StaggerItem>
            <p className="text-xl max-w-xl mx-auto">
              Natural ingredients, refreshing hydration, and a burst of
              energy—choose your Fokus!
            </p>
          </StaggerItem>
        </div>

        <StaggerItem>
          <motion.img
            src={threeBottleImage}
            alt="Fokus Drinks"
            className="w-[16rem] h-auto"
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          />
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}

export default HeroSection;
