import React from "react";
import { motion } from "framer-motion";

function SplashSection({ splashImage }) {
  return (
    <section className="w-full">
      <motion.img
        src={`${splashImage.src}`}
        alt={splashImage.alt}
        className="w-full h-auto object-cover"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true }}
      />
    </section>
  );
}

export default SplashSection;
