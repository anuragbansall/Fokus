import React, { useState } from "react";
import logo from "../assets/logo.webp";
import { VscAccount } from "react-icons/vsc";
import { IoMdCart } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import Button from "./Button";
import LiquidGlass from "./LiquidGlass";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Know Fokus", href: "/about-us" },
    { name: "Products", href: "/products" },
  ];

  const navIcons = [
    {
      name: "Account",
      icon: <VscAccount />,
      href: "/account",
    },
    {
      name: "Cart",
      icon: <IoMdCart />,
      href: "/cart",
    },
  ];

  return (
    <header className="sticky top-0 z-[999] w-full bg-[#F5F5DC] shadow-md">
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
            <NavLink
              key={index}
              to={item.href}
              aria-label={item.name}
              className="text-gray-800 text-2xl hover:text-black transition-colors duration-200"
            >
              {item.icon}
            </NavLink>
          ))}
          <Button className="rounded-full text-sm md:text-base">Buy Now</Button>
        </LiquidGlass>
      </nav>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#F5F5DC] shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-[1000] lg:hidden`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <img src={logo} alt="Fokus Logo" className="h-10 object-contain" />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close Menu"
            className="text-3xl text-gray-800 hover:text-black transition-colors"
          >
            <FiX />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              aria-label={item.name}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-800 text-lg font-medium hover:text-black transition-colors duration-200"
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
        <div className="flex items-center space-x-4 p-4">
          {navIcons.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              aria-label={item.name}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-800 text-2xl hover:text-black transition-colors duration-200"
            >
              {item.icon}
            </NavLink>
          ))}
        </div>
        <div className="p-4">
          <Button className="w-full rounded-full text-base">Buy Now</Button>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md bg-opacity-30 z-[900] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default Navbar;
