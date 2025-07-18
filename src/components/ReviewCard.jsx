import React from "react";

function ReviewCard({ name, image, reviewText }) {
  return (
    <figure
      className="bg-[#ffffea] rounded-lg overflow-hidden w-[22rem] border border-[#FFE060]"
      style={{
        boxShadow: "5px 5px 0 10px #ffffff",
      }}
    >
      <div className="bg-zinc-100 w-full aspect-[1/1]">
        <img
          src={image}
          alt={name}
          title={`Review by ${name}`}
          loading="lazy"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <figcaption className="p-6">
        <h3 className="text-2xl text-center font-semibold mb-4">{name}</h3>
        <p className="text-lg text-gray-600 text-center mt-4 leading-relaxed">
          {reviewText}
        </p>
      </figcaption>
    </figure>
  );
}

export default ReviewCard;
