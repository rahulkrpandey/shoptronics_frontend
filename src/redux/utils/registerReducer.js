import { publicRequest } from "../../requestMethods";
import { registerStart, registerFailure, registerSuccess } from "../userSlice";

export const register = async (dispatch, user, navigate) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess());
    navigate("/login", { replace: true });
  } catch (err) {
    console.log(err);
    dispatch(registerFailure());
  }
};
