import React from "react";
import ProductSection from "../components/productDetail/ProductSection";
import IngredientsSection from "../components/productDetail/IngredientsSection";
import SplashSection from "../components/productDetail/SplashSection";

// Extracted data
const THUMBNAIL_IDS = [
  "3f48785d-e436-4fc8-feac-ba0bd129ca7d",
  "44eec01e-7d33-4988-48ed-9b8c3d420beb",
  "4a3e10c1-a284-4e6f-cd4f-dc5ed229eaa4",
  "7cec849e-e25f-458b-71a0-26689665790a",
];

const MAIN_IMAGE_ID = "650a5ab1-8a72-49db-41e8-b1d6bba62278";

const PRODUCT = {
  name: "Fokus Hydration – Mango Pineapple",
  tag: "Single Flavor 3 Bottles",
  price: "Rs. 450.00 (Rs. 150x3)",
  tax: "Tax included. Shipping calculated at checkout",
  packImage: {
    src: "cddb57f1-77ee-45f6-7a55-015bbb2180cb",
    alt: "Pack of 3",
  },
  options: [
    { label: "Combined Pack", pressed: true },
    { label: "Our Flavours", pressed: false },
  ],
  shippingInfo: [
    "Free Shipping on all orders for 24 Hours",
    "Orders will be delivered in 10-15 working days",
    "Prepaid orders only",
  ],
};

const INGREDIENTS = [
  {
    title: "Coconut Water",
    description:
      "Natural hydration source, rich in electrolytes, supports hydration and recovery.",
  },
  {
    title: "Vitamins B6 & B12",
    description:
      "Essential for energy metabolism, supports brain function and reduces fatigue.",
  },
  {
    title: "Natural Flavors",
    description:
      "Derived from real fruits, providing a refreshing taste without artificial additives.",
  },
  {
    title: "Electrolytes",
    description:
      "Helps maintain fluid balance, supports muscle function and prevents dehydration.",
  },
];

const INGREDIENTS_IMAGE = {
  src: "89736991-35c3-4ea1-78d6-d348ac3c3554",
  alt: "Three Fokus bottles",
};

const FEATURES = [
  {
    src: "319e0d76-f2c0-4345-25ef-b5aeeafa3308",
    text: "MADE IN INDIA",
  },
  {
    src: "0878b456-b280-44af-5590-916e8d61a372",
    text: "NO ADDED SUGAR",
  },
  {
    src: "120856d2-e8c9-4a4d-eec3-a69ce8fb63ab",
    text: "MADE WITH COCONUT WATER",
  },
  {
    src: "f36c9349-546e-4af1-163f-7ca06f4cfb00",
    text: "FIGHT OFF FATIGUE",
  },
  {
    src: "319e0d76-f2c0-4345-25ef-b5aeeafa3308",
    text: "MADE IN INDIA",
  },
  {
    src: "0878b456-b280-44af-5590-916e8d61a372",
    text: "NO ADDED SUGAR",
  },
];

const SPLASH_IMAGE = {
  src: "https://fokus.shop/cdn/shop/files/Fokus_mango_banner_copy_1.jpg?v=1737723339",
  alt: "Splash Image",
};

const ProductDetailPage = () => {
  return (
    <main>
      {/* Main product section */}
      <ProductSection
        THUMBNAIL_IDS={THUMBNAIL_IDS}
        MAIN_IMAGE_ID={MAIN_IMAGE_ID}
        PRODUCT={PRODUCT}
      />

      {/* Ingredients section */}
      <IngredientsSection
        INGREDIENTS={INGREDIENTS}
        INGREDIENTS_IMAGE={INGREDIENTS_IMAGE}
        FEATURES={FEATURES}
      />

      {/* Splash Image section */}
      <SplashSection splashImage={SPLASH_IMAGE} />
    </main>
  );
};

export default ProductDetailPage;
