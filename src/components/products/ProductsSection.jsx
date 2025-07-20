import React from "react";
import lemonBottle from "../../assets/kiwi-lemon-bottle.png";
import strawberryBottle from "../../assets/strawberry-watermelon-bottle.png";
import mangoBottle from "../../assets/mango-pineapple-bottle.png";
import Button from "../Button";
import { NavLink } from "react-router-dom";

function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "Kiwi Lemon",
      description: "A zesty blend of Kiwi and Lemon with coconut water base.",
      image: lemonBottle,
      price: "₹99",
      color: "#94DA49",
    },
    {
      id: 2,
      name: "Strawberry Watermelon",
      description: "Refreshing strawberries & juicy watermelon.",
      image: strawberryBottle,
      price: "₹99",
      color: "#FF6262",
    },
    {
      id: 3,
      name: "Mango Pineapple",
      description: "Tropical blast of ripe mangoes and pineapple.",
      image: mangoBottle,
      price: "₹99",
      color: "#FFE060",
    },
  ];

  return (
    <section className="p-8 my-12">
      <h2 className="text-4xl font-semibold text-center mb-12">Our Products</h2>
      <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <NavLink
            to={`/products/${product.id}`}
            key={product.id}
            className="relative rounded-lg p-6 flex flex-col justify-between group"
            style={{
              backgroundColor: product.color,
              boxShadow: "2.5px 2.5px 0 5px #000000cc",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-[20rem] object-cover mx-auto mb-6"
            />
            <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-nowrap bg-white/80 p-2 rounded -rotate-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:scale-0 group-hover:scale-100 z-3 group-active:opacity-100 group-active:scale-100">
              {product.name}
            </h3>
            <div className="flex flex-col items-center gap-4">
              <Button>Add to Cart</Button>
            </div>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;
