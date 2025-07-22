import { Routes, Route } from "react-router-dom"; // Use Routes instead of Router
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import AboutUsPage from "../pages/AboutUsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  );
};

export default AppRoutes;
