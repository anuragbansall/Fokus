import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../StaggerAnimation";

function FavoritesSection() {
  const favoriteBottles = useSelector((state) => state.products.products);
  const navigate = useNavigate();

  const [selectedBottle, setSelectedBottle] = useState(null);

  const bottleRefs = useRef([]);

  // Handle bottle click to navigate to product detail page
  const handleBottleClick = (bottleId) => {
    navigate(`/products/${bottleId}`);
  };

  // IntersectionObserver for mobile scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && window.innerWidth < 768) {
            const index = Number(entry.target.getAttribute("data-index"));
            setSelectedBottle(favoriteBottles[index]);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    bottleRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      bottleRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div
      className="p-6 transition-colors duration-300"
      style={{ backgroundColor: selectedBottle?.backgroundColor || "" }}
    >
      <StaggerContainer>
        <StaggerItem>
          <h2 className="text-4xl font-semibold mb-4 text-center my-4">
            Favorites
          </h2>
        </StaggerItem>

        <StaggerItem>
          <div
            className="
              flex md:justify-center md:gap-8 
              overflow-x-auto md:overflow-visible 
              snap-x snap-mandatory scroll-smooth overflow-y-hidden scrollbar-hide
            "
          >
            {favoriteBottles.map((bottle, idx) => (
              <motion.div
                key={bottle.id}
                ref={(el) => (bottleRefs.current[idx] = el)}
                data-index={idx}
                className="
                  relative flex-shrink-0 group cursor-pointer w-full md:w-fit
                  snap-center md:snap-none
                "
                onClick={() => handleBottleClick(bottle.id)}
                onMouseEnter={() =>
                  window.innerWidth >= 768 && setSelectedBottle(bottle)
                }
                onMouseLeave={() =>
                  window.innerWidth >= 768 && setSelectedBottle(null)
                }
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >
                <img
                  src={bottle.image}
                  alt={bottle.name}
                  className="w-[25rem] max-w-full h-auto object-cover relative z-2 group-hover:shake-animation mx-auto"
                />

                <img
                  src={bottle.ingredients[0]}
                  alt=""
                  className="absolute top-20 left-26 md:left-34 w-[6rem] -translate-x-1/2 object-cover md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-animation"
                />
                <img
                  src={bottle.ingredients[1]}
                  alt=""
                  className="absolute top-50 left-60 md:left-62 w-[6rem] -translate-x-1/2 object-cover md:z-3 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-animation"
                />

                <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xl font-semibold text-nowrap bg-white/80 p-2 rounded -rotate-10 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:scale-0 group-hover:scale-100 z-3">
                  {bottle.alias}
                </h3>
              </motion.div>
            ))}
          </div>
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
}

export default FavoritesSection;
