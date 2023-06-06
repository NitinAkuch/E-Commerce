const User=require("../models/User");

const router = require("express").Router();

const CryptoJS = require("crypto-js");
//REGISTER

router.post("/register", async (req, resp)=>{
    const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    })

    try{
        const savedUser =  await newUser.save();
        resp.status(200).json(savedUser);
        //console.log(savedUser);
    } catch(err){
        resp.status(500).json(err);
        
        //console.log(err);
    }
   
})

// LOGIN

router.post("/login", async (req, resp)=>{
    try{
        const user = await User.findOne({ userName: req.body.userName});
        !user && resp.status(401).json("Wrong Credentials.1.");

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && resp.status(401).json("Wrong Crefentials.2.");

        const { password, ...others} = user._doc; // ==> Destructuring
        resp.status(200).json(others);
    } catch (err){
        resp.status(500).json(err);
    }
})



module.exports = router;