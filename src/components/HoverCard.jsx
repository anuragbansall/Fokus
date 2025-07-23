import React from "react";
import { motion } from "framer-motion";
import { animationConfig } from "../utils/animationConfig";

const HoverCard = ({ children, className = "", hoverScale = 1.03 }) => {
  return (
    <motion.div
      whileHover={{
        scale: hoverScale,
        y: -5,
      }}
      transition={animationConfig.easing.smooth}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default HoverCard;
