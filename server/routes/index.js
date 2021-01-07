var express = require('express');
var router = express.Router();

var newsRoutes = require('./news');

router.use('./api/news', newsRoutes);

module.exports = router;