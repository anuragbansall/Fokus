import React from "react";

function TestimonialsSection() {
  const testimonials = [
    {
      text: "“Kiwi Lemon is my daily go-to, perfect for post workouts!”",
      author: "Aditi",
      color: "#FF6262",
    },
    {
      text: "“Strawberry Watermelon keeps me fresh during my office marathons.”",
      author: "Sahil",
      color: "#94DA49",
    },
  ];

  return (
    <section className="p-8 my-12 bg-[#FFE060]">
      <h2 className="text-4xl font-semibold text-center mb-8">
        What People Love
      </h2>

      <div className="flex flex-col md:flex-row justify-around gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 max-w-sm mx-auto"
            style={{ boxShadow: `2.5px 2.5px 0 5px ${testimonial.color}` }}
          >
            <p className="italic">“{testimonial.text}”</p>
            <span className="font-bold block mt-2 text-right">
              — {testimonial.author}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
