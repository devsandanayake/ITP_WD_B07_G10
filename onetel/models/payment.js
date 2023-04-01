const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    NIC:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('payment',paymentSchema);