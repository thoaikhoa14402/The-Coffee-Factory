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

const searchProductByName = async(productData, req, res, next) =>{
  for (let i=0; i<productData.length; i++){
    for(let j=0; j<productData[i].content.length; j++){
      if(!productData[i].content[j].toLowerCase().includes(req.body.searchName.toLowerCase())){
        productData[i].content.splice(j, 1); productData[i].price.splice(j, 1)
        productData[i].topping.splice(j, 1); productData[i].img.splice(j, 1)
        j--
      }
    }
    if(productData[i].content.length==0){
      productData.splice(i,1)
      i--
    }
  }
  return productData
}

const searchProductByPrice = async(productData, req, res, next) =>{
  for (let i=0; i<productData.length; i++){
    for(let j=0; j<productData[i].content.length; j++){
      if(productData[i].price[j].slice(0,-1)*1000 < req.body.minPrice.slice(0,-1)*1000 ||
         productData[i].price[j].slice(0,-1)*1000 > req.body.maxPrice.slice(0,-1)*1000){
        productData[i].content.splice(j, 1); productData[i].price.splice(j, 1)
        productData[i].topping.splice(j, 1); productData[i].img.splice(j, 1)
        j--
      }
    }
    if(productData[i].content.length==0){
      productData.splice(i,1)
      i--
    }
  }
  return productData
} 

exports.searchProduct = catchAsync(async (req, res, next) => {
  let productData = await Product.find({});
  productData = await searchProductByPrice(productData,req,res,next)
  productData = await searchProductByName(productData, req,res,next)
  res.status(200).json({
    status: 'success',
    data: { productData }
  });
});
  
exports.filterProduct = catchAsync ( async (req,res,next)=>{  
  let productData = await Product.find({});
  if(req.body.searchName !== '') productData = await searchProductByName(productData,req,res,next)
  productData = await searchProductByPrice(productData,req,res,next)
  res.status(200).json({
    status: 'success',
    data: { productData }
  });
})