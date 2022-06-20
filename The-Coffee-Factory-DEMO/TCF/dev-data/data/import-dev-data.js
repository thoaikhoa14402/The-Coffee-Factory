const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../../models/productModel');
const User = require('../../models/userModel');

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

products = products.map((el) => {
  el.relativeImg = el.relativeImg.map((pathImg) => {
    return fs.readFileSync(pathImg, 'base64');
  });
  return el;
})

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

if (process.argv[2] === '--importProducts') {
  importProducts();
} else if (process.argv[2] === '--deleteProducts') {
  deleteProducts();
}
  else if (process.argv[2] === '--deleteUsers') {
    deleteUsers();
  }

