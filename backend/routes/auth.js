var express = require('express');
var router = express.Router();
const authController = require('../controllers/auth');

/* GET users listing. */
router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.post('/logout', authController.logout);


module.exports = router;
