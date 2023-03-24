const express = require('express');
const cookieParser = require('cookie-parser');

app = express()

// // using cookies in app
// const cookieParser = require("cookie-parser");
// app.use(cookieParser);

// connection to database
const connectDatabase = require('./config/database');
connectDatabase();

// all the packages used for this app
app.use(express.json());
app.use(cookieParser());

// all the routes are configured and imported here
const userRoute = require('./routes/userRoute');
app.use('/user', userRoute);
const recipeRoute = require('./routes/recipeRoute');
app.use('/recipe', recipeRoute);


// handling errors
const errorMiddleware = require('./middleware/error');
app.use(errorMiddleware);

// using cors
// var cors = require('cors');
// var allowedOrigins = ['http://localhost:3000',
//                       'http://127.0.0.1:3000',
//                       'http://yourapp.com'];
// app.use(cors({
//   origin: function(origin, callback){
//     // allow requests with no origin 
//     // (like mobile apps or curl requests)
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

module.exports = app;