const catchAsync = require('../utilities/catchAsync');
const AppError = require('../utilities/appError');
const Product = require('../models/productModel');
const User = require('../models/userModel');
const Order = require('../models/orderModel');

//------------Orders---------------
exports.Status_Handle = catchAsync(async (req, res, next) => {
    let newStatus = "Delivered"
    if(req.body.status === "Processing") newStatus = "Shipping"
    else if (req.body.status === "Shipping") newStatus = "Delivered"
    else if (req.body.status === "Cancel") newStatus = "Cancel"
    const updateStatus = await Order.updateOne(
        { _id: req.body._id }, 
        { status: newStatus}
    );
    const orderUpdate = await Order.findOne(
        { _id: req.body._id}, 
        { __v: false, }
    );
    res.status(200).json({      
        status: 'success',
        update: orderUpdate
    });
});

exports.History_Admin = catchAsync(async (req, res, next) => {
    const allOrders = await Order.find({}, { __v: false, });
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
exports.Create_Product = catchAsync(async(req, res, next)=>{
    let oldProduct = await Product.findOne({title: req.body.title})
    oldProduct.content.push(req.body.nameProduct)
    oldProduct.price.push(req.body.priceProduct)
    oldProduct.topping.push(req.body.topping)
    const newProduct = await Product.updateOne(
        { title: req.body.title },
        { content: [...oldProduct.content], price: [...oldProduct.price], topping: [...oldProduct.topping] }
    )
    res.status(200).json({ status: 'success' })
})

exports.Delete_Product = catchAsync(async(req, res, next)=>{
    let oldProduct = await Product.findOne({title: req.body.title})
    let deleteIndex = oldProduct.content.indexOf(req.body.nameProduct)
    if(deleteIndex!=-1){
        oldProduct.content.splice(deleteIndex,1)
        oldProduct.price.splice(deleteIndex,1)
        oldProduct.topping.splice(deleteIndex,1)
        const newProduct = await Product.updateOne(
            { title: req.body.title },
            { content: [...oldProduct.content], price: [...oldProduct.price], topping: [...oldProduct.topping] }
        )
    }
    res.status(200).json({ status: 'success' })
})

exports.Update_Product = catchAsync(async(req, res, next)=>{
    let oldProduct = await Product.findOne({title: req.body.title})
    let updateIndex = oldProduct.content.indexOf(req.body.nameProduct)
    if(updateIndex!=-1){
        oldProduct.content[updateIndex]=req.body.nameUpdate
        oldProduct.price[updateIndex]=req.body.priceUpdate
        oldProduct.topping[updateIndex]=[...req.body.toppingUpdate]
        const newProduct = await Product.updateOne(
            { title: req.body.title },
            { content: [...oldProduct.content], price: [...oldProduct.price], topping: [...oldProduct.topping] }
        )
    }
    res.status(200).json({ status: 'success' })
})

//-----------Users management------------
//------