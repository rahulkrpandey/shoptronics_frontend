import {
  updateLikedProducts,
  updateLikedProductsSuccess,
  updateLikedProductsFailure,
} from "../userSlice";

export const updateUserLikedProductReducer = async (dispatch, id, liked) => {
  try {
    dispatch(updateLikedProducts({ id, liked }));
    dispatch(updateLikedProductsSuccess);
  } catch (err) {
    console.log(err);
    dispatch(updateLikedProductsFailure());
  }
};
