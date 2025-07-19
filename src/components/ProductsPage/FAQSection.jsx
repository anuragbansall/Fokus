import React from "react";

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
  ];

  return (
    <section className="p-8 my-12">
      <h2 className="text-4xl font-semibold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            style={{
              boxShadow: "2.5px 2.5px 0 5px rgba(0, 0, 0, 0.8)",
            }}
          >
            <h3 className="font-bold text-xl mb-2">{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
