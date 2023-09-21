const express = require('express');
const router = express.Router();
const isUserAuthenticated = require('../middlewares/isUserAuthenticated');

// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 5.99 },
];

router.get('/', isUserAuthenticated("user"), (req, res) => {
    res.json(products);
}
);