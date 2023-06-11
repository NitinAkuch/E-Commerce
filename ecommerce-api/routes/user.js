const User=require("../models/User");
const {verifyTokenandAuthorization}=require("./verifyToken");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenandAuthorization, async (req, resp)=>{
     if(req.body.password) {
        req.body.password  =  CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();

     }
     try {
        const updatedUser = await User.findByIdAndUpdate( req.params.id, { $set: req.body}, { new: true } );
             resp.status(200).json(updatedUser);
     } catch (err) {
        resp.status(500).json(err);
     }
})















module.exports = router;



// router.get("/usertest", (req, resp)=>{
//     resp.send("user test is successfull.!")
// })

// router.post("/userposttest", (req, resp)=>{
//     const userName = req.body.userName;
//     console.log(userName);
// })
