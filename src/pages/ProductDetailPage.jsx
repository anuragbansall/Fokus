import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductSection from "../components/productDetail/ProductSection";
import IngredientsSection from "../components/productDetail/IngredientsSection";
import SplashSection from "../components/productDetail/SplashSection";

const ProductDetailPage = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);

  // Find the product by id
  const product = products.find((p) => p.id === parseInt(id));

  // If product not found, show error message
  if (!product) {
    return (
      <main>
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1>Product not found</h1>
          <p>The product you're looking for doesn't exist.</p>
        </div>
      </main>
    );
  }

  // Extract data from the product for component props
  const THUMBNAIL = product.thumbnails;
  const MAIN_IMAGE = product.mainImage;

  const PRODUCT = {
    name: product.name,
    tag: product.tag,
    price: product.price,
    tax: product.tax,
    packImage: product.packImage,
    options: product.options,
    shippingInfo: product.shippingInfo,
  };

  const backgroundColor = product.backgroundColor;

  console.log("Product Details:", PRODUCT);

  const INGREDIENTS = product.ingredientsDetail;
  const INGREDIENTS_IMAGE = product.ingredientsImage;
  const FEATURES = product.features;
  const SPLASH_IMAGE = product.splashImage;

  return (
    <main className="bg-white">
      {/* Main product section */}
      <ProductSection
        THUMBNAIL={THUMBNAIL}
        PRODUCT={PRODUCT}
        backgroundColor={backgroundColor}
      />

      {/* Ingredients section */}
      <IngredientsSection
        INGREDIENTS={INGREDIENTS}
        INGREDIENTS_IMAGE={INGREDIENTS_IMAGE}
        FEATURES={FEATURES}
        backgroundColor={backgroundColor}
      />

      {/* Splash Image section */}
      <SplashSection splashImage={SPLASH_IMAGE} />
    </main>
  );
};

export default ProductDetailPage;
