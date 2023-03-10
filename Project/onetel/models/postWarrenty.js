const mongoose = require('mongoose');

const postwarrentySchema = new mongoose.Schema({
    ItemCode:{
        type:String,
        required:true
    },
    ItemName:{
        type:String,
        required:true
    },
    customerID:{
        type:String,
        required:true
    },
    customerName:{
        type:String,
        required:true
    },
    imageWarrenty:{
        data:Buffer,
        contentType:String
    },
    Reason:{
        type:String,
        required:true
    }
    
   

});

module.exports = mongoose.model('postWarrenty',postwarrentySchema);