import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { clearCart } from "../store/cartSlice";
import { useToast } from "../hooks/useToast";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiLogOut } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { IoMdCart } from "react-icons/io";

import logo from "../assets/logo.webp";
import Button from "./Button";
import LiquidGlass from "./LiquidGlass";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartAnimating, setIsCartAnimating] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dispatch = useDispatch();
  const { addToast } = useToast();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

  useEffect(() => {
    if (cartTotalQuantity > 0) {
      setIsCartAnimating(true);
      const timeout = setTimeout(() => setIsCartAnimating(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [cartTotalQuantity]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setShowNavbar(currentY < lastScrollY || currentY < 60);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [isMobileMenuOpen]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    addToast("Logged out successfully!", "success");
    setShowUserMenu(false);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Know Fokus", href: "/about-us" },
    { name: "Products", href: "/products" },
  ];

  const navIcons = [
    {
      name: "Account",
      icon: isAuthenticated ? (
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <FiUser />
            <span className="hidden md:inline text-sm">{user?.name}</span>
          </button>
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
              <Link
                to="/account"
                onClick={() => setShowUserMenu(false)}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <FiUser />
                My Account
              </Link>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
              >
                <FiLogOut />
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <VscAccount />
      ),
      href: isAuthenticated ? "/account" : "/login",
    },
    {
      name: "Cart",
      icon: (
        <div className={`relative ${isCartAnimating ? "animate-bounce" : ""}`}>
          <IoMdCart />
          {cartTotalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              {cartTotalQuantity}
            </span>
          )}
        </div>
      ),
      href: "/cart",
    },
  ];

  return (
    <header
      className={`fixed top-0 z-[999] w-full bg-[#F5F5DC] shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-3xl text-gray-800 hover:text-black"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="flex-1 text-center lg:flex-none">
          <img
            src={logo}
            alt="Fokus Logo"
            className="h-10 md:h-12 object-contain mx-auto lg:mx-0"
          />
        </Link>

        {/* Desktop Nav */}
        <LiquidGlass className="hidden lg:flex px-6 py-2 rounded-full">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name} className="group relative">
                <NavLink
                  to={item.href}
                  className="text-gray-800 text-base font-medium hover:text-black"
                >
                  {item.name}
                </NavLink>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 group-hover:w-full bg-gray-800 transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </LiquidGlass>

        {/* Desktop Icons */}
        <LiquidGlass className="hidden lg:flex items-center space-x-4 px-4 py-2 rounded-full">
          {navIcons.map((item, i) => (
            <div key={i}>
              {item.name === "Account" && isAuthenticated ? (
                item.icon
              ) : (
                <NavLink
                  to={item.href}
                  className="text-gray-800 text-2xl hover:text-black"
                >
                  {item.icon}
                </NavLink>
              )}
            </div>
          ))}
          <Link to="/products">
            <Button className="rounded-full text-sm md:text-base">
              Buy Now
            </Button>
          </Link>
        </LiquidGlass>
      </nav>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 h-screen w-[80vw] bg-[#F5F5DC] shadow-lg z-[1000] lg:hidden">
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <img src={logo} alt="Fokus Logo" className="h-10" />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl text-gray-800 hover:text-black"
            >
              <FiX />
            </button>
          </div>

          <div className="p-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 text-lg font-medium hover:text-black"
              >
                {item.name}
              </NavLink>
            ))}

            <div className="flex items-center space-x-4 pt-4">
              {navIcons.map((item, i) => (
                <div key={i}>
                  {item.name === "Account" && isAuthenticated ? (
                    <div className="text-2xl text-gray-800">{item.icon}</div>
                  ) : (
                    <NavLink
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl text-gray-800 hover:text-black"
                    >
                      {item.icon}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>

            <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full rounded-full text-base">Buy Now</Button>
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[900] h-screen w-screen"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default Navbar;
