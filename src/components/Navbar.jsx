import React from "react";
import logo from "../assets/logo.webp";
import { VscAccount } from "react-icons/vsc";
import { IoMdCart } from "react-icons/io";
import Button from "./Button";

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
    <div className="w-full bg-white flex items-center justify-between px-8 py-4">
      <img src={logo} alt="Logo" className="h-12" />

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

        <Button className="rounded-md">Buy Now</Button>
      </div>
    </div>
  );
}

export default Navbar;
