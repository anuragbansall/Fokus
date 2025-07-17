import React from "react";

function MediaCarousel({ children }) {
  // Convert children to array (in case it's a single child)
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="relative w-full py-6 flex items-center overflow-x-hidden">
      {[...Array(4)].map((_, index) => (
        <div
          className="shrink-0 flex items-center pr-12 gap-12 marquee-left"
          key={index}
        >
          {childrenArray.map((child, itemIndex) => (
            <div key={`${index}-${itemIndex}`} className="">
              {child}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MediaCarousel;
