import React from "react";
import { motion } from "framer-motion";
import { animationConfig } from "../utils/animationConfig";

function Button({
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  style = {},
  ariaLabel,
  ...props
}) {
  return (
    <motion.button
      whileHover={animationConfig.hover.button}
      whileTap={animationConfig.tap.button}
      transition={animationConfig.easing.spring}
      onClick={onClick}
      className={`px-4 py-2 bg-black text-white transition-all duration-300 rounded
        hover:bg-gray-900
        disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
        ${className}
      `}
      disabled={disabled}
      type={type}
      style={style}
      aria-label={
        ariaLabel || (typeof children === "string" ? children : undefined)
      }
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
