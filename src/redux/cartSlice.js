import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += action.payload.quantity;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id != action.payload._id
      );

      state.quantity -= action.payload.quantity;
      state.total -= action.payload.price * action.payload.quantity;
    },
    emptyCart: (state) => {
      state.products.splice(0, state.products.length);
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, emptyCart, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
