
const express = require('express');
const router = express.Router();
const isUserAuthenticated = require('../middleware/isUserAuthenticated');
const orderController = require('../controllers/orderController');

// router.post('/', orderController.addOrderItems);
// router.get('/myorders', orderController.getMyOrders);
// router.get('/:id',orderController.getOrderById);
// router.put('/:id',orderController.updateOrderToPaid);
router.get('/', isUserAuthenticated(["admin"]), orderController.getAllOrders);
router.put('/:id', isUserAuthenticated("admin"), orderController.updateOrderStatus);
router.delete('/:id', isUserAuthenticated("admin"), orderController.deleteOrder);


module.exports = router;
