// import asyncHandler from "../middleware/asyncHandler.js";
// import Order from "../models/orderModel.js";

const Order = require("../models/orderModel");

module.exports = {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelievered,
    getOrders
};


// @desc Create new order 
// @route POST /api/orders
// @access Private

async function addOrderItems(req, res){
    res.send('add order items');
    // const {
    //     orderItems,
    //     shippingAddress,
    //     paymentMethod,
    //     itemsPrice,
    //     taxPrice,
    //     shippingPrice,
    //     totalPrice,
    // } = req.body

    // if (orderItems && orderItems.length === 0){
    //     res
    //         .status(400)
    //         .json({ message: "no items in your cart"});
    // } else {
    //     const order = new Order({
    //         orderItems: orderItems.map((x) => ({
    //             ...x, 
    //             product: x._id,
    //             _id: undefined
    //         })),
    //         user: req.user._id,
    //         shippingAddress,
    //         paymentMethod,
    //         itemsPrice,
    //         taxPrice,
    //         shippingPrice,
    //         totalPrice,
    //     })

    //     const createdOrder = await order.save()

    //     res.status(201).json(createdOrder)
    // }
}


// @desc Get logged in user orders
// @route GET /api/orders/myorders
// @access Private

async function getMyOrders(req, res){
    res.send('get my orders')
}


// @desc Get order by ID
// @route GET /api/orders/:id
// @access Private

async function getOrderById(req, res){
    res.send('get order by id')
}


// // @desc Update order to paid
// // @route PUT /api/orders/:id/pay
// // @access Private

async function updateOrderToPaid(req, res){
    res.send('update order to paid')
}


// // @desc Update order to delivered
// // @route PUT /api/orders/:id/deliver
// // @access Private/Admin

async function updateOrderToDelievered(req, res){
    res.send('update order to delivered')
}


// // @desc Get all orders
// // @route GET /api/orders
// // @access Private/Admin

async function getOrders(req, res){
    res.send('get all orders')
}
