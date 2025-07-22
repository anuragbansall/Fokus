import React from "react";
import knowUsImage from "../../assets/know-us.png";

function HeroSection() {
  const infoText = [
    {
      title: "We’re more than just a brand — ",
      content:
        "we’re a vibrant community driven by passion, purpose, and a shared vision for a better lifestyle. Brought to you by your favorite content creators, Abhishek Malhan and Nischay Malhan, along with digital age entrepreneurs, Mayank Mishra and Ankit Madaan, Aman Madaan we fokus on creating drinks that not only refresh but also empower.",
    },
    {
      title: "Our mission is simple:",
      content:
        "to deliver clean, functional hydration that fits seamlessly into your daily routine. Whether you’re chasing fitness goals, building your dream, or just living life on your own terms, we’re here to fuel every step of your journey. #GetFokus",
    },
  ];

  return (
    <section className="py-18 space-y-8 text-center">
      <img src={knowUsImage} alt="Know Us" className="w-64 h-auto mx-auto" />

      {infoText.map((info, index) => (
        <p
          className="max-w-4xl text-center mx-auto text-2xl text-[#1A1A1A] font-normal"
          key={index}
        >
          <span className="font-bold">{info.title}</span> {info.content}
        </p>
      ))}
    </section>
  );
}

export default HeroSection;
