const mongoose = require('mongoose');

const postorderSchema = new mongoose.Schema({
     
    Categories:{
        type:String,
    },
    Brand:{
        type:String,
        
    },
    Price:{
        type:String,
        
    },
    Model:{
        type:String,
    
    },
    Email:{
        type:String,
        
    },
    Quntity:{
        type:String,
        
    }
    
    
   

});

module.exports = mongoose.model('postOrder',postorderSchema);