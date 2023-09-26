const { orderModel } = require("../models/orderModel");
const express = require("express");

require("dotenv").config();

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router();

// Middleware to parse JSON data in the request body
router.use(express.json());

router.post("/create-checkout-session", async (req, res) => {
  // Access cartItems from req.body
  const { cartItems, userId } = req.body;

  // Check if cartItems is an array and not empty
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return res.status(400).json({ error: "Cart is empty." });
  }
  // Create a customer and session based on cartItems and userId
  const customer = await stripe.customers.create({
    metadata: {
      userId: userId.toString(),
      cart: JSON.stringify(cartItems.toString()), // Convert the array to a string
    },
  });

  // Dynamically generate line_items based on cartItems
  const lineItems = cartItems.map((item) => ({
    price_data: {
      currency: "sgd",
      product_data: {
        name: item.name,
        metadata: {
          id: item._id,
          // image: item.image,
        },
      },
      unit_amount: item.price * 100, // Convert the unit price to cents
    },

    quantity: item.quantity, // Include the quantity property
  }));

  const session = await stripe.checkout.sessions.create({
    shipping_address_collection: {
      allowed_countries: ["SG"],
    },
    line_items: lineItems, // Use the dynamically generated line_items
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
    if (
      (eventType === "checkout.session.completed",
      "invoice.payment_succeeded",
      "product.updated")
    ) {
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

// original
// const { orderModel } = require("../models/orderModel");
// const express = require("express");

// require("dotenv").config();

// const Stripe = require("stripe");
// const stripe = Stripe(process.env.STRIPE_KEY);

// const router = express.Router();

// // const { cartItems } = useSelector((state) => state.cart);
// // const { totalPrice } = useSelector((state) => state.cart); // total price of all items in cart
// // const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);

// router.post("/create-checkout-session", async (req, res) => {
//   const customer = await stripe.customers.create({
//     metadata: {
//       userId: req.body.userId,
//       cart: JSON.stringify(req.body.cartItems),
//     },
//   });
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
//     customer: customer.id,
//     mode: "payment",
//     success_url: `${process.env.CLIENT_URL}/scsuccess`,
//     cancel_url: `${process.env.CLIENT_URL}/sccancel`,
//   });

//   res.send({ url: session.url });
// });

// // Create Order
// const createOrder = async (customer, data) => {
//   const Items = JSON.parse(customer.metadata.cart);

//   const newOrder = new orderModel({
//     userId: customer.metadata.userId,
//     customerId: data.customer,
//     paymentIntentId: data.payment_intent,
//     products: Items,
//     total: data.totalPrice,
//     payment_status: data.payment_status,
//   });
//   try {
//     const savedOrder = await newOrder.save();
//     console.log("Processed Order: ", savedOrder);
//   } catch (err) {
//     console.log(err);
//   }
// };
// // stripe webhooks

// // This is your Stripe CLI webhook secret for testing your endpoint locally.
// const endpointSecret = Stripe(process.env.STRIPE_WEBHOOK_ENDPOINT);

// router.post(
//   "/webhook",
//   express.json({ type: "application/json" }),
//   (req, res) => {
//     console.log("Webhook success");
//     const sig = request.headers["stripe-signature"];

//     let event;

//     let data;
//     let eventType;

//     if (endpointSecret) {
//       let event;

//       try {
//         event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
//       } catch (err) {
//         console.log("Webhook Error: ${err.message}");
//         res.status(400).send(`Webhook Error: ${err.message}`);
//         return;
//       }
//       data = event.data.object;
//       eventType = event.type;
//     } else {
//       data = req.body.data.object;
//       eventType = req.body.type;
//     }
//     // Handle the event

//     if (eventType === "checkout.session.completed") {
//       stripe.customers
//         .retrieve(data.customer)
//         .then((customer) => {
//           console.log(customer);
//           console.log("data:", data);
//           createOrder(customer, data);
//         })
//         .catch((err) => console.log(err.message));
//       //get cust data
//     }

//     res.send();
//   }
// );

// //for FE
// module.exports = router;
