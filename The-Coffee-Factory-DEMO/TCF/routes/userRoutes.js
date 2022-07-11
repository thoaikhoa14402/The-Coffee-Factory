const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController'); // handle singup

const router = express.Router();

// Signup handle
router.post('/signup', authController.signup);

// Login handle
router.post('/login', authController.login, authController.validateRole);

// Forgot password handle
router.post('/forgotPassword', authController.forgotPassword);

// Reset password handle
router.patch('/resetPassword', authController.resetPassword);

// Validate verification code
router.post('/validateCode', authController.verifyCode);

// Update password handle
router.patch('/updateMyPassword', authController.protect, authController.updatePassword);

// Update current user's data
router.patch('/updateMe', authController.protect, userController.updateMe);

module.exports = router;
