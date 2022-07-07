const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/appError');
const User = require('../models/userModel');
const crypto = require('crypto');
const sendEmail = require('../utilities/email');

// get all users
exports.getAllUsers = catchAsync(async (req, res, next) => {
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

// get single user by email
exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  res.status(200).json({
    status: 'success',
    data: user,
  });
});

// create user
exports.createUser = catchAsync(async (req, res, next) => {
  // 1) create random password
  const password = crypto.randomBytes(4).toString('hex');
  // 2) create user
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    gender: req.body.gender,
    status: req.body.status,
    password: password,
    passwordConfirm: password,
  });
  // 3) Check whether user exists or not
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('An error occured during account creation', 404));
  }
  // 4) Send random password to user's email
  const message = `
   Mật khẩu của bạn là ${password}
   Vui lòng dùng mật khẩu này để đăng nhập, bạn có thể thay đổi mật khẩu nếu muốn.`;
  try {
    await sendEmail({
      email: user.email,
      subject: 'Mật khẩu của bạn (TCF Coffee Shop)',
      message,
    });
    await user.save(); // dont need to turn off the validator, we want  validator to confirm password is equal to passwordConfirm
    res.status(200).json({
      status: 'success',
      message: 'Password sent to email!',
      data: user,
    });
  } catch (err) {
    await user.save({ validateBeforeSave: false });
    return next(new AppError('There was an error sending the email. Try again leter!', 500));
  }
});

// delete user
exports.deleteUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  await User.findByIdAndDelete(id);
  res.status(200).json({
    status: 'success',
    message: 'Deleted user successfully!',
  });
});

// block user
exports.blockUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findOne({ _id: id });
  user.status = 'inactive';
  await user.save();
  res.status(200).json({
    status: 'success',
    message: 'Blocked user successfully!',
  });
});

// update user
exports.updateUser = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const user = await User.findByIdAndUpdate(id, req.body);
  res.status(200).json({
    status: 'success',
    message: 'Updated user successfully!',
    user: user,
  });
});
