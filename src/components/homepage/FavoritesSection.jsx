import React, { useEffect, useRef, useState } from "react";
import strawberryWatermelonBottle from "../../assets/strawberry-watermelon-bottle.png";
import kiwiLemonBottle from "../../assets/kiwi-lemon-bottle.png";
import mangoPineappleBottle from "../../assets/mango-pineapple-bottle.png";
import lemon from "../../assets/lemon.png";
import kiwi from "../../assets/kiwi.png";
import mango from "../../assets/mango.png";
import pineapple from "../../assets/pineapple.png";
import strawberry from "../../assets/strawberry.png";
import watermelon from "../../assets/watermelon.png";

function FavoritesSection() {
  const favoriteBottles = [
    {
      id: 1,
      image: strawberryWatermelonBottle,
      name: "Strawberry Watermelon",
      ingredients: [strawberry, watermelon],
      backgroundColor: "#FF6262",
    },
    {
      id: 2,
      image: kiwiLemonBottle,
      name: "Kiwi Lemon",
      ingredients: [kiwi, lemon],
      backgroundColor: "#94DA49",
    },
    {
      id: 3,
      image: mangoPineappleBottle,
      name: "Mango Pineapple",
      ingredients: [mango, pineapple],
      backgroundColor: "#FFE060",
    },
  ];

  const [selectedBottle, setSelectedBottle] = useState(favoriteBottles[0]);

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
              relative flex-shrink-0 group cursor-pointer w-[80vw] md:w-fit
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
              className="h-[25rem] object-cover relative z-2 group-hover:shake-animation mx-auto"
            />

            <img
              src={bottle.ingredients[0]}
              alt=""
              className="absolute top-20 left-22 md:left-34 w-[6rem] -translate-x-1/2 object-cover md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-animation"
            />
            <img
              src={bottle.ingredients[1]}
              alt=""
              className="absolute top-60 left-50 md:left-62 w-[6rem] -translate-x-1/2 object-cover z-3 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-animation"
            />

            <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xl font-semibold text-nowrap bg-white/80 p-2 rounded -rotate-10 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:scale-0 group-hover:scale-100 z-3">
              {bottle.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesSection;
