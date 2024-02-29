const mongoose = require('mongoose');
const regexProvider = require('../../../regex/regex');
const transactionModel = require('../transactions/transaction.model');

const userSchema = new mongoose.Schema({
  
  userName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 15,
    match: regexProvider.nameRegex
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: regexProvider.emailRegex
  },
  password: {
    type: String,
    required: true,
    minlength:8,
  },
  amount: {
    type: Number,
    default: 0  
  },
  history: {
    type: mongoose.Schema.ObjectId,
    ref: 'Transaction'
  }
});

module.exports = mongoose.model('User', userSchema, 'user')