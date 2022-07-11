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

exports.searchProduct = catchAsync(async (req, res, next) => {
  const productData = await Product.find({});
  for (let i=0; i<productData.length; i++){
    for(let j=0; j<productData[i].content.length; j++){
      if(!productData[i].content[j].toLowerCase().includes(req.body.searchName.toLowerCase())){
        productData[i].content.splice(j, 1)
        productData[i].price.splice(j, 1)
        productData[i].topping.splice(j, 1)
        productData[i].img.splice(j, 1)
        j--
      }
    }
    if(productData[i].content.length==0){
      productData.splice(i,1)
      i--
    }
  }
  res.status(200).json(productData);
});