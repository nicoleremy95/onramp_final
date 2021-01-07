const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const News = new Schema({
    newsData : {
        type: String
    },
    newsCreator : {
        type: String
    }

}, {timestamps: true});

module.exports = mongoose.model('News', News);

