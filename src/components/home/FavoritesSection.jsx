import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function FavoritesSection() {
  const favoriteBottles = useSelector((state) => state.products.products);

  const [selectedBottle, setSelectedBottle] = useState(null);

  const bottleRefs = useRef([]);

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
      <h2 className="text-4xl font-semibold mb-4 text-center my-4">
        Favorites
      </h2>

      <div
        className="
          flex md:justify-center md:gap-8 
          overflow-x-auto md:overflow-visible 
          snap-x snap-mandatory scroll-smooth overflow-y-hidden scrollbar-hide
        "
      >
        {favoriteBottles.map((bottle, idx) => (
          <div
            key={bottle.id}
            ref={(el) => (bottleRefs.current[idx] = el)}
            data-index={idx}
            className="
              relative flex-shrink-0 group cursor-pointer w-full md:w-fit
              snap-center md:snap-none
            "
            onMouseEnter={() =>
              window.innerWidth >= 768 && setSelectedBottle(bottle)
            }
            onMouseLeave={() =>
              window.innerWidth >= 768 && setSelectedBottle(null)
            }
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesSection;
