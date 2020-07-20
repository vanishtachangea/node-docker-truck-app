const mongoose = require('mongoose');
const validator = require('validator');

//TruckType Model and Schema
//TruckType : TruckType Description

const TruckType = mongoose.model('TruckType',{
    type:{
        type:String,
        required: true
    },
    description:{
        type:String
    }

})

module.exports =TruckType;