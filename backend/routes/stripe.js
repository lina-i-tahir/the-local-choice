const { orderModel } = require("../models/orderModel");
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

  res.send({ url: session.url });
});

// Create Order
const createOrder = async (customer, data) => {
  const Items = JSON.parse(customer.metadata.cart);

  const newOrder = new orderModel({
    userId: customer.metadata.userId,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products: Items,
    total: data.totalPrice,
    payment_status: data.payment_status,
  });
  try {
    const savedOrder = await newOrder.save();
    console.log("Processed Order: ", savedOrder);
  } catch (err) {
    console.log(err);
  }
};
// stripe webhooks

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = Stripe(process.env.STRIPE_WEBHOOK_ENDPOINT);

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
          createOrder(customer, data);
        })
        .catch((err) => console.log(err.message));
      //get cust data
    }

    res.send();
  }
);

//for FE
module.exports = router;
