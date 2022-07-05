const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/appError');
const Product = require('../models/productModel');
const User = require('../models/userModel');
const Order = require('../models/orderModel');

//Orders
exports.Status_Handle = catchAsync(async (req, res, next) => {
    const updateStatus = await Order.updateOne(
        { idUser: req.user._id }, 
        { status: req.body.status}
    );
    res.status(200).json({      
        status: 'success',
        Update: req.body
    });
});

exports.History_Admin = catchAsync(async (req, res, next) => {
    const allOrders = await Order.find({}, { _id: false, __v: false });
    res.status(200).json({
      status: 'success',
      size: allOrders.length,
      History: allOrders,
    });
});

//Products management
//----------------

//Users management
//----------------