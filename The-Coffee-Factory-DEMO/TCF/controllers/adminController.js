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
    const allOrders = await Order.find({}, { _id: false, __v: false, });
    res.status(200).json({
      status: 'success',
      size: allOrders.length,
      History: allOrders,
    });
});

//Products management
exports.Create_Product = catchAsync(async(req, res, next)=>{
    let oldProduct = await Product.findOne({title: req.body.title})
    oldProduct.content.push(req.body.nameProduct)
    oldProduct.price.push(req.body.priceProduct)
    const newProduct = await Product.updateOne(
        { title: req.body.title },
        { content: [...oldProduct.content], price: [...oldProduct.price]}
    )
    res.status(200).json({
        status: 'success',
        NewUpdate: newProduct
    });
})

// exports.Create_Product = catchAsync(async(req, res, next)=>{
//     let oldProduct = await Product.findOne({title: req.body.title})
//     oldProduct.content.push(req.body.nameProduct)
//     oldProduct.price.push(req.body.priceProduct)
//     const newProduct = await Product.updateOne(
//         { title: req.body.title },
//         { content: [...oldProduct.content], price: [...oldProduct.price]}
//     )
//     res.status(200).json({
//         status: 'success',
//         NewUpdate: newProduct
//     });
// })

//Users management
//----------------