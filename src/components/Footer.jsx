import React from "react";
import logo from "../assets/logo.webp";
import { FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Button from "./Button";

const footerLinks = [
  {
    title: "Shop",
    links: ["Orders", "Return Policy", "About Us", "Shipping Policy"],
  },
  {
    title: "Know Fokus",
    links: ["Contact", "Customer Service", "Terms & Conditions"],
  },
  {
    title: "Privacy Policy",
    links: ["Privacy Policy"],
  },
];

const socialLinks = [
  {
    icon: <FaXTwitter className="text-2xl" />,
    href: "https://x.com/",
  },
  {
    icon: <FaInstagram className="text-2xl" />,
    href: "https://instagram.com/",
  },
  {
    icon: <FaYoutube className="text-2xl" />,
    href: "https://youtube.com/",
  },
  {
    icon: <MdEmail className="text-2xl" />,
    href: "mailto:fokus@example.com",
  },
];

function Footer() {
  return (
    <footer className="bg-white w-full text-black px-8 md:px-20 py-12 space-y-24">
      {/* Newsletter CTA */}
      <div
        className="rounded-xl p-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 bg-white"
        style={{
          boxShadow: "5px 5px 0 10px #FF6262",
        }}
      >
        <h2 className="text-2xl font-semibold">Stay in Fokus!</h2>
        <form className="flex space-x-4">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md outline-none border border-gray-300"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>

      {/* Main Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Logo and copyright */}
        <div className="flex flex-col space-y-4">
          <img
            src={logo}
            alt="Fokus Logo"
            className="w-38 h-auto object-cover"
          />
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()}, Fokus Beverages Private Limited.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-2 text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="group flex flex-col items-start w-fit"
                  >
                    <a href="#" className="hover:text-gray-700 transition">
                      {link}
                    </a>

                    <span className="w-0 group-hover:w-full h-0.5 transition-all duration-300 bg-gray-800 rounded"></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          {socialLinks.map(({ icon, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 transition"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
