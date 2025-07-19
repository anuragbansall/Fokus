import React from "react";

function BenifitsSection() {
  const benefits = [
    {
      title: "No Added Sugar",
      description: "Clean hydration without extra calories—pure refreshment.",
      color: "#FF6262",
    },
    {
      title: "Natural Energy",
      description: "Coconut water + vitamins to keep you focused longer.",
      color: "#FFE060",
    },
    {
      title: "Refreshing Flavors",
      description: "Unique blends that excite your taste buds every sip.",
      color: "#94DA49",
    },
  ];

  return (
    <section className="p-8 my-8">
      <h2 className="text-4xl font-semibold text-center mb-12">
        Why Choose Fokus Drinks?
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md border border-white/30 rounded-lg p-6 text-center"
            style={{ boxShadow: `2.5px 2.5px 0 5px ${benefit.color}` }}
          >
            <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BenifitsSection;
