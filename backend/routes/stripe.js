const express = require('express');
const router = express.Router();
const stripeController = require('../controllers/stripes');

router.post('/create-checkout-session', stripeController.createCheckoutSession);
router.post('/scsuccess/:session_id', stripeController.createOrder);

module.exports = router;