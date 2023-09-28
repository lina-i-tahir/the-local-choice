// import asyncHandler from "../middleware/asyncHandler.js";
// import Order from "../models/orderModel.js";

const Order = require("../models/orderModel");

module.exports = {
    updateOrderStatus,
    getAllOrders,
    deleteOrder,
};


// // @desc Get all orders
// // @route GET /api/orders
// // @access Private/Admin
async function getAllOrders(req,res){
    try{
        const orders = await Order.find({});
        res.json({ title: "All Orders", orders });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ errorMsg: err.message });
    }
}

// get orders for one user
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


// // @desc Update order to delivered
// // @route PUT /api/orders/:id/deliver
// // @access Private/Admin
async function updateOrderStatus(req, res){
    console.log("update order status", req.body)
    console.log("update order status", req.params)
    try {
        const order = await Order.findById(req.params.id);
        order.status = req.body.status;
        if (req.body.status === "Delivered") {
            order.deliveredAt = Date.now();
        }
        console.log("order", order)
        await order.save();
        res.json({ title: "Order Detail", order });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ errorMsg: err.message });
    }
}


async function deleteOrder(req, res){
    console.log("Request params:", req.params);
    try{
        await Order.findByIdAndDelete(req.params.id);
        const orders = await Order.find({});
        res.json({ title: "All Orders", orders });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ errorMsg: err.message });
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////
// @desc Create new order 
// @route POST /api/orders
// @access Private

// async function addOrderItems(req, res){
//     const {
//         orderItems,
//         shippingAddress,
//         paymentMethod,
//         itemsPrice,
//         taxPrice,
//         shippingPrice,
//         totalPrice,
//     } = req.body

//     if (orderItems && orderItems.length === 0){
//         res
//             .status(400)
//             .json({ message: "no items in your cart"});
//     } else {
//         const order = new Order({
//             orderItems,
//             shippingAddress,
//             paymentMethod,
//             itemsPrice,
//             taxPrice,
//             shippingPrice,
//             totalPrice,
//         })

//         const createdOrder = await order.save()

//         res.status(201).json(createdOrder)
//     }
// }

// async function createOrder (req, res){
//     const order = new Order( req.body );
//     if (order.orderItems && order.orderItems.length === 0){
//         res
//             .status(400)
//             .json({ message: "no items in your cart"});
//     }
//     else{
//         order.orderId = new Date().getTime().toString();
//         try {
//             await order.save();
//             res.status(201).json({ title: "Order Detail", order });
//         }
//         catch (err) {
//             console.log(err);
//             res.status(500).json({ errorMsg: err.message });
//         }       
//     }
// }

// // @desc Get logged in user orders
// // @route GET /api/orders/myorders
// // @access Private

// async function getMyOrders(req, res){
//     try{
//         const orders = await Order.find({user: req.user._id});
//         res.json({ title: "My Orders", orders });
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ errorMsg: err.message });
//     }
// }


// // @desc Get order by ID
// // @route GET /api/orders/:id
// // @access Private

// async function getOrderById(req, res){
//     // res.send('get order by id')
//     const orderDetail = await Order.findById(req.params.id);
//     res.json({ title: "Order Detail", orderDetail });
// }


// // // @desc Update order to paid
// // // @route PUT /api/orders/:id/pay
// // // @access Private

// async function updateOrderToPaid(req, res){
//     const {isPaid} = req.body;
//     try {
//         const order = await Order.findById(req.params.id);
//         order.isPaid = isPaid;
//         await order.save();
//         res.json({ title: "Order Detail", order });
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json({ errorMsg: err.message });
//     }
// }

