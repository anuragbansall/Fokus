import React from "react";

function SplashSection({ splashImage }) {
  return (
    <section className="w-full">
      <img
        src={`${splashImage.src}`}
        alt={splashImage.alt}
        className="w-full h-auto object-cover"
      />
    </section>
  );
}

export default SplashSection;
