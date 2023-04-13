const mongoose = require('mongoose');

const postdeliverySchema = new mongoose.Schema({
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
    },
    email:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        default:"Pending"
                        
    }
});

module.exports = mongoose.model('postDelivery',postdeliverySchema);