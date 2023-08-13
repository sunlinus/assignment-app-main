import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    totalBill: 0,
  },
  reducers: {
    addProduct(state, action) {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex < 0) {
        const newProduct = { ...action.payload, quantity: 1 };
        state.cartProducts.push(newProduct);
      } else {
        state.cartProducts[productIndex].quantity++;
      }
    },
    removeProduct(state, action) {
      const updatedCartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload.id
      );
      state.cartProducts = updatedCartProducts;
    },
    increaseProduct(state, action) {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex >= 0) {
        state.cartProducts[productIndex].quantity++;
      }
    },
    decreaseProduct(state, action) {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );
      if (productIndex >= 0) {
        state.cartProducts[productIndex].quantity--;
      }
      if (
        productIndex >= 0 &&
        state.cartProducts[productIndex].quantity === 0
      ) {
        state.cartProducts = state.cartProducts.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },
    clearCart(state, action) {
      state.cartProducts = [];
    },
    calculateBill(state, action) {
      state.totalBill = state.cartProducts.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
