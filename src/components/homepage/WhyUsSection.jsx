import React from "react";
import logo from "../../assets/logo.webp";
import lemon from "../../assets/lemon.png";

const comparisonData = [
  {
    label: "Caffeine Content",
    values: [
      "None",
      "High (typically 80 mg to 300 mg per can)",
      "Low to moderate (electrolyte focus)",
    ],
  },
  {
    label: "Added Sugars",
    values: [
      "None",
      "Yes (high fructose corn syrup, glucose)",
      "Yes (glucose, fructose)",
    ],
  },
  {
    label: "Health Benefits",
    values: [
      "Vitamin D3 for bone health, LCLT for recovery, Ginkgo Biloba for brain health, Glutamine for muscle recovery, 5-HTP for mood support",
      "Quick energy boost, some amino acids",
      "Electrolyte balance, minimal nutritional benefits",
    ],
  },
  {
    label: "Electrolyte Balance",
    values: [
      "Provided by Coconut Water and Salt",
      "May lack sufficient electrolytes",
      "Only focuses on electrolytes",
    ],
  },
];

function WhyUsSection() {
  return (
    <div className="w-full p-6">
      <h2 className="text-4xl font-semibold my-4 text-center">Why Fokus</h2>

      <div
        className="relative max-w-6xl mx-auto my-12 p-4 bg-white rounded-lg shadow-lg"
        style={{
          boxShadow: "10px 10px 0 20px #ffc53e",
        }}
      >
        <img
          src={lemon}
          alt="Lemon"
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-32 h-auto rotate-animation"
        />

        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr>
              <th className="p-2 w-1/4"></th>
              <th className="text-xl px-8 py-4 border w-1/4 font-semibold bg-[#FF4F61]">
                <img src={logo} alt="Fokus Logo" className="w-36 mx-auto" />
              </th>
              <th className="text-xl px-8 py-4 border w-1/4 font-semibold">
                <h3 className="text-2xl font-medium">Generic Energy Drink </h3>
              </th>
              <th className="text-xl px-8 py-4 border w-1/4 font-semibold">
                <h3 className="text-2xl font-medium">Generic Sports Drink</h3>
              </th>
            </tr>
          </thead>

          <tbody>
            {comparisonData.map((row, index) => (
              <tr key={index}>
                <td className="text-xl px-8 py-4 border w-1/4 font-normal">
                  <h3>{row.label}</h3>
                </td>
                {row.values.map((value, i) => (
                  <td
                    key={i}
                    className={`px-8 py-4 border w-1/4 ${
                      i === 0 ? "bg-[#FF4F61]" : ""
                    }`}
                  >
                    <p className="text-center text-lg leading-tight">{value}</p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WhyUsSection;
