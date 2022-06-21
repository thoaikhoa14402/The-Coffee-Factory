const express = require('express');
const CartController = require('../controllers/cartController');
const authController = require('../controllers/authController');

const router = express.Router();

//Update shopping cart
router.post('/shopping-cart', authController.protect, CartController.Shopping_Cart_Handle);

//Get all products in shopping cart
router.get('/getcart', authController.protect, CartController.Get_Shopping_Cart);

module.exports = router;
