const mongoose = require('mongoose');
const validator = require('validator'); 

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
    email:{
        type:String,
        required:true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not valid email")
            }
        }
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