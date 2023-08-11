import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isFetching: false,
    currentUser: null,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOut: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = false;
      localStorage.clear();
    },
    registerStart: (state) => {
      state.error = false;
    },
    registerSuccess: (state) => {
      state.error = false;
    },
    registerFailure: (state) => {
      state.error = true;
    },
    updateLikedProducts: (state, action) => {
      const { liked, id } = action.payload;
      if (liked) {
        !state.currentUser.likedProducts.includes(id) &&
          state.currentUser.likedProducts.push(id);
      } else {
        state.currentUser.likedProducts =
          state.currentUser.likedProducts.filter((e) => e !== id);
      }
    },
    updateLikedProductsFailure: (state) => {
      state.error = true;
    },
    updateLikedProductsSuccess: (state) => {
      state.error = false;
    },
    updatePurchasedProducts: (state, action) => {
      //state.currentUser.purchases.;
      const { products, date } = action.payload;
      products.forEach((product) => {
        state.currentUser.purchases.push({
          id: product._id,
          title: product.title,
          quantity: product.quantity,
          price: product.price * product.quantity,
          date: date,
        });
      });
    },
    updatePurchasedProductsSuccess: (state) => {
      state.error = false;
    },
    updatePurchasedProductsFailure: (state) => {
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logOut,
  registerStart,
  registerFailure,
  registerSuccess,
  updateLikedProducts,
  updateLikedProductsFailure,
  updateLikedProductsSuccess,
  updatePurchasedProducts,
  updatePurchasedProductsFailure,
  updatePurchasedProductsSuccess,
} = userSlice.actions;
export default userSlice.reducer;
