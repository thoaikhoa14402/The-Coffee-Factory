const Order = require('../models/orderModel');
const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/appError');

exports.Order_Handle = catchAsync(async (req, res, next) => {
  const dateTime = require('node-datetime').create().format('H:M:S d-m-Y');
  const dataGet = {
    status: 'Unprocessed',
    idUser: req.user._id,
    userName: req.user.email,
    address: req.body.address,
    phone: req.body.phone,
    products: [...req.body.products],
    totalPrice: req.body.totalPrice,
    noteAll: req.body.noteAll,
    dateOrder: dateTime,
  };
  const newOrder = await Order.create(dataGet);
  res.status(200).json({
    status: 'success',
    newOrder,
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
