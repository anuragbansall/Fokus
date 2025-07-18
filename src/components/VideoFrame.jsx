import React from "react";

function VideoFrame({
  children,
  className = "",
  style = {},
  ariaLabel = "Video content",
  ...props
}) {
  return (
    <div
      className={`${className}`}
      style={style}
      role="region"
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </div>
  );
}

export default VideoFrame;
