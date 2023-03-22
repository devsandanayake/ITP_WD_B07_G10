const mongoose = require("mongoose");
const validator = require('validator');

 const AdminSchema = new mongoose.Schema({
    name: {
         type: String,
        },
    
    email:{
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not valid email")
            }
        }
    },
    password: {
           type: String,
           required: true,
           minlength: 6
        },
    date: {
           type: Date,
           default: Date.now
        }
 });
 module.exports  = mongoose.model('admin',AdminSchema)
 