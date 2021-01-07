var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

//Middleware similar to cors
var logger = require('morgan');

//Express with port 
var app = express();
const port = 8080;

//Models
var models = require('./models');

//API Routes 
var routes = require('./routes');

//Define middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'html');

//TESTER ROUTES 
app.get('/api', (req, res) => {
  res.send(`${new Date()}`);
});
app.get('/api/users', (req, res) => {
  res.send(['Aang', 'Katara', 'Momo', 'Sokka', 'Appa']);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

//Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/news', {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', function(){
  console.log('MongoDB database connection established success')
})

app.use('/', routes);
//
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
module.exports = app;
