const express = require('express');
const CartController = require('../controllers/cartController');

const router = express.Router();

//Update shopping cart
router.post('/shopping-cart', CartController.Shopping_Cart_Handle);

//Get all products in shopping cart
router.get('/getcart', CartController.Get_Shopping_Cart_Data);

module.exports = router;
