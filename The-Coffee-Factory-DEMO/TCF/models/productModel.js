const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: [String, { required: true }],
    price: [String, { required: true }],
    topping: [Array, { required: true }],
    relativeImg: [String, { required: true }],
    hiddenTitle: { type: String },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Product = mongoose.model('Product', productSchema);

//const { networkInterfaces } = require('os');

//const nets = networkInterfaces();
//const results = Object.create(null); // Or just '{}', an empty object

// for (const name of Object.keys(nets)) {
//   for (const net of nets[name]) {
//     // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
//     // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
//     const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4;
//     if (net.family === familyV4Value && !net.internal) {
//       if (!results[name]) {
//         results[name] = [];
//       }
//       results[name].push(net.address);
//     }
//   }
// }

// results["en0"][0]
// console.log(results);
productSchema.virtual('img').get(function () {
  const absoluteImg = [];
  this.relativeImg.forEach((el) => {
    //absoluteImg.push(`http://${results['Wi-Fi'][0] || results['en0'][0]}:${process.env.PORT}/${el}`);
    absoluteImg.push(`data:image/jpg;base64,${el}`);
    //console.log(`http://${results['Wi-Fi'][0] || results['en0'][0]}:${process.env.PORT}/${el}`);
  });
  return absoluteImg;
});

module.exports = Product;
