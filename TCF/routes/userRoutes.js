const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController'); // handle singup

const router = express.Router();

// Signup handle
router.post('/signup', authController.signup);

// Login handle
router.post('/login', authController.login);

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

// Get all users, create user
router.route('/').get(userController.getAllUsers).post(userController.createUser);

// Get,update,delete user
router.route('/:id').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);

module.exports = router;
