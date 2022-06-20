const express = require('express');
const OrderController = require('../controllers/orderController');

const router = express.Router();

//Order History for Admin
router.get('/history-ad', OrderController.History_Admin);

//Order History for User
router.post('/history-user', OrderController.History_User);

//Add Order to History
router.post('/orders', OrderController.Order_Handle);

module.exports = router;
