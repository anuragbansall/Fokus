import React from "react";

function VideoFrame({ children, className, ...props }) {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
}

export default VideoFrame;
