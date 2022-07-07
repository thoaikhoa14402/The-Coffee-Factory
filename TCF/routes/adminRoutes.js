const express = require('express');
const adminController = require('../controllers/adminController');
const authController = require('../controllers/authController');

const router = express.Router();

// get all users from DB
router.get('/get-all-users', adminController.getAllUsers);

// get user by email from DB
router.get('/getUser', adminController.getUser);

// create new user
router.post('/createUser', adminController.createUser);

// delete user
router.delete('/deleteUser/:id', adminController.deleteUser);

// block user
router.patch('/blockUser/:id', adminController.blockUser);

// update user
router.patch('/updateUser/:id', adminController.updateUser);

module.exports = router;
