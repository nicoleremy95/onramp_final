var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const User = new Schema (
    {
        username: {
            type: String,
            // required: true,
            // unique: true
        },
        email: {
            type: String,
            // required: true
        },
        password: {
            type: String,
            // required: true
        },
        // name: {
        //     first: {
        //         type: String,
        //         // required: true
        //     },
        //     last: {
        //         type: String,
        //     }
        // },
        // createdNews: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'News'
        // },
        // image: [],   
    }, {timestamps: true}
)

module.exports = mongoose.model('User', User)