import React from "react";
import ReviewCard from ".././ReviewCard";
import ankitMadanImage from "../../assets/ankit-madan.jpg";
import mayankMishraImage from "../../assets/mayank-mishra.png";
import amanMadaanImage from "../../assets/aman-madaan.jpg";
import nischayMalhanImage from "../../assets/nischay-malhan.jpg";
import abhishekMalhanImage from "../../assets/abhishek-malhan.jpg";

function FoundersSection() {
  const founders = [
    {
      name: "Ankit Madan",
      image: ankitMadanImage,
    },
    {
      name: "Mayank Mishra",
      image: mayankMishraImage,
    },
    {
      name: "Aman Madaan",
      image: amanMadaanImage,
    },
    {
      name: "Nischay Malhan",
      image: nischayMalhanImage,
    },
    {
      name: "Abhishek Malhan",
      image: abhishekMalhanImage,
    },
  ];

  return (
    <section className="px-6 md:px-20 py-18">
      <h2 className="text-center font-bold text-3xl sm:text-4xl mb-12 text-black tracking-tight">
        The Fokus Founders
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {founders.map((founder, idx) => (
          <ReviewCard
            key={idx}
            name={founder.name}
            image={founder.image}
            className="w-52 sm:w-60 hover:scale-102 transition-transform duration-300"
            style={{
              boxShadow: "1.5px 1.5px 0 2.5px #000000cc",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default FoundersSection;
