import React from "react";

function LiquidGlass({ children, className = "" }) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-md border border-white/30 shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

export default LiquidGlass;
