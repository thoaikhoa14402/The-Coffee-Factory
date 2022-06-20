// listening for request
const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
  console.log('Uncaught Rejection. Shutting down...');
  console.log(err.name, err.message);
  process.exit(1); // 0 is success, 1 is uncaught exception
});

dotenv.config({ path: './config.env' });
const app = require('./app');

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful!');
  });
const port = 3000 || process.env.PORT;
const server = app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('Unhandled Rejection. Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1); // 0 is success, 1 is uncaught exception
  });
});
