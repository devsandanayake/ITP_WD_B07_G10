const mongoose = require('mongoose');

const postrepairSchema = new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contactNumber:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    Model:{
        type:String,
        required:true 
    }, 
    reason:{
        type:String,
        required:true 
    }
   

});

module.exports = mongoose.model('repairManagement',postrepairSchema);