const orderModel  = require("../models/orderModel");
const User = require("../models/user");
const Store = require('../models/store');

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = {
    createCheckoutSession,
    createOrder,
    getAllOrders,
};

async function createCheckoutSession(req,res) {
    const { cartItems, userId } = req.body;
    console.log("cartItems pleaseeeeeeeeee", cartItems);
  
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      return res.status(400).json({ error: "Cart is empty." });
    }
    
    // Filter out large data, keep only essential information for metadata
    const metadataCartItems = cartItems.map(item => {
      return {
          name: item.name,
          id: item._id, 
          quantity: item.quantity,
      };
  });

  const metadataString = JSON.stringify({ userId, cart: metadataCartItems });
  if (metadataString.length > 500) {
      return res.status(400).json({ error: "Metadata is too large." });
  }

    const customer = await stripe.customers.create({
      metadata: {
        userId: userId.toString(),
        cart: metadataString,
      },
    });

  
    const user = await User.findById(userId);
  
    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: "sgd",
        product_data: {
          name: item.name,
          metadata: {
            id: item._id,
          },
        },
        unit_amount: Math.round(item.price * 100), // Convert the unit price to cents and round up because of the decimal
      },
  
      quantity: item.quantity, 
    }));
  
    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: {
        allowed_countries: ["SG"],
      },
      line_items: lineItems, 
      customer: customer.id,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/scsuccess/session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/sccancel`,
    });
  
    console.log("session", session);
    res.json({ url: session.url });
}

async function createOrder(req, res) {
  try {
    let { session_id } = req.params;
    if (session_id.startsWith('session_id=')) {
      session_id = session_id.replace('session_id=', '');
    }

    console.log("Corrected Session ID:", session_id);

    const session = await stripe.checkout.sessions.retrieve(session_id);
    const customer = await stripe.customers.retrieve(session.customer);

    if (!customer.metadata || !customer.metadata.cart) {
      return res.status(400).json({ errorMsg: "Cart data is missing in customer metadata" });
    }

    const cartData = JSON.parse(customer.metadata.cart);
    const cartItems = cartData.cart;

    const formattedOrderItems = cartItems.map(item => ({
      name: item.name,
      id: item.id,
      qty: item.quantity
    }));

    const order = new orderModel({
      user: customer.metadata.userId,
      stripeId: session.id,
      orderId: customer.invoice_prefix,
      orderItems: formattedOrderItems,
      shippingAddress: {
        address: session.shipping_details.address.line1,
        postalCode: session.shipping_details.address.postal_code,
        country: session.shipping_details.address.country,
      },
      paymentMethod: "Card",
      taxPrice: 0,
      shippingPrice: 0,
      totalPrice: session.amount_total / 100,
      isPaid: true,
      paidAt: Date.now(),
      status: "Pending",
    });

    // update the store inventory
    // cartItems.forEach(async (item) => {
    //   const store = await Store.findById(item.storeId);
    //   const product = store.products.id(item.id);
    //   product.quantity -= item.quantity;

    //   await store.save();
    // });
    
    await order.save();
    console.log("after order", order)
    res.status(201).json({ title: "Update and create order", order });

  } catch (err) {
    console.log(err);
    res.status(500).json({ errorMsg: err.message });
  }
}


async function getMyOrders(req,res){
    try{
        const orders = await orderModel.find({user: req.user._id});
        res.json({ title: "My Orders", orders });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ errorMsg: err.message });
    }
}


async function getAllOrders(req,res){
    try{
        const orders = await orderModel.find({});
        res.json({ title: "All Orders", orders });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ errorMsg: err.message });
    }
}


