const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.post('/config/stores/:id/products', productsController.create);
router.get('/config/stores/:id/products/:productId', productsController.show);
router.put('/config/stores/:id/products/:productId', productsController.updateOne);
router.delete('/config/stores/:id/products/:productId', productsController.deleteProduct);

module.exports = router;