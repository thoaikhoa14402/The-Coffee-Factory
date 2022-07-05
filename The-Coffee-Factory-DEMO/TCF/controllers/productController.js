//const AppError = require('../utilities/appError');
const catchAsync = require('../utilities/catchAsync');
const Product = require('../models/productModel');

exports.sendData = catchAsync(async (req, res, next) => {
  const productData = JSON.stringify(await Product.find({}));
  res.status(200).json({
    status: 'success',
    data: { productData }
  });
});
