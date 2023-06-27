const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const cartRoute = require("./routes/cart")
const productRoute = require("./routes/product")
const orderRoute = require("./models/Order")
var cors = require("cors")
dotenv.config();

app.use(cors());

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB (NitinDB) Connection Successfull.!")
}).catch((err)=>{
    console.log(err)
})

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/cart", cartRoute);
app.use("api/order", orderRoute);
app.use("api/product", productRoute);




app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend is running on Port 5000.")
})

//mongodb+srv://Nitin:<password>@cluster0.jutgcfs.mongodb.net/?retryWrites=true&w=majority