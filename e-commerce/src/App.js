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
  // const user = true;

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

            <Route path="/products/:category" element={<ProductList />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/success" element={<Success />} />

            <Route path="/product/:id" element={<Product />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
