const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Items = new Schema ({
    itemName: {
        type: String,
        required: true,
    },
    itemDescrip: {
        type: String,
        required: true,
    },
    itemCategory: {
        type: String,
        required: true,
    },
    itemPrice: {
        type: Number,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});

const newItem = mongoose.model("items", Items); //create database collection
module.exports = newItem;