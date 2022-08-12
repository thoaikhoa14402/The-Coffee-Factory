const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../../models/productModel');
const User = require('../../models/userModel');
const Cart = require('../../models/cartModel');
const Order = require('../../models/orderModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

let products = JSON.parse(fs.readFileSync(`${__dirname}/products.json`, 'utf-8'));
const extFile = {
  apng: 'image/apng',
  avif: 'image/avif',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  jfif: 'image/jpeg',
  pjpeg: 'image/jpeg',
  pjg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  webp: 'image/webp',
  bmp: 'image/bmp',
  ico: 'image/x-icon',
  cur: 'image/x-icon',
  tiff: 'image/tiff',
  tif: 'image/tiff',
};

products = products.map((el) => {
  el.img = el.img.map((pathImg) => {
    return `data:${
      extFile[pathImg.substring(pathImg.lastIndexOf('.')).split('.')[1].toLowerCase()]
    };base64,${fs.readFileSync(pathImg, 'base64')}`;
  });
  return el;
});

// const DATA INTO DB
const importProducts = async () => {
  try {
    await Product.create(products);
    console.log('Data successfully loaded');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA = DB
const deleteProducts = async () => {
  try {
    await Product.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL USERS DATA = DB
const deleteUsers = async () => {
  try {
    await User.deleteMany();
    console.log('Data of users successfully deleted!');
  } catch (err) {
    console.log(err);
  }
};

// delete shopping carts
const deleteShoppingCarts = async () => {
  try {
    await Cart.deleteMany();
    console.log('Data of shopping cart successfully deleted!');
  } catch (err) {
    console.log(err);
  }
};

// delete payment history
const deleteOrders = async () => {
  try {
    await Order.deleteMany();
    console.log('Data of orders successfully deleted!');
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--importProducts') {
  importProducts();
} else if (process.argv[2] === '--deleteProducts') {
  deleteProducts();
} else if (process.argv[2] === '--deleteUsers') {
  deleteUsers();
} else if (process.argv[2] === '--deleteShoppingCarts') {
  deleteShoppingCarts();
} else if (process.argv[2] === '--deleteOrders') {
  deleteOrders();
}
