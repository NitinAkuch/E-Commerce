const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_KEY);

router.post("/payment", async (req, res) => {
  const { products} = req.body.productsCarted;
  console.log(req.body);
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.title,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
  res.json({ id: session.id });
});

module.exports = router;
// stripe.charges.create(
//   {
//     source: req.body.tokenId,
//     amount: req.body.amount,
//     currency: "inr",
//   },
//   (stripeErr, stripeRes) => {
//     if (stripeErr) {
//       res.status(500).json(stripeErr);
//       console.log(stripeErr);
//     } else {
//       res.status(200).json(stripeRes);
//       console.log(stripeRes);
//     }
//   }
// );
