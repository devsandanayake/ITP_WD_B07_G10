const mongoose = require('mongoose');

const postRentSchema = new mongoose.Schema({
     
    ProductName:{
        type:String,
        required:true
    },
    SKU:{
        type:String,
        required:true
    },
    Model:{
        type:String,
        required:true
    },
    UPC:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Features:{
        type:String,
        required:true 
    },
    imageRent:{
        type:String,
        required:true 
    }
   

});

module.exports = mongoose.model('postRent',postRentSchema);