const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

router.post('/Complaint', async (req, res) => {
    try {
      const { name, email, details } = req.body;
      const newComplaint = new Complaint({ name, email, details });
      await newComplaint.save();
      res.status(201).send('Complaint submitted successfully!');
    } catch (error) {
      res.status(500).send('Error submitting complaint');
    }
  });
  
module.exports = router;