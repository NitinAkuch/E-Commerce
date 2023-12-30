import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ProductList from "./Pages/ProductList";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Success from "./Pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  // const user = false;

  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />
        {!user ? (
          <>
            <Route index element={<Navigate to="/login" replace={true} />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />

            <Route index element={<Navigate to="/home" replace={true} />} />

            <Route
              path="/products/:category"
              element={
                user ? (
                  <Navigate to={<ProductList />} />
                ) : (
                  <Navigate to={<Login />} />
                )
              }
            />

            <Route
              path="/cart"
              element={
                user ? <Navigate to={<Cart />} /> : <Navigate to={<Login />} />
              }
            />

            <Route
              path="/success"
              element={
                user ? (
                  <Navigate to={<Success />} />
                ) : (
                  <Navigate to={<Login />} />
                )
              }
            />

            <Route
              path="/product/:id"
              element={
                user ? (
                  <Navigate to={<Product />} />
                ) : (
                  <Navigate to={<Login />} />
                )
              }
            />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
