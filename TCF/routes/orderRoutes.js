const OrderController = require ('../controllers/orderController.js')
const express = require('express')

const route = express.Router()

//Order History for Admin
route.get('/history-ad', OrderController.History_Admin)

//Order History for User
route.post('/history-user', OrderController.History_User)

//Add Order to History
route.post('/orders', OrderController.Order_Handle)

module.exports = route