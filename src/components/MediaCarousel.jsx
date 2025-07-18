import React from "react";

function MediaCarousel({ children }) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="relative w-full py-6 flex items-center overflow-hidden">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="shrink-0 flex items-center pr-12 gap-12 marquee-left"
        >
          {childrenArray.map((child, idx) => (
            <div key={`${index}-${idx}`}>{child}</div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MediaCarousel;
