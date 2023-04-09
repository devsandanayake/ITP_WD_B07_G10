const mongoose = require('mongoose');

const postproductSchema = new mongoose.Schema({
     
    Categories:{
        type:String,
        required:true
    },
    Brand:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    Model:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true 
    },
    image:{
        type:String,
        required:true 
    }
   

});

module.exports = mongoose.model('postProduct',postproductSchema);