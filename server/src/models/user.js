const mongoose = require('mongoose');
const validator = require('validator');

//User schema
const User = mongoose.model('User',{
    firstName:{
        type:String,
        required: true
    },
    LastName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        validate(value){
            if(!validator(isEmail(value))){
                throw new Error("Email invalid");
            }            
        }
    },
    Company:{
        type:String,
        required: true        
    }
})

module.exports = User;