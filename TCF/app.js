const express = require('express');
//const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const AppError = require('./utilities/appError');
const globalErrorhandler = require('./controllers/errorController');

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

const mime = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript',
};

const dir = path.join(__dirname);

const app = express();

app.use(express.json());

app.use(cors()); // cap phep cho toan bo clients co the truy cap
// mounting routers

app.use('/tcf/v1/users', userRouter); // mounting new router on route (URL)
app.use('/tcf/v1/products', productRouter);

//app.get('/tcf/v1/users', (req,res) -)

// handle if url is not existent
app.all('*', (req, res, next) => {
  // method 1
  // all is all http methods
  // res.status(404).json({
  //   status: 'fail',
  //   message: `Can't find ${req.originalUrl} on this server`,
  // });
  // method 2
  // const err = new Error(`Can't find ${req.originalUrl} on this server`);
  // err.status = 'failed';
  // err.statusCode = 404;
  // next(err);
  // method 3 (refactoring)
  const file = path.join(dir, req.path);
  const type = mime[path.extname(file).slice(1)];
  const s = fs.createReadStream(file);
  //console.log(req.path);
  s.on('open', () => {
    res.set('Content-Type', type);
    s.pipe(res);
  });
  s.on('error', () => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });
});

// error handling middleware
app.use(globalErrorhandler);

// export for server using
module.exports = app;
