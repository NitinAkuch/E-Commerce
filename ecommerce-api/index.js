const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cartRoute = require("./routes/cart");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
var cors = require("cors");
dotenv.config();

app.use(cors());

app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB (NitinDB) Connection Successfull.!");
  })
  .catch((err) => {
    console.log("DB Connection Failure");
    console.log(err);
  });

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/products", productRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend is running on Port 5000.");
});

//mongodb+srv://Nitin:<password>@cluster0.jutgcfs.mongodb.net/?retryWrites=true&w=majority
