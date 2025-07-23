import React from "react";
import Container from "../components/container";
import Button from "../components/Button";
import LiquidGlass from "../components/LiquidGlass";
import HeroSection from "../components/products/HeroSection";
import BenifitsSection from "../components/products/BenifitsSection";
import ProductsSection from "../components/products/ProductsSection";
import TestimonialsSection from "../components/products/TestimonialsSection";
import FAQSection from "../components/products/FAQSection";
import CTASection from "../components/products/CTASection";
import PageTransition from "../components/PageTransition";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

function ProductsPage() {
  return (
    <PageTransition>
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Benefits Section */}
        <FadeInWhenVisible delay={0.1}>
          <BenifitsSection />
        </FadeInWhenVisible>

        {/* Product Grid */}
        <FadeInWhenVisible delay={0.2}>
          <ProductsSection />
        </FadeInWhenVisible>

        {/* Testimonials */}
        <FadeInWhenVisible delay={0.1}>
          <TestimonialsSection />
        </FadeInWhenVisible>

        {/* FAQ */}
        <FadeInWhenVisible delay={0.2}>
          <FAQSection />
        </FadeInWhenVisible>

        {/* CTA */}
        <FadeInWhenVisible delay={0.1}>
          <CTASection />
        </FadeInWhenVisible>
      </main>
    </PageTransition>
  );
}

export default ProductsPage;
