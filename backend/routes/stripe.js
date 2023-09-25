const express = require("express");

require("dotenv").config();

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
      cart: JSON.stringify(req.body.cartItems),
    },
  });
  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {
      allowed_countries: ["SG"],
    },
    line_items: [
      {
        price_data: {
          currency: "sgd",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    customer: customer.id,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/scsuccess`,
    cancel_url: `${process.env.CLIENT_URL}/sccancel`,
  });
  // const session = await stripe.checkout.sessions.create({
  //   shipping_address_collection: {
  //     allowed_countries: ["SG"],
  //   },
  //   line_items: [
  //     {
  //       price_data: {
  //         currency: "sgd",
  //         product_data: {
  //           name: "T-shirt",
  //         },
  //         unit_amount: 2000,
  //       },
  //       quantity: 1,
  //     },
  //   ],

  //   mode: "payment",
  //   success_url: `${process.env.CLIENT_URL}/scsucess`,
  //   cancel_url: `${process.env.CLIENT_URL}/sccancel`,
  // });
  res.send({ url: session.url });
});

// stripe webhooks

const endpointSecret =
  "whsec_3e5fb04178063d2ea93a1a863033cb7a05f7ae622725827a07474f853fc54326";

router.post(
  "/webhook",
  express.json({ type: "application/json" }),
  (req, res) => {
    console.log("Webhook success");
    const sig = request.headers["stripe-signature"];

    let event;

    let data;
    let eventType;

    if (endpointSecret) {
      let event;

      try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
      } catch (err) {
        console.log("Webhook Error: ${err.message}");
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
      }
      data = event.data.object;
      eventType = event.type;
    } else {
      data = req.body.data.object;
      eventType = req.body.type;
    }
    // Handle the event

    if (eventType === "checkout.session.completed") {
      stripe.customers
        .retrieve(data.customer)
        .then((customer) => {
          console.log(customer);
          console.log("data:", data);
        })
        .catch((err) => console.log(err.message));
      //get cust data
    }
    // Return a 200 response to acknowledge receipt of the event
    res.send();
  }
);

// app.listen(4242, () => console.log("Running on port 4242"));

//for FE
module.exports = router;

// BACK UP BEFORE LINK TO FE
// const express = require("express");

// require("dotenv").config();

// const Stripe = require("stripe");
// const stripe = Stripe(process.env.STRIPE_KEY);

// const router = express.Router();

// router.post("/create-checkout-session", async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     shipping_address_collection: {
//       allowed_countries: ["SG"],
//     },
//     line_items: [
//       {
//         price_data: {
//           currency: "sgd",
//           product_data: {
//             name: "T-shirt",
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],

//     mode: "payment",
//     success_url: `${process.env.CLIENT_URL}/scsucess`,
//     cancel_url: `${process.env.CLIENT_URL}/sccancel`,
//   });
//   res.send({ url: session.url });
// });
