import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseQuantity } from "../../store/cartSlice";
import { useToast } from "../../hooks/useToast";
import Button from "../Button";

function ProductSection({ THUMBNAIL, PRODUCT, backgroundColor }) {
  const [mainImage, setMainImage] = React.useState(THUMBNAIL[0]);
  const dispatch = useDispatch();
  const { addToast } = useToast();
  const cartItems = useSelector((state) => state.cart.items);

  // Get current product data from the products slice
  const products = useSelector((state) => state.products.products);
  const currentProduct = products.find(
    (product) => product.name === PRODUCT.name
  );

  // Find the current item in cart to get its quantity
  const cartItem = cartItems.find((item) => item.id === currentProduct?.id);
  const currentQuantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    if (currentProduct) {
      dispatch(
        addToCart({
          id: currentProduct.id,
          name: currentProduct.name,
          image: currentProduct.image,
          price: currentProduct.price,
          backgroundColor: backgroundColor,
          alias: currentProduct.alias,
        })
      );
      addToast(`${currentProduct.alias} added to cart!`, "success");
    }
  };

  const handleDecreaseQuantity = () => {
    if (currentProduct && currentQuantity > 0) {
      dispatch(decreaseQuantity(currentProduct.id));
      if (currentQuantity === 1) {
        addToast(`${currentProduct.alias} removed from cart`, "success");
      }
    }
  };

  return (
    <section
      className="px-6 py-12"
      style={{ backgroundColor: `${backgroundColor}22` }}
    >
      <div className="flex flex-col md:flex-row md:space-x-8 justify-between">
        {/* Left side thumbnails and main image */}
        <div className="flex flex-col-reverse md:flex-row gap-6 md:max-h-[29rem]">
          <div className="w-full md:w-fit flex flex-row md:flex-col gap-4 overflow-y-auto no-scrollbar p-2">
            {THUMBNAIL.map((thumbnail, idx) => (
              <button
                key={idx}
                aria-label="Thumbnail image"
                className={`border rounded-md overflow-hidden w-32 h-32 flex-shrink-0 cursor-pointer`}
                style={{ boxShadow: "1px 1px 0 2px rgba(0,0,0,0.8)" }}
                onClick={() => setMainImage(thumbnail)}
              >
                <img
                  src={thumbnail}
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
              src={mainImage}
              alt="Main Product"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right side product details */}
        <div className="w-full mx-auto mt-6 md:mt-0 md:px-8 flex flex-col ">
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
              className="border border-black rounded-md w-7 h-7 flex items-center justify-center text-black font-bold text-lg select-none hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleDecreaseQuantity}
              disabled={currentQuantity === 0}
            >
              −
            </button>
            <span className="text-sm select-none min-w-[2rem] text-center">
              {currentQuantity}
            </span>
            <button
              aria-label="Increase quantity"
              className="border border-black rounded-md w-7 h-7 flex items-center justify-center text-black font-bold text-lg select-none hover:bg-gray-100 transition-colors"
              onClick={handleAddToCart}
            >
              +
            </button>
            <Button
              aria-label="Add to Cart"
              className="bg-black text-white text-sm font-semibold rounded-md flex-1 py-2 text-center"
              onClick={handleAddToCart}
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
