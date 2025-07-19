import { Routes, Route } from "react-router-dom"; // Use Routes instead of Router
import HomePage from "../Pages/HomePage";
import ProductsPage from "../Pages/ProductsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
};

export default AppRoutes;
