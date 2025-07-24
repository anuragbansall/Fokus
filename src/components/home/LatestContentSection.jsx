import React from "react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../StaggerAnimation";
import strawberryWatermelonBottle from "../../assets/strawberry-watermelon-bottle.png";
import kiwiLemonBottle from "../../assets/kiwi-lemon-bottle.png";

function LatestContentSection() {
  return (
    <section
      className="relative w-full p-6 border-t-100 border-[#94DA49] overflow-hidden"
      aria-label="Latest from Fokus Community"
    >
      <StaggerContainer>
        <StaggerItem>
          <h2 className="text-4xl font-semibold my-8 text-center">
            Latest from Fokus Community
          </h2>
        </StaggerItem>

        <motion.img
          src={strawberryWatermelonBottle}
          alt="Strawberry Watermelon Bottle"
          className="w-[30rem] h-auto absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hover:rotate-4 transition-transform duration-300"
          initial={{ opacity: 0, x: -100, rotate: -45 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
        />
        <motion.img
          src={kiwiLemonBottle}
          alt="Kiwi Lemon Bottle"
          className="w-[30rem] h-auto absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hover:-rotate-4 transition-transform duration-300"
          initial={{ opacity: 0, x: 100, rotate: 45 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
        />

        <StaggerItem>
          <motion.div
            className="relative my-18 mx-auto w-full max-w-[800px] aspect-video rounded-lg z-10 overflow-hidden shadow-[5px_5px_0_10px_#ffc53e] md:shadow-[10px_10px_0_20px_#ffc53e]"
            initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/aqPSd-Ecrrs?si=Zy93ipmjLjMa9DGo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </motion.div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}

export default LatestContentSection;
