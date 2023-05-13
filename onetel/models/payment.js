const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  CardNumber: {
    type: String,
    required: true
  },
  CardHolderName: {
    type: String,
    required: true
  },
  ExpiryDate: {
    type: String,
    required: true
  },
  CVV: {
    type: String,
    required: true
  }
});

module.exports  = mongoose.model('Payment', paymentSchema);

 
