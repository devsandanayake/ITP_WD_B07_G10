const express = require('express');
const router = express.Router();
const Payment = require('../models/payment');

// POST /payment/save
router.post('payments/save', (req, res) => {
  const { CardNumber, CardHolderName, ExpiryDate, CVV } = req.body;

  const payment = new Payment({
    CardNumber,
    CardHolderName,
    ExpiryDate,
    CVV
  });

  payment.save((err, savedPayment) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Failed to save payment details' });
    } else {
      res.status(200).json({ success: true, message: 'Payment details saved successfully' });
    }
  });
});

module.exports = router;
