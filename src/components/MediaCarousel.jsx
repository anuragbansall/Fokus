import React from "react";

function MediaCarousel({ type = "video", data = [] }) {
  console.log([[...data], [...data], [...data]]);
  return (
    <div className="relative w-full py-6 flex items-center overflow-x-hidden">
      {[[...data], [...data], [...data], [...data]].map((mediaGroup, index) => (
        <div
          className="shrink-0 flex items-center pr-12 gap-12 marquee-left"
          key={index}
        >
          {mediaGroup.map((mediaItem, itemIndex) =>
            type === "video" ? (
              <video
                key={`${index}-${itemIndex}`}
                src={mediaItem}
                muted
                autoPlay
                loop
                className="w-[16rem] h-full rounded-lg shadow-lg"
                style={{
                  boxShadow: "5px 5px 0 10px rgba(255, 255, 255, 0.5)",
                }}
              />
            ) : (
              <img
                key={`${index}-${itemIndex}`}
                src={mediaItem}
                alt={`Media ${index}-${itemIndex}`}
                className="w-[16rem] h-full rounded-lg shadow-lg"
              />
            )
          )}
        </div>
      ))}
    </div>
  );
}

export default MediaCarousel;
