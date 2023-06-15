const User = require("../models/User");
const { verifyToken, verifyTokenandAuthorization } = require("./verifyToken");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenandAuthorization, async (req, resp)=>{
   console.log("Put Method Called.!")
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

// router.put("/:id", (req, resp)=>{
//    console.log("Put method called.!" );
//    console.log(req.params.id);
// })

// router.put("/:id", (req, resp)=>{
//       console.log("Put method called.!" );
//       if(req.params.id === "6484706861cec779e8f0c841"){
//          console.log("Id is matched.")
//       }
//       console.log(req.params.id);
//    })
   














module.exports = router;



// router.get("/usertest", (req, resp)=>{
//     resp.send("user test is successfull.!")
// })

// router.post("/userposttest", (req, resp)=>{
//     const userName = req.body.userName;
//     console.log(userName);
// })


//  6484706861cec779e8f0c841

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ODQ3MDY4NjFjZWM3NzllOGYwYzg0MSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODY4MjgyNDQsImV4cCI6MTY4NzA4NzQ0NH0.Y6mUW2TYcjWPoWiVW1wFqIa1uXBIyy6TL53FhETv4ME