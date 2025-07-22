import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

function Dropdown({ options = [], className = "", ...props }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleOption = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {options.map((option, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border border-[#FFE060]"
            style={{
              boxShadow: "2.5px 2.5px 0 5px #000000cc",
            }}
          >
            <button
              onClick={() => toggleOption(index)}
              className="w-full flex justify-between items-center text-left cursor-pointer focus:outline-none"
            >
              <h3 className="font-bold text-xl">{option.title}</h3>
              <span
                className={`transition-transform duration-300 ${
                  isActive ? "rotate-45 text-[#FF6262]" : "rotate-0"
                }`}
              >
                <FaPlus className="text-2xl" />
              </span>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                isActive ? "max-h-40 mt-4" : "max-h-0 mt-0"
              }`}
            >
              <p className="text-gray-700">{option.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Dropdown;
