const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.post('/config/stores/:id/products', productsController.create);

module.exports = router;