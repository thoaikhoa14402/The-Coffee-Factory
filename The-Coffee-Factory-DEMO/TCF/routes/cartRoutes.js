const express = require('express');
const cartController = require('../controllers/cartController');
const authController = require('../controllers/authController');

const router = express.Router();

//Update shopping cart
router.post('/shopping-cart', authController.protect, cartController.Shopping_Cart_Handle);

//Get all products in shopping cart
router.get('/getcart', authController.protect, cartController.Get_Shopping_Cart);

module.exports = router;
