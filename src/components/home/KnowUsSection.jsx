import React from "react";
import { motion } from "framer-motion";
import knowUsImage from "../../assets/know-us.png";
import abhishekLeftImage from "../../assets/abhishek-left.png";
import nischayRightImage from "../../assets/nischay-right.png";
import abhishekNischayImage from "../../assets/abhishek-nischay.png";
import strawberryImage from "../../assets/strawberry.png";
import mangoImage from "../../assets/mango.png";

function KnowUsSection() {
  return (
    <section className="w-full p-6 py-18 bg-[#94DA49] flex flex-col gap-12 items-center justify-center overflow-hidden">
      <motion.div
        className="relative w-full sm:min-h-[550px] max-w-6xl mx-auto flex flex-col items-center justify-center gap-y-12 bg-[#B2F56F] pt-8 md:p-8 rounded-lg shadow-lg"
        style={{
          boxShadow: "10px 10px 0 20px #ffffff",
        }}
        initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
      >
        {/* People Images */}
        <img
          src={abhishekLeftImage}
          alt="Abhishek"
          loading="lazy"
          className="hidden md:block absolute left-0 bottom-0 w-100 drop-shadow-xl z-10"
        />
        <img
          src={nischayRightImage}
          alt="Nischay"
          loading="lazy"
          className="hidden md:block absolute right-0 bottom-0 w-100 drop-shadow-xl z-10"
        />

        {/* Fruits */}
        <img
          src={strawberryImage}
          alt="Strawberry"
          loading="lazy"
          className="absolute left-0 bottom-0 -translate-x-1/2 w-40 md:w-60 drop-shadow-xl shake-animation z-20"
        />
        <img
          src={mangoImage}
          alt="Mango"
          loading="lazy"
          className="absolute right-0 bottom-0 translate-x-1/2 w-32 md:w-50 drop-shadow-xl shake-animation z-20"
        />

        {/* Main Image */}
        <img
          src={knowUsImage}
          alt="Know Us"
          className="w-60 md:w-80 h-auto relative z-30"
        />

        {/* Text */}
        <p className="text-center text-2xl md:text-4xl leading-normal font-semibold max-w-[400px] md:max-w-[360px] text-[#1A1A1A] relative z-30 p-4">
          Fokus isn’t just a drink—it’s a lifestyle you live every day. Dive
          into our story and see what makes us different.
        </p>

        <img
          src={abhishekNischayImage}
          alt="Abhishek and Nischay"
          loading="lazy"
          className="md:hidden block max-w-full h-auto relative z-30"
        />
      </motion.div>
    </section>
  );
}

export default KnowUsSection;
