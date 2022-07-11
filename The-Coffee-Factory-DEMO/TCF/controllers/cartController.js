const Cart = require('../models/cartModel');
const catchAsync = require('../utilities/catchAsync');

exports.Shopping_Cart_Handle = catchAsync(async (req, res) => {
  const checkUser = await Cart.exists({ idUser: req.user._id });
  if (!checkUser) {
    const reqIdUser ={
      idUser: req.user._id,
      products: [...req.body.products],
      totalPrice: req.body.totalPrice
    }
    const newUser = await Cart.create(reqIdUser);
    res.status(200).json({ status: 'success' });
  } 
  else {
    const updateProduct = await Cart.updateOne(
      { idUser: req.user._id }, 
      { 
        products: [...req.body.products], 
        totalPrice: req.body.totalPrice 
      }
    );
    res.status(200).json({status: 'success'});
  }
});

exports.Get_Shopping_Cart = catchAsync(async (req, res) => {
  const Carts = await Cart.find(
    { idUser: req.user._id }, 
    { _id: false, __v: false, idUser: false }
  )
  res.status(200).json(Carts);
});