import { Routes, Route } from "react-router-dom"; // Use Routes instead of Router
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import AboutUsPage from "../pages/AboutUsPage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AccountPage from "../pages/AccountPage";
import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
