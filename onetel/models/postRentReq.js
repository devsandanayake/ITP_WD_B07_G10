const mongoose = require('mongoose');

const postRentReqSchema = new mongoose.Schema({
    ItemCode: {
        type: String,
        required: true
    },
    ItemName:{
        type: String,
        required: true
    },
    customerID: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerNIC: {
        type: String,
        
    },
    cusEmail:{
        type:String,
        required:true
    },
    
    Phone: {
        type: String,
        required: true
    },

    StartDate:{
        type: Date,
        required:true
    },

    EndDate:{
        type: Date,
        required:true
    },

    ReqStatus:{
        type: String,
        default:"pending"

    },

    NIC:{
        type: String
    }




});

module.exports = mongoose.model('postRentReq', postRentReqSchema);