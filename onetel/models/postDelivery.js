const mongoose = require('mongoose');
const validator = require('validator');   

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
        maxlength:[10,"maxlength is 10"]
        

    },
    NIC:{
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
    Status:{
        type:String,
        default:"Pending"
                        
    },
    date: {
        type: Date,
        default: Date.now
     }
});

module.exports = mongoose.model('postDelivery',postdeliverySchema);