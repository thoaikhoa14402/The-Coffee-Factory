const CartController = require ('../controllers/CartController.js')
const express = require('express')

const route = express.Router()

//Update shopping cart
route.post('/shopping-cart', CartController.Shopping_Cart_Handle)

//Get all products in shopping cart
route.get('/getcart', CartController.Get_Shopping_Cart_Data)

module.exports = route