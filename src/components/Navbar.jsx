import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { clearCart } from "../store/cartSlice";
import { useToast } from "../hooks/useToast";
import logo from "../assets/logo.webp";
import { VscAccount } from "react-icons/vsc";
import { IoMdCart } from "react-icons/io";
import { FiMenu, FiX, FiUser, FiLogOut } from "react-icons/fi";
import Button from "./Button";
import LiquidGlass from "./LiquidGlass";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartAnimating, setIsCartAnimating] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const dispatch = useDispatch();
  const { addToast } = useToast();
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  // Animate cart icon when quantity changes
  useEffect(() => {
    if (cartTotalQuantity > 0) {
      setIsCartAnimating(true);
      const timer = setTimeout(() => setIsCartAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [cartTotalQuantity]);

  // Show/hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setShowNavbar(false); // Scrolling down
      } else {
        setShowNavbar(true); // Scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
          <AnimatePresence>
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50"
              >
                <Link
                  to="/account"
                  onClick={() => setShowUserMenu(false)}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-800"
                >
                  <FiUser />
                  My Account
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-gray-800"
                >
                  <FiLogOut />
                  Logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
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
        {/* Hamburger Icon for Mobile */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="text-3xl text-gray-800 hover:text-black transition-colors duration-200"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Logo */}
        <Link
          to="/"
          aria-label="Homepage"
          className="flex-1 text-center lg:flex-none"
        >
          <img
            src={logo}
            alt="Fokus Logo"
            className="h-10 md:h-12 object-contain mx-auto lg:mx-0"
          />
        </Link>

        {/* Desktop Navigation */}
        <LiquidGlass className="hidden lg:flex px-6 py-2 rounded-full">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name} className="group relative">
                <NavLink
                  to={item.href}
                  aria-label={item.name}
                  className="text-gray-800 text-base font-medium hover:text-black transition-colors duration-200"
                >
                  {item.name}
                </NavLink>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 group-hover:w-full bg-gray-800 rounded transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </LiquidGlass>

        {/* Icons + CTA (Desktop) */}
        <LiquidGlass className="hidden lg:flex items-center space-x-4 px-4 py-2 rounded-full">
          {navIcons.map((item, index) => (
            <div key={index}>
              {item.name === "Account" && isAuthenticated ? (
                item.icon
              ) : (
                <NavLink
                  to={item.href}
                  aria-label={item.name}
                  className="text-gray-800 text-2xl hover:text-black transition-colors duration-200"
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

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-[#F5F5DC] shadow-lg z-[1000] lg:hidden"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b">
              <img
                src={logo}
                alt="Fokus Logo"
                className="h-10 object-contain"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close Menu"
                className="text-3xl text-gray-800 hover:text-black transition-colors"
              >
                <FiX />
              </button>
            </div>
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col p-4 space-y-4"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                >
                  <NavLink
                    to={item.href}
                    aria-label={item.name}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-800 text-lg font-medium hover:text-black transition-colors duration-200"
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="flex items-center space-x-4 p-4"
            >
              {navIcons.map((item, index) => (
                <div key={index}>
                  {item.name === "Account" && isAuthenticated ? (
                    <div className="text-gray-800 text-2xl hover:text-black transition-colors duration-200">
                      {item.icon}
                    </div>
                  ) : (
                    <NavLink
                      to={item.href}
                      aria-label={item.name}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-800 text-2xl hover:text-black transition-colors duration-200"
                    >
                      {item.icon}
                    </NavLink>
                  )}
                </div>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="p-4"
            >
              <Link to="/products" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full rounded-full text-base">
                  Buy Now
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md bg-opacity-30 z-[900] lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
