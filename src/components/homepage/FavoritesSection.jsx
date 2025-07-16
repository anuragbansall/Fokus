import React, { useState } from "react";
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

  const [selectedBottle, setSelectedBottle] = useState(null);

  return (
    <div
      className="p-6 transition-colors duration-300"
      style={{ backgroundColor: selectedBottle?.backgroundColor || "" }}
    >
      <h2 className="text-4xl font-semibold mb-4 text-center my-4">
        Favorites
      </h2>

      <div className="flex items-center justify-center gap-8">
        {favoriteBottles.map((bottle) => (
          <div
            key={bottle.id}
            className="relative w-fit group cursor-pointer"
            onMouseEnter={() => setSelectedBottle(bottle)}
            onMouseLeave={() => setSelectedBottle(null)}
          >
            <img
              src={bottle.image}
              alt={bottle.name}
              className="h-[25rem] object-cover relative z-2 group-hover:shake-animation"
            />

            <img
              src={bottle.ingredients[0]}
              alt={bottle.name}
              className="absolute top-20 left-30 w-[6rem] -translate-x-1/2 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-animation"
            />
            <img
              src={bottle.ingredients[1]}
              alt={bottle.name}
              className="absolute top-60 left-60 w-[6rem] -translate-x-1/2 object-cover z-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rotate-animation"
            />

            <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xl font-semibold text-nowrap bg-white/80 p-2 rounded -rotate-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-0 group-hover:scale-100 z-3">
              {bottle.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesSection;
