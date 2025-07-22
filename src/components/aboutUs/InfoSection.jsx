import React from "react";
import strawberryWatermelonBottleHalfImage from "../../assets/strawberry-watermelon-bottle-half.webp";
import mangoPineappleBottleHalfImage from "../../assets/mango-pineapple-bottle-half.webp";
import kiwiLemonBottleHalfImage from "../../assets/kiwi-lemon-bottle-half.webp";

const sectionData = [
  {
    title: "THE SECRET SAUCE OF FOKUS",
    highlights: [
      {
        heading: "VITAMIN D3",
        color: "#B91C1C",
        desc: "Tackling India’s vitamin D shortage, one bottle at a time. Because let’s face it, we all need a little more sunshine in our lives.",
      },
      {
        heading: "NO SUGAR",
        color: "#B91C1C",
        desc: "Healthy can taste amazing! Get all the taste without the added sugar, so you can sip guilt-free.",
      },
      {
        heading: "COCONUT WATER (22%)",
        color: "#B91C1C",
        desc: "Because who wouldn’t want a mini beach vacation with every sip?",
      },
    ],
    bgColor: "#F96868",
    image: strawberryWatermelonBottleHalfImage,
  },
  {
    title: "COOL LOOK, COOLER CONSCIENCE",
    description:
      "Our branding isn’t just easy on the eyes—it’s designed to make you feel great too. With vibrant colors, bold designs, and all the info you need, every bottle of Fokus stands out and tells a story. And about that plastic bottle? No worries—it's 100% recyclable. So, you can sip guilt-free, knowing we’re doing our part to keep the planet as fresh as you feel!",
    bgColor: "#F9E36D",
    image: mangoPineappleBottleHalfImage,
  },
  {
    title: "THE #GET FOKUS REVOLUTION",
    description:
      "With Abhishek and Nischay Malhan leading the charge, we’re not just creating a brand—we’re creating a movement. #GetFokus isn’t just a hashtag; it’s a tribe. So, join in, talk, share, form Fokus groups, and get ready to take over the world—one focused moment at a time.",
    bgColor: "#9EDB6E",
    image: kiwiLemonBottleHalfImage,
  },
];

const InfoSection = () => {
  return (
    <section className="w-full">
      {sectionData.map((section, index) => (
        <div
          key={index}
          className={`flex flex-row justify-between -my-3`}
          style={{ backgroundColor: section.bgColor }}
        >
          {/* Left Text */}
          <div className="md:w-[60%] space-y-6 py-14 px-6 md:px-0 md:pl-18">
            <h2
              className="inline-block bg-[#F4F3E0] text-black font-bold text-xl sm:text-2xl px-8 py-3 shadow-md rounded-tr-xl rounded-br-xl"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)",
              }}
            >
              {section.title}
            </h2>

            {/* Highlights */}
            {section.highlights ? (
              section.highlights.map((item, idx) => (
                <>
                  <h3
                    key={idx}
                    className="text-2xl text-black font-bold mb-2"
                    style={{ color: item.color }}
                  >
                    {item.heading}
                  </h3>
                  <p className="text-xl text-black font-semibold">
                    {item.desc}
                  </p>
                </>
              ))
            ) : (
              <p className="text-lg text-black leading-relaxed font-medium max-w-lg">
                {section.description}
              </p>
            )}
          </div>

          {/* Right Image */}
          <div className="hidden md:flex justify-center items-center pr-18">
            <img
              src={section.image}
              alt="Fokus Bottle"
              className={`w-80 drop-shadow-xl ${
                index === 0 ? "self-end pt-18" : ""
              } ${index === 2 ? "self-start pb-18" : ""}`}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default InfoSection;
