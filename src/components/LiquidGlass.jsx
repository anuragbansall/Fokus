import React from "react";

function LiquidGlass({ children, className = "" }) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-md transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export default LiquidGlass;
