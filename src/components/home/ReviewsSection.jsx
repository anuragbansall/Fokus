import React from "react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "../StaggerAnimation";
import ReviewCard from "../ReviewCard";
import MediaCarousel from "../MediaCarousel";
import ashishChanchlaniImage from "../../assets/ashish-chanchlani.jpg";
import scoutImage from "../../assets/scout.jpg";
import puravJhaImage from "../../assets/purav-jha.webp";
import adityaRikhariImage from "../../assets/aditya-rikhari.jpg";

function ReviewsSection() {
  const reviews = [
    {
      name: "Ashish Chanchlani",
      image: ashishChanchlaniImage,
      reviewText:
        "Fokus—naam hi nahi, ek vibe hai! The branding, the taste, the whole energy of it is so addictive that it’s effortlessly becoming my daily companion.",
    },
    {
      name: "Tammay (Scout)",
      image: scoutImage,
      reviewText:
        "Being among the first to try Fokus, I knew from the first sip—this wasn’t just a drink; it was an experience! Now, I proudly say I’m its biggest fan.",
    },
    {
      name: "Purav Jha",
      image: puravJhaImage,
      reviewText:
        "Is 400ml ki bottle mein itni cheezein hai! Gym se lekar shoot tak, har jagah Fokus mera saath dega to keep me going all day long.",
    },
    {
      name: "Aditya Rikhari",
      image: adityaRikhariImage,
      reviewText:
        "Just like my songs, log Fokus ke fan hone wale hain! I absolutely love the strawberry watermelon flavour—it’s the perfect blend of taste!",
    },
  ];

  return (
    <section className="w-full p-6 border-t-100 border-[#FFE060]">
      <StaggerContainer>
        <StaggerItem>
          <h2 className="text-4xl font-semibold my-8 text-center leading-snug">
            What Your Favourites Say
          </h2>
        </StaggerItem>

        <StaggerItem>
          <div className="mx-auto py-6">
            <MediaCarousel>
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: -5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <ReviewCard
                    name={review.name}
                    image={review.image}
                    reviewText={review.reviewText}
                    style={{
                      boxShadow: "2.5px 2.5px 0 5px #ffffff",
                    }}
                  />
                </motion.div>
              ))}
            </MediaCarousel>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}

export default ReviewsSection;
