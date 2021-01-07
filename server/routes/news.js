var express = require('express');
var router = express.Router();
var db = require('../models');

//TEST
router.get('/test', (req, res) =>{
    res.send("this is a test");
})

//Get all news in database
router.get('/', (req, res) =>{
    db.News.find({})
    .then((allNews) =>{
        res.json(allNews);
    })
    .catch((err) =>{
        console.log('err', err);
        res.status(500).end();
    });
})

//Add news to the database
router.post('/new', (req, res) =>{
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

//Update news in the database
router.put('/update', (req, res) =>{
    
})

//Delete news in database
router.delete('/delete', (req, res) =>{

})
module.exports = router;