import React from "react";

function Button({
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  style = {},
  ariaLabel = "",
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-black text-white cursor-pointer hover:scale-105 hover:bg-gray-900 transition-all duration-300 ${className}`}
      disabled={disabled}
      type={type}
      style={style}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
