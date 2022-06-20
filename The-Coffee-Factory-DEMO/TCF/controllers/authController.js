const { promisify } = require('util');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Order = require('../models/orderModel');
const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/appError');
const orderController = require('../controllers/orderController')
const cartController = require('../controllers/cartController')
const sendEmail = require('../utilities/email');

// signToken
const signToken = function (id) {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// sign passwordResetToken
const signPasswordResetToken = function (verification) {
  return jwt.sign({ verification: verification }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// sign up handle
exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    passwordChangedAt: req.body.passwordChangedAt,
  });
  // create json web token
  const token = signToken(newUser._id);
  // status code 201: request has succeeded and has led to the creation of a resource
  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

// login handle
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password', 400));
  }
  // 2) Check if user exists && password is correct
  const user = await User.findOne({ email: email }).select('+password');
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // 3) If everything is ok, send token to client
  const cart = await cartController.Get_Shopping_Cart_Data(user._id);
  console.log("cart: ", cart);
  const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    token,
    idUser: user._id,
    cart
  });
});

// protect handle
exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it's there
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new AppError('You are not logged in! Please log in to get access'), 401);
  }
  // 2) Verfication token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError('The user belonging to this token does no longer exist.', 401));
  }
  // 4) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(new AppError('User recently changed password! Please log in again.'), 401);
  }
  // GRANT ACCESS TO PROTECT ROUTE
  req.user = currentUser;
  next();
});

// restrict (who are allowed to access the resource) handle
exports.restrictTo = function (...roles) {
  return (req, res, next) => {
    // roles ['admin','lead-guide']
    if (!roles.includes(req.user.role)) {
      return next(new AppError('You do not have permission to perform this action', 403));
    }
    next();
  };
};

// Forgot password handle
exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on POSTed email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError('There is no user with that email address', 404));
  }
  // 2) Generate the random reset token

  // signPasswordResetToken
  const verification = crypto.randomBytes(3).toString('hex');
  const resetToken = signPasswordResetToken(verification);
  // 3) Send it to user's email
  const message = `
  Mã xác nhận của bạn là ${verification}
  Vui lòng nhập mã này để có thể thay đổi mật khẩu.`;
  try {
    await sendEmail({
      email: user.email,
      subject: 'Your verification code (valid for 10min)',
      message,
    });
    user.passwordResetExpires = Date.now() + 10 * 60 * 1000; // now time + 10 minitues
    await user.save(); // dont need to turn off the validator, we want  validator to confirm password is equal to passwordConfirm
    res.status(200).json({
      status: 'success',
      token: resetToken,
      message: 'Verification code sent to email!',
    });
  } catch (err) {
    // reset token and expires property if error occurs
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new AppError('There was an error sending the email. Try again leter!', 500));
  }
});

// Reset password handle
exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on the token
  const resetToken = req.body.token;
  const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  /* find user */
  const user = await User.findOne({ passwordResetToken: hashedToken, passwordResetExpires: { $gte: Date.now() } });
  // 2) If token has not expired, and there is user, set the new password
  if (!user) return next(new AppError('Token is invalid or has expired', 400));
  user.password = req.body.password; // if user exists, reset password
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save(); // dont need to turn off the validator, we want  validator to confirm password is equal to passwordConfirm
  // 3) Update changedPasswordAt property for the user
  // 4) Log the user in, send JWT
  const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    token,
  });
});

// verify verification code
exports.verifyCode = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  const resetToken = req.body.token;
  const decoded = await promisify(jwt.verify)(resetToken, process.env.JWT_SECRET);
  const { verification } = decoded;
  if (verification !== req.body.verificationCode)
    return next(new AppError('Invalid verification code. Please try again', 400));
  // create new reset token, send to client (security)
  const newResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  // hash new reset token, and save it to database
  user.passwordResetToken = crypto.createHash('sha256').update(newResetToken).digest('hex');
  await user.save({ validateBeforeSave: false });
  res.status(200).json({
    status: 'success',
    token: newResetToken,
  });
  next();
});

// Update password handle
exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from collection
  const user = await User.findById(req.user.id).select('+password');
  // 2) Check if POSTed current password is corect
  if (!(await user.correctPassword(req.body.passwordCurrent, user.password))) {
    return next(new AppError('Your current password is wrong'), 401);
  }
  // 3) If so, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();
  // 4) Log the user in, send JWT
  const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    token,
  });
});
