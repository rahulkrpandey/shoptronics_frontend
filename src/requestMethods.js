import axios from "axios";

export const BASE_URL = "http://localhost:5000/api";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)
//   ?.currentUser?.accessToken;

const userState = JSON.parse(
  JSON.parse(localStorage.getItem("persist:root")).user
);

export const TOKEN = userState.currentUser
  ? userState.currentUser.accessToken
  : "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
