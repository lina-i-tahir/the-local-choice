const express = require('express');
const router = express.Router();
const storeController = require('../controllers/stores');

router.get('/', storeController.index);
router.get('/:id', storeController.show);

module.exports = router;