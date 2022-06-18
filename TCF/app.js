const express = require('express');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
//const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const AppError = require('./utilities/appError');
const globalErrorhandler = require('./controllers/errorController');

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

// LIMIT REQUESTS FROM THE SAME API
const limiter = rateLimit({
  // limiter is now become a middleware function
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try this again in an hour!',
}); // define how many requests per IP we are going to allow in a certain of time

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

// Cap phep cho toan bo clients co the truy cap
app.use(cors());

// DATA sanitization against NoSQL query injection
app.use(mongoSanitize());

// DATA sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

// BODY PARSER, READING DATA FROM BODY INTO REQ.BODY
app.use(express.json({ limit: '10kb' }));
app.use('/tcf', limiter);

// Mounting routers
app.use('/tcf/v1/users', userRouter); // mounting new router on route (URL)
app.use('/tcf/v1/products', productRouter);

// handle if url is not existent
app.all('*', (req, res, next) => {
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
