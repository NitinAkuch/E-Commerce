
const Cart = require("../models/Cart");
const router = require("express").Router();
const { verifyToken, verifyTokenandAuthorization, verifyTokenandAdmin } = require("./verifyToken");

//CREATE
router.post("/", verifyToken, async (req, resp)=>{
    const newCart = new Cart(req.body);
    try {
        const savedcart = await newCart.save();
        resp.status(200).json(savedcart);
    } catch (error) {
        resp.status(500).json(error);
    }
})

//UPDATE

router.put("/:id", verifyTokenandAuthorization, async (req,resp)=>{
    try {
       const updatedCart =  await Cart.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true});
       resp.status(200).json(updatedCart);
    } catch (error) {
        resp.status(500).json(error);
    }
})


//DELETE

router.delete("/:id", verifyTokenandAuthorization, async (req, resp)=>{
    try {
        await Cart.findByIdAndDelete(req.params.id);
        resp.status(200).json("Cart has been deleted...");
    } catch (error) {
        resp.status(500).json(error);
    }
})

//GET USER CART

router.get("/find/:userId", verifyTokenandAuthorization, async (req, resp)=>{
    try {
       const cart = await Cart.findOne({ userId: req.params.userId});
       resp.status(200).json(cart);
    } catch (error) {
       resp.status(500).json(error);
    }
 })


 //GET ALL 

 router.get("/", verifyTokenandAdmin, async (req, resp)=>{
    try {
        const carts = await Cart.find();
    resp.status(200).json(carts);
 
    } catch (error) {
        resp.status(500).json(error);
    }    
})

module.exports = router;