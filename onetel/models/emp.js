const mongoose = require("mongoose");
const validator = require('validator');

 const EmpSchema = new mongoose.Schema({
    CusImg:{
         type:String,
    },
    first_name: {
         type: String,
        },
    last_name:{
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
    Address: {
           type: String,
           required: true,
        },
     NIC: {
            type: String,
            required: true,
         },
    Phone: {
            type: Number,
            required: true,
         },


     date: {
            type: Date,
            default: Date.now
         }
 });
 module.exports  = mongoose.model('Employeer',EmpSchema)
 