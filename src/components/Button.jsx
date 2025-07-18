import React from "react";

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
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-black text-white transition-all duration-300 rounded
        hover:scale-105 hover:bg-gray-900
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
    </button>
  );
}

export default Button;
