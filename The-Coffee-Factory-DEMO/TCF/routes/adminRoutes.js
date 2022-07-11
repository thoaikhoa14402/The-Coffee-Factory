const express = require('express');
const authController = require('../controllers/authController');
const adminController = require('../controllers/adminController');
const router = express.Router();

//------------Orders-------------

//Update process status
router.post('/update-status', authController.protectForAdmin, adminController.Status_Handle);

//Order History for Admin
router.get('/history-ad', authController.protectForAdmin, adminController.History_Admin);

//Order History for User
router.post('/history-user', authController.protectForAdmin, adminController.History_User);

//----------Products-------------

//Create new product for Admin
router.post('/create-product', authController.protectForAdmin, adminController.Create_Product);

//Delete product for Admin
router.post('/delete-product', authController.protectForAdmin, adminController.Delete_Product);

//Update product for Admin
router.post('/update-product', authController.protectForAdmin, adminController.Update_Product);

//-----------Users--------------
// get all users from DB
router.get('/get-all-users', authController.protectForAdmin, adminController.getAllUsers);

// get user by email from DB
router.get('/get-user', authController.protectForAdmin, adminController.getUser);

// create new user
router.post('/create-user', authController.protectForAdmin, adminController.createUser);

// delete user
router.delete('/delete-user/:id', authController.protectForAdmin, adminController.deleteUser);

// block user
router.patch('/block-user/:id', authController.protectForAdmin, adminController.blockUser);

// update user
router.patch('/update-user/:id', authController.protectForAdmin, adminController.updateUser);

module.exports = router;
