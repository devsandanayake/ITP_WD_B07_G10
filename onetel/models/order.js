const mongoose = require('mongoose');

const postorderSchema = new mongoose.Schema({
     
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
    Email:{
        type:String,
        required:true
    },
    Quntity:{
        type:String,
        required:true
    }
    
    
   

});

module.exports = mongoose.model('postOrder',postorderSchema);