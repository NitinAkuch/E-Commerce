const User = require("../models/User");

const router = require("express").Router();

const CryptoJS = require("crypto-js");

const jwt = require("jsonwebtoken");

//REGISTER

router.post("/register", async (req, resp) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
    isAdmin: req.body.isAdmin,
  });

  try {
    const savedUser = await newUser.save();
    resp.status(200).json(savedUser);
    //console.log(savedUser);
  } catch (err) {
    resp.status(500).json(err);

    //console.log(err);
  }
});

// LOGIN

router.post("/login", async (req, resp) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && resp.status(401).json("Wrong Credentials.1. or Invalid Username!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      resp.status(401).json("Wrong Crefentials.2. or Invalid Password!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc; // ==> Destructuring
    resp.status(200).json({ ...others, accessToken });
  } catch (err) {
    resp.status(500).json(err);
  }
});

module.exports = router;
