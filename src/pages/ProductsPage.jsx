import React from "react";
import Container from "../components/container";
import Button from "../components/Button";
import LiquidGlass from "../components/LiquidGlass";
import HeroSection from "../components/ProductsPage/HeroSection";
import BenifitsSection from "../components/ProductsPage/BenifitsSection";
import ProductsSection from "../components/ProductsPage/ProductsSection";
import TestimonialsSection from "../components/ProductsPage/TestimonialsSection";
import FAQSection from "../components/ProductsPage/FAQSection";
import CTASection from "../components/ProductsPage/CTASection";

function ProductsPage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Benefits Section */}
      <BenifitsSection />

      {/* Product Grid */}
      <ProductsSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <CTASection />
    </main>
  );
}

export default ProductsPage;
