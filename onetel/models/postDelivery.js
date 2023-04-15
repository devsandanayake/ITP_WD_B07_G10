const mongoose = require('mongoose');

const postdeliverySchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
        minlength:[5, "minlength is 5"],
        maxlength:[20,"maxlength is 20"]
    },
    Address:{
        type:String,
        required:true
       
    },
    phone:{
        type:Number,
        required:true,
        

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