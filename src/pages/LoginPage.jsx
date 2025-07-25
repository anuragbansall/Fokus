import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginStart, loginSuccess, loginFailure } from "../store/authSlice";
import { useToast } from "../hooks/useToast";
import Button from "../components/Button";
import { FiEye, FiEyeOff } from "react-icons/fi";
import PageTransition from "../components/PageTransition";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { isLoading, error } = useSelector((state) => state.auth);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      // Simulate API call - replace with actual authentication
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock user data - replace with actual API response
      const userData = {
        id: "user123",
        name: "Fokus User",
        email: formData.email,
        phone: "",
        address: {
          street: "",
          city: "",
          state: "",
          zipCode: "",
        },
        preferences: {
          favoriteProducts: [],
          notifications: true,
        },
        orders: [],
        joinDate: new Date().toISOString(),
      };

      dispatch(loginSuccess(userData));
      addToast("Login successful! Welcome back!", "success");
      navigate("/account");
    } catch (err) {
      dispatch(loginFailure("Invalid email or password"));
      addToast("Login failed. Please check your credentials.", "error");
    }
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F5F5DC] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div
          className="bg-white rounded-lg p-8 shadow-lg"
          style={{ boxShadow: "2.5px 2.5px 0 5px #000000cc" }}
        >
          <h1 className="text-3xl font-bold text-center mb-6">Welcome Back!</h1>
          <p className="text-gray-600 text-center mb-8">
            Sign in to your Fokus account
          </p>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 text-lg font-semibold disabled:opacity-50"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-black font-semibold hover:underline"
              >
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link
              to="/forgot-password"
              className="text-sm text-gray-500 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    </main>
    </PageTransition>
  );
};

export default LoginPage;
