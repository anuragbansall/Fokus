import { Routes, Route } from "react-router-dom"; // Use Routes instead of Router
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
};

export default AppRoutes;
