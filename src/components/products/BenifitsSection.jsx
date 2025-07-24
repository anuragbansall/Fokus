import React from "react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../StaggerAnimation";

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
      <StaggerContainer>
        <StaggerItem>
          <h2 className="text-4xl font-semibold text-center mb-12">
            Why Choose Fokus Drinks?
          </h2>
        </StaggerItem>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="bg-white/80 backdrop-blur-md border border-white/30 rounded-lg p-6 text-center"
                style={{ boxShadow: `2.5px 2.5px 0 5px ${benefit.color}` }}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  );
}

export default BenifitsSection;
