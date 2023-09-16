const express = require('express');
const router = express.Router();
// const isUserAuthenticated = require('../middlewares/isUserAuthenticated');
// const requireRole = require('../middlewares/requireRole');
const storeController = require('../controllers/stores');

router.get('/', storeController.index);
// router.get('/new', (req, res) => {
//     res.json('create new');
// });

router.post('/', storeController.create);

// router.get('/new', isUserAuthenticated, storeController.new);

module.exports = router;