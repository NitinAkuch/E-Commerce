// import React from "react";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useLocation } from "react-router";
// import { userRequest } from "../requestMethods";
import { useNavigate, Link } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const data = location.state.stripeData;
  // const cart = location.state.cart;
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const [orderId, setOrderId] = useState(null);

  // useEffect(() => {
  //   const createOrder = async () => {
  //     try {
  //       const res = await userRequest.post("/orders", {
  //         userId: currentUser._id,
  //         products: cart.products.map((item) => ({
  //           productId: item._id,
  //           quantity: item._quantity,
  //         })),
  //         amount: cart.total,
  //         address: data.billing_details.address,
  //       });
  //       setOrderId(res.data._id);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   data && createOrder();
  // }, [cart, data, currentUser]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h3>Order has been created successfully.</h3>

      <Link onClick={() => navigate("/home")}>Go to Homepage</Link>
    </div>
  );
};

export default Success;
