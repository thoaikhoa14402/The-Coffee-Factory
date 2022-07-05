const User = require('../models/userModel');
const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/appError');
const Order = require('../models/orderModel');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

// get all users
exports.getAllUsers = catchAsync(async (req, res) => {
  const users = await User.find();
  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    result: users.length,
    data: {
      users,
    },
  });
});


// update user
exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if user POSTed password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(new AppError('This route is not for password updates. Please use /updateMyPassword', 400));
  }
  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filterBody = filterObj(req.body, 'name', 'email');
  // 3) Update user account
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filterBody, { new: true, runValidators: true });
  res.status(200).json({ status: 'success', data: { user: updatedUser } });
});

//View payment history
exports.History_User = catchAsync(async (req, res, next) => {
  const Orders = await Order.find(
    { idUser: req.user._id },
    { _id: false, __v: false, userName: false, address: false, phone: false }
  );
  if (Orders.length === 0) {
    return next(new AppError('No product with this ID', 404));
  }
  res.status(200).json({
    status: 'success',
    size: Orders.length,
    History: Orders,
  });
});
