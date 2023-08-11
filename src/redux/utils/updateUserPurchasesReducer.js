import {
  updatePurchasedProductsFailure,
  updatePurchasedProducts,
  updateLikedProductsSuccess,
} from "../userSlice";
import moment from "moment";

export const updateUserPurchasesReducer = (dispatch, products) => {
  try {
    const date = moment().format("MMM Do YY");
    dispatch(updatePurchasedProducts({ products, date }));
    dispatch(updateLikedProductsSuccess());
  } catch (err) {
    dispatch(updatePurchasedProductsFailure());
    console.log(err);
  }
};
