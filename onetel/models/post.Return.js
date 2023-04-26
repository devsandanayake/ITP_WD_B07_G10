const mongoose = require('mongoose');

const postreturnSchema = new mongoose.Schema({
    ItemCode: {
        type: String,
        required: true
    },
    ItemName: {
        type: String,
        required: true
    },
    customerID: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    cusEmail: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Reason: {
        type: String,
        required: true
    }



});

module.exports = mongoose.model('postReturn', postreturnSchema);