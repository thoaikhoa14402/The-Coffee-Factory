const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController'); // handle singup

const router = express.Router();

// signup handle
router.post('/signup', authController.signup);
// login handle
router.post('/login', authController.login);
// forgot password handle
router.post('/forgotPassword', authController.forgotPassword);
// reset password handle
router.patch('/resetPassword/:token', authController.resetPassword);
// update password handle
router.patch('/updateMyPassword', authController.protect, authController.updatePassword);
// update current user's data
router.patch('/updateMe', authController.protect, userController.updateMe);
// Get all users, create user
router.route('/').get(userController.getAllUsers).post(userController.createUser);
// Get,update,delete user
router.route('/:id').get(userController.getUser).patch(userController.updateUser).delete(userController.deleteUser);

module.exports = router;
