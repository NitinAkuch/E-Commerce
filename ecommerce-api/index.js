const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user")

dotenv.config();



mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("DB (NitinDB) Connection Successfull.!")
}).catch((err)=>{
    console.log(err)
})

app.use(express.json());
app.use("/api/users", userRoute);





app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend is running on Port 5000.")
})

//mongodb+srv://Nitin:<password>@cluster0.jutgcfs.mongodb.net/?retryWrites=true&w=majority