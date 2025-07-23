import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../store/cartSlice";
import Button from "../components/Button";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(
    (state) => state.cart
  );

  const handleIncreaseQuantity = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#F5F5DC] p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Your Cart</h1>
          <div
            className="bg-white rounded-lg p-12 text-center"
            style={{ boxShadow: "2.5px 2.5px 0 5px #000000cc" }}
          >
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Add some delicious Fokus drinks to get started!
            </p>
            <Link to="/products">
              <Button className="px-8 py-3 text-lg">Shop Now</Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F5DC] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            Your Cart ({totalQuantity} items)
          </h1>
          <Button
            onClick={handleClearCart}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2"
          >
            Clear Cart
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-6 flex items-center gap-4"
                style={{ boxShadow: "2.5px 2.5px 0 5px #000000cc" }}
              >
                {/* Product Image */}
                <div
                  className="w-20 h-20 rounded-lg p-2 flex-shrink-0"
                  style={{ backgroundColor: item.backgroundColor }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.alias}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <FiMinus />
                  </button>
                  <span className="font-semibold min-w-[2rem] text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleIncreaseQuantity(item)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <FiPlus />
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="w-8 h-8 rounded-full text-red-600 hover:bg-red-50 flex items-center justify-center transition-colors"
                  aria-label="Remove item"
                >
                  <FiX />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div
              className="bg-white rounded-lg p-6 sticky top-6"
              style={{ boxShadow: "2.5px 2.5px 0 5px #000000cc" }}
            >
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal ({totalQuantity} items)</span>
                  <span>Rs.{totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>Rs.{totalAmount.toFixed(2)}</span>
                </div>
              </div>

              <Button className="w-full py-3 text-lg mb-3">
                Proceed to Checkout
              </Button>

              <Link to="/products" className="block">
                <Button className="w-full py-2 bg-gray-200 text-black hover:bg-gray-300">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
