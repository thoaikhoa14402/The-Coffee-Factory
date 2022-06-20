const User = require('../models/userModel');
const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/appError');

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

// create user
exports.createUser = (req, res) => {
  // status 500: internal server error
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

// get user
exports.getUser = (req, res) => {
  // status 500: internal server error
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

// update user
exports.updateUser = (req, res) => {
  // status 500: internal server error
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

// delete user
exports.deleteUser = (req, res) => {
  // status 500: internal server error
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined',
  });
};

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
