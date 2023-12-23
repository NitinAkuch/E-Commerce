const Product = require("../models/Product");
const router = require("express").Router();
const {
  verifyToken,
  verifyTokenandAuthorization,
  verifyTokenandAdmin,
} = require("./verifyToken");

//CREATE

router.post("/", verifyTokenandAdmin, async (req, resp) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    resp.status(200).json(savedProduct);
  } catch (error) {
    resp.status(500).json(error);
  }
});

//UPDATE
router.put("/:id", verifyTokenandAdmin, async (req, resp) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    resp.status(200).json(updatedProduct);
  } catch (error) {
    resp.status(500).json(error);
  }
});

//DELETE
router.delete("/:id", verifyTokenandAdmin, async (req, resp) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    resp.status(200).json("Product has been deleted..");
  } catch (error) {
    resp.status(500).json(error);
  }
});

//GET a Product

router.get("/find/:id", async (req, resp) => {
  try {
    const product = await Product.findById(req.params.id);
    resp.status(200).json(product);
  } catch (error) {
    resp.status(500).json(error);
  }
});

//GET AAL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
