import React from "react";
import logo from "../assets/logo.webp";
import { VscAccount } from "react-icons/vsc";
import { IoMdCart } from "react-icons/io";
import Button from "./Button";
import LiquidGlass from "./LiquidGlass";

function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Know Fokus", href: "/about" },
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
        {/* Logo */}
        <a href="/" aria-label="Homepage">
          <img
            src={logo}
            alt="Fokus Logo"
            className="h-10 md:h-12 object-contain"
          />
        </a>

        {/* Navigation Links */}
        <LiquidGlass className="hidden lg:flex px-6 py-2 rounded-full">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name} className="group relative">
                <a
                  href={item.href}
                  className="text-gray-800 text-base font-medium hover:text-black transition-colors duration-200"
                >
                  {item.name}
                </a>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 group-hover:w-full bg-gray-800 rounded transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </LiquidGlass>

        {/* Icons + CTA */}
        <LiquidGlass className="flex items-center space-x-4 px-4 py-2 rounded-full">
          {navIcons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              aria-label={item.name}
              className="text-gray-800 text-2xl hover:text-black transition-colors duration-200"
            >
              {item.icon}
            </a>
          ))}
          <Button className="rounded-full text-sm md:text-base">Buy Now</Button>
        </LiquidGlass>
      </nav>
    </header>
  );
}

export default Navbar;
