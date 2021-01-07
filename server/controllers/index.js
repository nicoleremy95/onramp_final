const express = require('express');
const router = express.Router();

const newsRoutes = require('./news');

router.use('/api/news', newsRoutes);

module.exports = router;