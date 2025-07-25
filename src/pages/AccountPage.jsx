import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateProfile } from "../store/authSlice";
import { clearCart } from "../store/cartSlice";
import { useToast } from "../hooks/useToast";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import PageTransition from "../components/PageTransition";
import {
  FiUser,
  FiMapPin,
  FiHeart,
  FiShoppingBag,
  FiSettings,
  FiLogOut,
  FiEdit,
} from "react-icons/fi";

const AccountPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { items: cartItems } = useSelector((state) => state.cart);

  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: {
      street: user?.address?.street || "",
      city: user?.address?.city || "",
      state: user?.address?.state || "",
      zipCode: user?.address?.zipCode || "",
    },
  });

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSaveProfile = () => {
    dispatch(updateProfile(formData));
    setIsEditing(false);
    addToast("Profile updated successfully!", "success");
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    addToast("Logged out successfully!", "success");
    navigate("/");
  };

  const mockOrders = [
    {
      id: "ORD001",
      date: "2025-01-15",
      total: 450.0,
      status: "Delivered",
      items: ["Strawberry Watermelon x2", "Kiwi Lemon x1"],
    },
    {
      id: "ORD002",
      date: "2025-01-10",
      total: 300.0,
      status: "Processing",
      items: ["Mango Pineapple x2"],
    },
  ];

  const tabs = [
    { id: "profile", label: "Profile", icon: <FiUser /> },
    { id: "address", label: "Address", icon: <FiMapPin /> },
    { id: "orders", label: "Orders", icon: <FiShoppingBag /> },
    { id: "favorites", label: "Favorites", icon: <FiHeart /> },
    { id: "settings", label: "Settings", icon: <FiSettings /> },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Profile Information</h2>
              <Button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2"
              >
                <FiEdit /> {isEditing ? "Cancel" : "Edit"}
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Member Since
                </label>
                <input
                  type="text"
                  value={new Date(user.joinDate).toLocaleDateString()}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
                />
              </div>
            </div>

            {isEditing && (
              <Button onClick={handleSaveProfile} className="w-full md:w-auto">
                Save Changes
              </Button>
            )}
          </div>
        );

      case "address":
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Shipping Address</h2>
              <Button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2"
              >
                <FiEdit /> {isEditing ? "Cancel" : "Edit"}
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  name="address.street"
                  value={formData.address.street}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100"
                  placeholder="Enter your street address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="address.city"
                  value={formData.address.city}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100"
                  placeholder="Enter your city"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <input
                  type="text"
                  name="address.state"
                  value={formData.address.state}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100"
                  placeholder="Enter your state"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="address.zipCode"
                  value={formData.address.zipCode}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black disabled:bg-gray-100"
                  placeholder="Enter your ZIP code"
                />
              </div>
            </div>

            {isEditing && (
              <Button onClick={handleSaveProfile} className="w-full md:w-auto">
                Save Address
              </Button>
            )}
          </div>
        );

      case "orders":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Order History</h2>

            {mockOrders.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">No orders yet</p>
                <Button onClick={() => navigate("/products")}>
                  Start Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {mockOrders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white p-6 rounded-lg border"
                    style={{ boxShadow: "1.5px 1.5px 0 2.5px rgba(0,0,0,0.1)" }}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">Order #{order.id}</h3>
                        <p className="text-gray-600">
                          {new Date(order.date).toLocaleDateString()}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600">Items:</p>
                      <ul className="list-disc list-inside">
                        {order.items.map((item, index) => (
                          <li key={index} className="text-sm">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="font-semibold">
                      Total: Rs.{order.total.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case "favorites":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Favorite Products</h2>
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">No favorite products yet</p>
              <Button onClick={() => navigate("/products")}>
                Browse Products
              </Button>
            </div>
          </div>
        );

      case "settings":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Account Settings</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
                <div>
                  <h3 className="font-semibold">Email Notifications</h3>
                  <p className="text-gray-600">
                    Receive updates about orders and promotions
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
                <div>
                  <h3 className="font-semibold">SMS Notifications</h3>
                  <p className="text-gray-600">Receive order updates via SMS</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>

            <div className="pt-6 border-t">
              <Button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2"
              >
                <FiLogOut /> Logout
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F5F5DC] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Account</h1>
          <p className="text-gray-600">Welcome back, {user.name}!</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div
              className="bg-white rounded-lg p-6"
              style={{ boxShadow: "2.5px 2.5px 0 5px #000000cc" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <FiUser className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                      activeTab === tab.id
                        ? "bg-black text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div
              className="bg-white rounded-lg p-6 min-h-[600px]"
              style={{ boxShadow: "2.5px 2.5px 0 5px #000000cc" }}
            >
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </main>
    </PageTransition>
  );
};

export default AccountPage;
