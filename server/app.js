const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require("cors");

//sesions 
const session = require("express-session");

//password encryption
const bcrypt = require("bcrypt");

//Middleware similar to cors
var logger = require('morgan');

//Express with port 
var app = express();
const port = 8080;

//Models
//UNCOMMENT FOR PROPER FILE STRUCTURE
// var models = require('./models');
// TEMPORARY
var db = require('./models');

//API Routes 
var allRoutes = require('./controllers');

//Define middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'html');

// CORS
// Uncomment for development
app.use(
  cors({
    origin: "http://localhost:3000",
    // origin: "https://travelplanit.herokuapp.com",
    credentials: false,
  })
);

//SESSION
// for heroku deploy uncomment proxy, samesite and secure
app.use(
  session({
    secret: "sup app",
    resave: false,
    saveUninitialized: true,
    // proxy: true,
    cookie: {
      maxAge: 2 * 60 * 60 * 1000,
      // sameSite: "none",
      // secure: true,
    },
  })
);

//NEWS ROUTES ** DELETE WHEN FILE STRUCTURE WORKS  
  //Get all news in database, PASSED POSTMAN TEST: PASSED
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

  //Add news to the database, PASSED POSTMAN TEST: PASSED
  app.post('/news', (req, res) =>{
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

  //Add comment to news, PASSWED POSTMAN TEST: PASSED
  app.post('/comment/:newsId',(req, res) =>{
    db.News.findOne({
      _id: req.params.newsId
    })
    .then(news =>{
      news.comments.push({
        message: req.body.message
      })
      news.save();
      res.json(news)
    })
    .catch((err) =>{
      console.log('err', err)
      res.status(500).end();
    })
  })

  //Add reaction to news, PASSED POSTMAN TEST: PASSED 
  app.post('/reaction/:newsId', (req, res) =>{
    db.News.findOne({
      _id: req.params.newsId
    })
    .then(news =>{
      news.reactions.push({
        reaction: req.body.reaction
      })
      news.save();
      res.json(news)
    })
    .catch((err) =>{
      console.log('err', err)
      res.status(500).end();
    })
  })

  //Update news in the database, PASSED POSTMAN TEST: PASSED
  app.put('/news/:newsId', (req, res) =>{
    db.News.findOne({
      _id: req.params.newsId
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

  //Delete news in database, PASSED POSTMAN TEST: PASSED
  app.delete('/news/:newsId', (req, res) =>{
    db.News.findOne({
      _id: req.params.newsId
    })
    .then((news) =>{
      if(!news) {
        res.status(404).send('data not found');
      } else {
        news.deleteOne()
        .then(news =>{
          res.json(news)
        })
        .catch((err) =>{
          console.log('err', err)
          res.status(500).end();
        })
      }
    })
  })

  //AUTH ROUTES ** DELETE WHEN FILE STRUCTURE WORKS 
  //Get all users, PASSED POSTMAN TEST: PENDING 
  app.get("/users", (req, res) => {
    db.User.find({})
      .then((allUsers) => {
        res.json(allUsers);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).end();
      });
  });

  //Sign up, PASSED POSTMAN TEST: PASSED
  app.post('/signup', (req, res) =>{
    console.log('req', req);
    // const {username, email, password, name} = req.body;
    db.User.create(
        {
            username:req.body.username,
            email: req.body.email,
            password:req.body.password,
            name: {
                first: req.body.name ? req.body.name.first : '',
                last : req.body.name ? req.body.name.last : ''
            }
        })
        .then(user=>{
          res.json(user)
        })
        .catch((err) =>{
          console.log('err', err)
          res.status(500).end();
        })
    
  })

  //TODO: 
  //Signout, PASSED POSTMAN TEST: PENDING 
  app.post("/login", (req, res) => {
    console.log("here is the password", req.body.password)
    db.User.findOne({
      username: req.body.username,
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send("no such user");
      } else {
        console.log('console user', user);
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // console.log('console res.session', res.session);
          console.log('console req.session', req.session);
          // res.session.user = {
          //   id: user._id,
          //   username: user.username,
          //   email: user.email
          // };
          // res.send(req.session);
        } else {
          res.status(401).send("wrong password");
        }
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end();
    });
  });
  
  //TODO: 
  //Log out, PASSED POSTMAN TEST: PENDING 
  app.get('/logout', (req,res) =>{
    res.session.destroy();
    res.send("You have been logged out");
  })

  //TODO: 
  //read session, PASSED POSTMAN TEST: PENDING 
  app.get('/readsession', (req,res) =>{
    res.json(req.session)
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

//Connect to MongoDB local host
mongoose.connect('mongodb://127.0.0.1:27017/news', 
  { useNewUrlParser: true, 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
const connection = mongoose.connection;
connection.once('open', function(){
  console.log('MongoDB database connection established success')
})



//Use routes
app.use('/', allRoutes);

//Initialize server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
module.exports = app;
