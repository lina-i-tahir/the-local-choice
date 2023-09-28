
const express = require('express');
const router = express.Router();
// const isUserAuthenticated = require('../middlewares/isUserAuthenticated');
const orderController = require('../controllers/orderController');

// router.post('/', orderController.addOrderItems);
router.get('/',orderController.getAllOrders);
router.get('/myorders', orderController.getMyOrders);
router.get('/:id',orderController.getOrderById);
router.put('/:id',orderController.updateOrderToPaid);
router.put('/:id/deliver',orderController.updateOrderStatus);


module.exports = router;
