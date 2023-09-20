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


// // @desc Get all orders
// // @route GET /api/orders
// // @access Private/Admin

async function getOrders(req, res){
    const orders = await Order.find({});
    res.json({ title: "All Orders", orders });
}


// @desc Create new order 
// @route POST /api/orders
// @access Private

async function addOrderItems(req, res){
    // res.send('add order items');
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    if (orderItems && orderItems.length === 0){
        res
            .status(400)
            .json({ message: "no items in your cart"});
    } else {
        const order = new Order({
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        })

        const createdOrder = await order.save()

        res.status(201).json(createdOrder)
    }
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
    // res.send('get order by id')
    const orderDetail = await Order.findById(req.params.id);
    // res.render("movies/show", { title: "Movie Detail", movie });
    res.json({ title: "Order Detail", orderDetail });
}


// // @desc Update order to paid
// // @route PUT /api/orders/:id/pay
// // @access Private

async function updateOrderToPaid(req, res){
    const {isPaid} = req.body;
    try {
        const order = await Order.findById(req.params.id);
        order.isPaid = isPaid;
        await order.save();
        res.json({ title: "Order Detail", order });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ errorMsg: err.message });
    }
}


// // @desc Update order to delivered
// // @route PUT /api/orders/:id/deliver
// // @access Private/Admin

async function updateOrderToDelievered(req, res){
    res.send('update order to delivered')
}

