import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

function FAQSection() {
  const faqs = [
    {
      question: "Is Fokus sugar-free?",
      answer: "Yes! Fokus uses natural sweeteners with no added sugar.",
    },
    {
      question: "Do Fokus drinks contain caffeine?",
      answer:
        "Fokus Energy flavors are caffeine-free, focused on hydration and mood support.",
    },
    {
      question: "What makes Fokus different?",
      answer:
        "We focus on clean energy, no caffeine crash, added vitamins, and refreshing taste with coconut water base.",
    },
    {
      question: "Is Fokus suitable for kids?",
      answer:
        "Fokus is designed for adults but is safe for teens; we recommend consulting a doctor for younger children.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="p-8 my-12">
      <h2 className="text-4xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-[#FFE060]"
              style={{
                boxShadow: "2.5px 2.5px 0 5px #000000cc",
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left cursor-pointer focus:outline-none"
              >
                <h3 className="font-bold text-xl">{faq.question}</h3>
                <span
                  className={`transition-transform duration-300 ${
                    isActive ? "rotate-45 text-[#FF6262]" : "rotate-0"
                  }`}
                >
                  <FaPlus className="text-2xl" />
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isActive ? "max-h-40 mt-4" : "max-h-0 mt-0"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FAQSection;
