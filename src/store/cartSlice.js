import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { id, name, image, price, quantity, backgroundColor }
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          backgroundColor: newItem.backgroundColor,
          alias: newItem.alias,
        });
      } else {
        existingItem.quantity++;
      }

      // Calculate total amount
      state.totalAmount = state.items.reduce((total, item) => {
        const price = parseFloat(
          item.price.replace("Rs.", "").replace(",", "")
        );
        return total + price * item.quantity;
      }, 0);
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== id);

        // Recalculate total amount
        state.totalAmount = state.items.reduce((total, item) => {
          const price = parseFloat(
            item.price.replace("Rs.", "").replace(",", "")
          );
          return total + price * item.quantity;
        }, 0);
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && quantity > 0) {
        const quantityDiff = quantity - existingItem.quantity;
        state.totalQuantity += quantityDiff;
        existingItem.quantity = quantity;

        // Recalculate total amount
        state.totalAmount = state.items.reduce((total, item) => {
          const price = parseFloat(
            item.price.replace("Rs.", "").replace(",", "")
          );
          return total + price * item.quantity;
        }, 0);
      }
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
        state.totalQuantity--;

        // Recalculate total amount
        state.totalAmount = state.items.reduce((total, item) => {
          const price = parseFloat(
            item.price.replace("Rs.", "").replace(",", "")
          );
          return total + price * item.quantity;
        }, 0);
      } else if (existingItem && existingItem.quantity === 1) {
        // Remove item if quantity becomes 0
        state.totalQuantity--;
        state.items = state.items.filter((item) => item.id !== id);

        // Recalculate total amount
        state.totalAmount = state.items.reduce((total, item) => {
          const price = parseFloat(
            item.price.replace("Rs.", "").replace(",", "")
          );
          return total + price * item.quantity;
        }, 0);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
