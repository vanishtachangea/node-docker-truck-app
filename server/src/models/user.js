const mongoose = require('mongoose');
const validator = require('validator');

//User schema
const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate(value) {
            if (!validator(isEmail(value))) {
                throw new Error("Email invalid");
            }
        }
    },
    Company: {
        type: String
    }

}, { timestamps: true })
const User = mongoose.model('User', userSchema);

module.exports = User;