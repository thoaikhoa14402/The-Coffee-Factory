const Order = require('../models/orderModel');
const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/appError');
const socketIO = require('../server');



exports.Order_Handle = catchAsync(async (req, res, next) => {
  const dateTime = require('node-datetime').create().format('H:M:S d-m-Y');
  const dataGet = {
    status: 'Processing',
    //Information
    idUser: req.user._id,
    paymentMethod: req.body.paymentMethod,
    userName: req.body.userName,
    phone: req.body.phone,
    address: req.body.address,
    noteAll: req.body.noteAll,
    methodDelivery: req.body.methodDelivery,
    storeLocation: req.body.storeLocation,
    promotion: req.body.promotion,
    totalPrice: req.body.totalPrice,
    dateOrder: dateTime,
    // Product 
    products: [...req.body.products],
  };
  const newOrder = await Order.create(dataGet);

  socketIO.onPayment(newOrder);

  res.status(200).json({
    status: 'success',
    newOrder,
  });
});
