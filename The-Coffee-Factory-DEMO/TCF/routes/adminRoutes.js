const express = require('express');
const authController = require('../controllers/authController');
const adminController = require('../controllers/adminController');
const router = express.Router();

//Update process status
router.post('/update-status', authController.protect, adminController.Status_Handle);

//Order History for Admin
router.get('/history-ad', authController.protect, adminController.History_Admin);

module.exports = router;