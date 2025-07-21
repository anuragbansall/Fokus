import React from "react";
import Button from "../Button";

function ProductSection({ THUMBNAIL_IDS, MAIN_IMAGE_ID, PRODUCT }) {
  return (
    <section className="px-6 py-12">
      <div className="flex flex-col md:flex-row md:space-x-8 justify-between">
        {/* Left side thumbnails and main image */}
        <div className="flex flex-col-reverse md:flex-row gap-6 md:max-h-[29rem]">
          <div className="w-full md:w-fit flex flex-row md:flex-col gap-4 overflow-y-auto no-scrollbar p-2">
            {THUMBNAIL_IDS.map((id, idx) => (
              <button
                key={id}
                aria-label="Thumbnail image"
                className={`border rounded-md overflow-hidden w-32 h-32 flex-shrink-0 cursor-pointer`}
                style={{ boxShadow: "1px 1px 0 2px rgba(0,0,0,0.8)" }}
              >
                <img
                  src={`https://storage.googleapis.com/a1aa/image/${id}.jpg`}
                  alt="Thumbnail"
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>

          <div
            aria-label="Main image"
            className="border rounded-md overflow-hidden w-[28rem] max-w-full h-full flex-shrink-0"
            style={{ boxShadow: "1.5px 1.5px 0 2.5px rgba(0,0,0,0.8)" }}
          >
            <img
              src={`https://storage.googleapis.com/a1aa/image/${MAIN_IMAGE_ID}.jpg`}
              alt="Main Product"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right side product details */}
        <div className="mx-auto mt-6 md:mt-0 md:px-8 flex flex-col ">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            {PRODUCT.name}
          </h1>

          <p className="w-fit bg-white text-sm font-semibold py-1 px-3 rounded-full my-4">
            {PRODUCT.tag}
          </p>

          <p className="font-semibold mb-1 text-2xl">{PRODUCT.price}</p>
          <p className="text-sm text-gray-700 mb-4">{PRODUCT.tax}</p>
          <div className="flex items-center space-x-2 my-6">
            <button
              aria-label="Decrease quantity"
              className="border border-black rounded-md w-7 h-7 flex items-center justify-center text-black font-bold text-lg select-none"
            >
              −
            </button>
            <span className="text-sm select-none">1</span>
            <button
              aria-label="Increase quantity"
              className="border border-black rounded-md w-7 h-7 flex items-center justify-center text-black font-bold text-lg select-none"
            >
              +
            </button>
            <Button
              aria-label="Add to Cart"
              className="bg-black text-white text-sm font-semibold rounded-md flex-1 py-2 text-center"
            >
              Add to Cart
            </Button>
          </div>

          <ul
            aria-label="Shipping and order information"
            className="w-full rounded-md p-4 list-disc list-inside space-y-1 bg-white mt-auto"
            style={{ boxShadow: "1.5px 1.5px 0 2.5px rgba(0,0,0,0.8)" }}
          >
            {PRODUCT.shippingInfo.map((info, idx) => (
              <li key={idx}>{info}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
