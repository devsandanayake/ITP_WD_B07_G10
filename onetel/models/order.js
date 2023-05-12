const mongoose = require('mongoose');

const postorderSchema = new mongoose.Schema({
     
    Categories:{
        type:String,
        
    },
    Brand:{
        type:String,
        
    },
    Price:{
        type:Number,
        
    },
    Model:{
        type:String,
        
    },
    Quantity:{
        type:String,
         
    }
    
    
   

});

module.exports = mongoose.model('postOrder',postorderSchema);