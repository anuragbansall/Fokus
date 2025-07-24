import React, { useState } from "react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../StaggerAnimation";
import Dropdown from "../Dropdown";

function FAQSection() {
  const faqs = [
    {
      title: "Is Fokus sugar-free?",
      description: "Yes! Fokus uses natural sweeteners with no added sugar.",
    },
    {
      title: "Do Fokus drinks contain caffeine?",
      description:
        "Fokus Energy flavors are caffeine-free, focused on hydration and mood support.",
    },
    {
      title: "What makes Fokus different?",
      description:
        "We focus on clean energy, no caffeine crash, added vitamins, and refreshing taste with coconut water base.",
    },
    {
      title: "Is Fokus suitable for kids?",
      description:
        "Fokus is designed for adults but is safe for teens; we recommend consulting a doctor for younger children.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="p-8 my-12">
      <StaggerContainer>
        <StaggerItem>
          <h2 className="text-4xl font-semibold text-center mb-8">
            Frequently Asked titles
          </h2>
        </StaggerItem>

        <StaggerItem>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{ once: true }}
          >
            <Dropdown options={faqs} />
          </motion.div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}

export default FAQSection;
