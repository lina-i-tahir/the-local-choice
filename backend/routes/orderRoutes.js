
const express = require('express');
const router = express.Router();
// const isUserAuthenticated = require('../middlewares/isUserAuthenticated');
const orderController = require('../controllers/orderController');

router.post('/', orderController.addOrderItems);
router.get('/',orderController.getOrders);
router.get('/myorders', orderController.getMyOrders);
router.get('/:id',orderController.getOrderById);
router.put('/:id/pay',orderController.updateOrderToPaid);
router.put('/:id/deliver',orderController.updateOrderToDelievered);


module.exports = router;
