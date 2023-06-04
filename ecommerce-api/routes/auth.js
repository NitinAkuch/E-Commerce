const User=require("../models/User");

const router = require("express").Router();

//REGISTER

router.post("/register", async (req, resp)=>{
    const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
    })

    try{
        const savedUser =  await newUser.save();
        resp.status(200).json(savedUser);
        //console.log(savedUser);
    } catch(err){
        res.status(500).json(err);
        
        //console.log(err);
    }
   
})

module.exports = router;