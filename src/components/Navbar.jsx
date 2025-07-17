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
    <div className="top-0 left-0 right-0 z-[999] w-full bg-[#F5F5DC] flex items-center justify-between px-8 py-4 shadow-lg">
      <img src={logo} alt="Logo" className="h-12" />

      <LiquidGlass className="px-20 py-2 rounded-full">
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.name} className="group flex flex-col items-center">
              <a href={item.href} className="text-gray-800 text-lg font-medium">
                {item.name}
              </a>

              <span className="w-0 group-hover:w-full h-0.5 transition-all duration-300 bg-gray-800 rounded"></span>
            </li>
          ))}
        </ul>
      </LiquidGlass>

      <LiquidGlass className="px-4 py-2 rounded-full">
        <div className="flex items-center space-x-6">
          {navIcons.map((item, index) => (
            <span
              key={index}
              className="text-gray-800 text-2xl hover:text-gray-600 transition-colors duration-300 cursor-pointer"
              aria-label={item.name}
            >
              {item.icon}
            </span>
          ))}

          <Button className="rounded-l-md rounded-r-full">Buy Now</Button>
        </div>
      </LiquidGlass>
    </div>
  );
}

export default Navbar;
