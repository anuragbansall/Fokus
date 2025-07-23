import React from "react";
import { motion } from "framer-motion";
import { animationConfig } from "../utils/animationConfig";

const FadeInWhenVisible = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: animationConfig.duration.slow,
            delay: delay,
            ease: animationConfig.easing.ease,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
