import React from "react";
import { motion } from "framer-motion";
import MediaCarousel from "../MediaCarousel";
import video1 from "../../assets/video-1.mp4";
import video2 from "../../assets/video-2.mp4";
import video3 from "../../assets/video-3.mp4";
import video4 from "../../assets/video-4.mp4";

function CarouselSection() {
  const videos = [video1, video2, video3, video4];
  return (
    <motion.section
      className="w-full mx-auto p-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
    >
      <MediaCarousel>
        {videos.map((video, index) => (
          <motion.video
            key={index}
            src={video}
            muted
            autoPlay
            loop
            playsInline
            className="w-[16rem] aspect-[9/16] rounded-lg shadow-lg"
            style={{
              boxShadow: "2.5px 2.5px 0 5px rgba(255, 255, 255, 0.5)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          />
        ))}
      </MediaCarousel>
    </motion.section>
  );
}

export default CarouselSection;
