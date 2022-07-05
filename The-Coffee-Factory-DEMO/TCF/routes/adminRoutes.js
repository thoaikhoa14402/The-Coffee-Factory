const express = require('express');
const authController = require('../controllers/authController');
const adminController = require('../controllers/adminController');
const router = express.Router();

//Update process status
router.post('/update-status', authController.protect, adminController.Status_Handle);

//Order History for Admin
router.get('/history-ad', authController.protect, adminController.History_Admin);

//Create new product for Admin
router.post('/create-product',adminController.Create_Product);

//Delete product for Admin
router.post('/delete-product',adminController.Delete_Product);

module.exports = router;