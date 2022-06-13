const CartController = require ('../controllers/cartController.js')
const express = require('express')

const route = express.Router()

//Update shopping cart
route.post('/shopping-cart', CartController.updateCart)

//Delete products

//Get all products in cart
route.get('/getcart', CartController.getCart)

module.exports = route