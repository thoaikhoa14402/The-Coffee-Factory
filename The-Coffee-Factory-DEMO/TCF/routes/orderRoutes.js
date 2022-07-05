const express = require('express');
const orderController = require('../controllers/orderController');
const authController = require('../controllers/authController');

const router = express.Router();

//Add Order to History
router.post('/orders', authController.protect, orderController.Order_Handle);

module.exports = router;
