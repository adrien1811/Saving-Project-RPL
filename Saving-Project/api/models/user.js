const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  description: String,
  date: Date,
});

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String, 
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  expenses: [transactionSchema],
  income: [transactionSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
