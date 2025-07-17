import React from "react";
import MediaCarousel from "../MediaCarousel";
import video1 from "../../assets/video-1.mp4";
import video2 from "../../assets/video-2.mp4";
import video3 from "../../assets/video-3.mp4";
import video4 from "../../assets/video-4.mp4";

function CarouselSection() {
  const videos = [video1, video2, video3, video4];
  return (
    <div className="w-full mx-auto p-6">
      <MediaCarousel>
        {videos.map((video, index) => (
          <video
            key={index}
            src={video}
            muted
            autoPlay
            loop
            className="w-[16rem] h-full rounded-lg shadow-lg"
            style={{
              boxShadow: "5px 5px 0 10px rgba(255, 255, 255, 0.5)",
            }}
          />
        ))}
      </MediaCarousel>
    </div>
  );
}

export default CarouselSection;
