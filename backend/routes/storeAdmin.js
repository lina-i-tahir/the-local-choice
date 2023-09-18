const express = require('express');
const router = express.Router();
const isUserAuthenticated = require('../middleware/isUserAuthenticated');
// const requireRole = require('../middlewares/requireRole');
const storeController = require('../controllers/stores');

router.get('/', isUserAuthenticated("admin"), storeController.index);
// router.get('/new', (req, res) => {
//     res.json('create new');
// });
router.get('/:id', storeController.show);
router.post('/', storeController.create);
router.put('/:id', storeController.updateOne);
router.delete('/:id', storeController.deleteStore);

// router.get('/new', isUserAuthenticated, storeController.new);

module.exports = router;