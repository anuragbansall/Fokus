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
      className={`px-4 py-2 rounded-md bg-gray-800 text-white  ${className}`}
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
