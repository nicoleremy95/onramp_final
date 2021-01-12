var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const User = new Schema (
    {
        username: {
            type: String,
            required: true,
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
        name: {
            first: {
                type: String,
                // required: true
            },
            last: {
                type: String,
            }
        },
        // createdNews: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'News'
        // },
        // image: [],   
    }, {timestamps: true}
)

//encrypt password before adding to database
User.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return next();
    bcrypt.genSalt(10, function (err, salt) {
      if (err) return next(err);
  
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
});


module.exports = mongoose.model('User', User)