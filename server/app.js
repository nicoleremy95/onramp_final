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
var db = require('./models');

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
app.get('/test', (req, res) =>{
  res.send("this is a test");
})

//NEWS ROUTES 
  //Get all news in database, PASSED POSTMAN TEST: YES
  app.get('/news', (req, res) =>{
    db.News.find({})
    .then((allNews) =>{
        res.json(allNews);
    })
    .catch((err) =>{
        console.log('err', err);
        res.status(500).end();
    });
  })

  //Add news to the database, PASSED POSTMAN TEST: YES
  app.post('/news/new', (req, res) =>{
    db.News.create({
        newsData: req.body.newsData,
        newsCreator: req.body.newsCreator
    })
    .then((newNews) =>{
        res.json(newNews);
    })
    .catch((err) =>{
        console.log('err', err);
        res.status(500).end();
    })
  })

  //Update news in the database, PASSED POSTMAN TEST: PENDING
  app.put('/news/update/:id', (req, res) =>{
    db.News.findById({
      _id: req.body.id
    }) 
    .then((news) =>{
      if(!news) {
        res.status(404).send('data not found');
      } else {
      news.newsData = req.body.newsData;
      news.save()
      .then(news =>{
        res.json(news)
      })
      .catch((err) =>{
        console.log('err', err)
        res.status(500).end();
      })
      }
    })
    .catch((err) =>{
      console.log('err', err)
      res.status(500).end();
    })
  })

  //Delete news in database, PASSED POSTMAN TEST: PENDING
  app.delete('/news/delete/:id', (req, res) =>{

  })

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
mongoose.connect('mongodb://127.0.0.1:27017/news', {useNewUrlParser: true}, 
// { useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', function(){
  console.log('MongoDB database connection established success')
})

//Use routes
app.use('/', routes);

//Initialize server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
module.exports = app;
