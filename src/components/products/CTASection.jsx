import React from "react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../StaggerAnimation";
import { Link } from "react-router-dom";
import LiquidGlass from "../LiquidGlass";
import Button from "../Button";
import abhishekLeftImage from "../../assets/abhishek-left.png";
import nischayRightImage from "../../assets/nischay-right.png";
import abhishekNischayImage from "../../assets/abhishek-nischay.png";

function CTASection() {
  return (
    <section className="relative px-8 py-16 pb-0 lg:pb-16 text-center bg-[#94DA49] mb-12 lg:mt-50">
      <motion.img
        src={abhishekLeftImage}
        alt="Abhishek Left"
        className="absolute left-0 bottom-0 w-80 hidden lg:block"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
      />
      <motion.img
        src={nischayRightImage}
        alt="Nischay Right"
        className="absolute right-0 bottom-0 w-80 hidden lg:block"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
      />

      <StaggerContainer>
        <div className="relative z-20">
          <StaggerItem>
            <h2 className="text-4xl font-bold mb-4 text-white">
              Ready to Fuel Your Fokus?
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-xl text-white mb-6">
              Order now and stay refreshed throughout your day.
            </p>
          </StaggerItem>

          {/* Buy Now Button */}
          <StaggerItem>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <LiquidGlass className="mx-auto w-full sm:w-fit px-8 sm:px-16 py-2 rounded-full group">
                <Link to="/products">
                  <Button
                    className="w-full sm:w-48 rounded-full text-base sm:text-lg relative z-10"
                    aria-label="Buy Fokus Energy Drink Now"
                  >
                    Buy Now
                  </Button>
                </Link>
              </LiquidGlass>
            </motion.div>
          </StaggerItem>
        </div>
      </StaggerContainer>

      <motion.img
        src={abhishekNischayImage}
        alt="Abhishek and Nischay"
        className="w-full block lg:hidden mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
      />
    </section>
  );
}

export default CTASection;
