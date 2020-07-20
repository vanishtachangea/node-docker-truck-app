const mongoose = require('mongoose');
const validator = require('validator');

//Carrier Model and Schema
//Carrier : CarrierId CarrierName CarrierAddress

const Carrier = mongoose.model('Carrier',{
    Name:{
        type:String,
        required: true
    },
    Address:{
        type:String
    }
})

module.exports = Carrier;