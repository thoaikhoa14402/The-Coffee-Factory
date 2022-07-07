const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/appError');
const Product = require('../models/productModel');
const User = require('../models/userModel');
const Order = require('../models/orderModel');
const crypto = require('crypto');
const sendEmail = require('../utilities/email');

//------------Tracking Orders---------------
exports.Status_Handle = catchAsync(async (req, res, next) => {
  let newStatus = 'Delivered';
  if (req.body.status === 'Processing') newStatus = 'Shipping';
  else if (req.body.status === 'Shipping') newStatus = 'Delivered';
  else if (req.body.status === 'Cancel') newStatus = 'Cancel';
  const updateStatus = await Order.updateOne({ _id: req.body._id }, { status: newStatus });
  const orderUpdate = await Order.findOne({ _id: req.body._id }, { __v: false });
  res.status(200).json({
    status: 'success',
    update: orderUpdate,
  });
});

exports.History_Admin = catchAsync(async (req, res, next) => {
  const allOrders = await Order.find({}, { __v: false });
  res.status(200).json({
    status: 'success',
    size: allOrders.length,
    History: allOrders,
  });
});

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

//----------Products management----------
exports.Create_Product = catchAsync(async (req, res, next) => {
  let oldProduct = await Product.findOne({ title: req.body.title });
  oldProduct.content.push(req.body.nameProduct);
  oldProduct.price.push(req.body.priceProduct);
  oldProduct.topping.push(req.body.topping);
  const newProduct = await Product.updateOne(
    { title: req.body.title },
    { content: [...oldProduct.content], price: [...oldProduct.price], topping: [...oldProduct.topping] }
  );
  res.status(200).json({ status: 'success' });
});

exports.Delete_Product = catchAsync(async (req, res, next) => {
  let oldProduct = await Product.findOne({ title: req.body.title });
  let deleteIndex = oldProduct.content.indexOf(req.body.nameProduct);
  if (deleteIndex != -1) {
    oldProduct.content.splice(deleteIndex, 1);
    oldProduct.price.splice(deleteIndex, 1);
    oldProduct.topping.splice(deleteIndex, 1);
    const newProduct = await Product.updateOne(
      { title: req.body.title },
      { content: [...oldProduct.content], price: [...oldProduct.price], topping: [...oldProduct.topping] }
    );
  }
  res.status(200).json({ status: 'success' });
});

exports.Update_Product = catchAsync(async (req, res, next) => {
  let oldProduct = await Product.findOne({ title: req.body.title });
  let updateIndex = oldProduct.content.indexOf(req.body.nameProduct);
  if (updateIndex != -1) {
    oldProduct.content[updateIndex] = req.body.nameUpdate;
    oldProduct.price[updateIndex] = req.body.priceUpdate;
    oldProduct.topping[updateIndex] = [...req.body.toppingUpdate];
    const newProduct = await Product.updateOne(
      { title: req.body.title },
      { content: [...oldProduct.content], price: [...oldProduct.price], topping: [...oldProduct.topping] }
    );
  }
  res.status(200).json({ status: 'success' });
});

//-----------Users management------------
//------
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
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.status(200).json({
    status: 'success',
    message: 'Deleted user successfully!',
  });
});

// block user
exports.blockUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
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
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body);
  res.status(200).json({
    status: 'success',
    message: 'Updated user successfully!',
    user: user,
  });
});
