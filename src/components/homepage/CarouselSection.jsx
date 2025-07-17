import React from "react";
import MediaCarousel from "../MediaCarousel";
import video1 from "../../assets/video-1.mp4";
import video2 from "../../assets/video-2.mp4";
import video3 from "../../assets/video-3.mp4";
import video4 from "../../assets/video-4.mp4";

function CarouselSection() {
  return (
    <div className="w-full mx-auto mt-8">
      <MediaCarousel type="video" data={[video1, video2, video3, video4]} />
    </div>
  );
}

export default CarouselSection;
