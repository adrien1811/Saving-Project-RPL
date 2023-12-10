const mongoose = require('mongoose');

// Define allowed categories for expenses and income
const expenseCategories = ['essential', 'transportation', 'entertainment', 'savings'];
const incomeCategories = ['salary', 'other income'];

// Define default amounts for each category
const defaultAmounts = {
  essential: 0,
  transportation: 0,
  entertainment: 0,
  savings: 0,
  salary: 0,
  'other income': 0,
};

// Schema for transactions
const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    default: function () {
      // Set a default amount based on the category
      if (defaultAmounts.hasOwnProperty(this.category)) {
        return defaultAmounts[this.category];
      }
      return 0; // Default amount if category not found
    },
  },
  category: {
    type: String,
    enum: [...expenseCategories, ...incomeCategories], // Using enum to specify allowed values
  },
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
  expenses: [transactionSchema], // Using the transactionSchema for expenses
  income: [transactionSchema], // Using the transactionSchema for income
});

const User = mongoose.model('User', userSchema);

module.exports = User;
