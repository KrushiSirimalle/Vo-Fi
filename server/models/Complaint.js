// complaint.js
const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  name: String,
  email: String,
  details: String,
  
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;
