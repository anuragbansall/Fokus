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
