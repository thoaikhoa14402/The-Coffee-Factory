const Cart = require('../models/cartModel');
const catchAsync = require('../utilities/catchAsync');

exports.Shopping_Cart_Handle = catchAsync(async (req, res) => {
  const checkUser = await Cart.exists({ idUser: req.user._id });
  if (!checkUser) {
    const newUser = await Cart.create(req.body);
    res.status(200).json({ newUser });
  } 
  else {
    const updateProduct = await Cart.updateOne(
      { idUser: req.user._id }, 
      { products: [...req.body.products] }
    );
    res.status(200).json(req.body.products);
  }
});

exports.Get_Shopping_Cart_Data = (user_id) => {
  return new Promise(async(resolve, reject) => {
    resolve(await Cart.find(
      { idUser: user_id },
      { _id: false, __v: false, idUser: false}
    ));
  });
};

exports.Get_Shopping_Cart_Handle = catchAsync(async (req, res) => {
  const Carts = await this.Get_Shopping_Cart_Data(req.user._id);
  res.status(200).json(Carts);
})