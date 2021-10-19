const express = require('express');
const { getAllPhones, postNewPhone } = require('./controllers/PhoneController');
const router = require('./routes/phone');


const app = express();
// Disable CORS for localhost:8080 where your front must to run. Not for production.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/phones', router);

app.use('*', (req,res,next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error)
})
app.use((error, req, res, next) => {
  return res.status(error.status || 500).json(error.message || 'Unexpected error')
})



module.exports = app;