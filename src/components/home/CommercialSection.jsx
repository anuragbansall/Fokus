import React from "react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../StaggerAnimation";
import VideoFrame from "../VideoFrame";
import kiwiLemonCommercial from "../../assets/kiwi-lemon-commercial.webm";
import fightOffFatigue from "../../assets/fight-off-fatigue.png";
import madeWithCoconut from "../../assets/made-with-coconut.png";
import noAddedSugar from "../../assets/no-added-sugar.png";
import increaseYourEnergy from "../../assets/increase-your-energy.png";
import LiquidGlass from "../LiquidGlass";

function CommercialSection() {
  const features = [
    {
      image: fightOffFatigue,
      title: "Fight off fatigue",
      description: "Stay refreshed and energized all day long.",
      color: "#FF6262",
    },
    {
      image: madeWithCoconut,
      title: "Made with coconut",
      description: "Naturally hydrating coconut base for smooth energy.",
      color: "#94DA49",
    },
    {
      image: noAddedSugar,
      title: "No added sugar",
      description: "Guilt-free taste, zero added sugar, all refreshment.",
      color: "#FFE060",
    },
    {
      image: increaseYourEnergy,
      title: "Increase your energy",
      description: "Fuel your focus without the jitters or crash.",
      color: "#ffc53e",
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-[#94DA49] overflow-hidden">
      <StaggerContainer>
        <StaggerItem>
          <h2 className="text-4xl text-center font-semibold mb-16 text-black">
            Stay Active, Stay Hydrated,{" "}
            <span className="text-white font-bold italic">Stay Fokus</span>
          </h2>
        </StaggerItem>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8 items-center">
          {/* Left Features */}
          <div className="flex flex-col gap-8">
            {features.slice(0, 2).map((feature, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="p-6 rounded-2xl shadow-lg transform backdrop-blur-lg"
                  style={{
                    boxShadow: "2.5px 2.5px 0 5px rgba(255,255,255,0.8)",
                  }}
                  initial={{ opacity: 0, x: -50, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-30 h-auto mb-4 rounded-lg object-cover"
                  />
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="opacity-90 text-lg">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>

          {/* Center Video */}
          <StaggerItem>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            >
              <VideoFrame
                className="mx-auto rounded-2xl overflow-hidden transform transition-all duration-500 w-full max-w-[20rem] aspect-[9/16] hidden md:block"
                style={{ boxShadow: "2.5px 2.5px 0 5px #FFE060" }}
              >
                <video
                  className="w-full h-full object-cover"
                  muted
                  autoPlay
                  loop
                  playsInline
                  src={kiwiLemonCommercial}
                  type="video/webm"
                />
              </VideoFrame>
            </motion.div>
          </StaggerItem>

          {/* Right Features */}
          <div className="flex flex-col gap-8">
            {features.slice(2).map((feature, idx) => (
              <StaggerItem key={idx}>
                <motion.div
                  className="p-6 rounded-2xl shadow-lg transform backdrop-blur-lg"
                  style={{
                    boxShadow: "2.5px 2.5px 0 5px rgba(255,255,255,0.8)",
                  }}
                  initial={{ opacity: 0, x: 50, rotateY: 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.2 + 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-30 h-auto mb-4 rounded-lg object-cover"
                  />
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="opacity-90 text-lg">{feature.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </StaggerContainer>
    </section>
  );
}

export default CommercialSection;
