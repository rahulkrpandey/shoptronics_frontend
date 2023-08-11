import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import { useSelector } from "react-redux";
import { userRequest, BASE_URL } from "./requestMethods";
import axios from "axios";
import { useEffect, useState } from "react";
// require("dotenv").config();

function App() {
  const user = useSelector((state) => state.user.currentUser);
  // console.log(user.accessToken, user._id);
  console.log(user);

  useEffect(() => {
    const updateUser = async () => {
      try {
        // const res = await userRequest.put(`/users/${user._id}`, user);
        const headers = {
          token: `Bearer ${user?.accessToken}`,
        };
        const res = await axios.put(`${BASE_URL}/users/${user._id}`, user, {
          headers,
        });
        //console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    user && updateUser();
  }, [user]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route
          path="/product/:id/:username/:productid"
          element={<ProductPage />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
