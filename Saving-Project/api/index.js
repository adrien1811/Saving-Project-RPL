const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require ("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
const User = require("./models/user");
const Forum = require("./models/forum");

mongoose.connect("mongodb+srv://adrienardra1811:AUBE1010@cluster0.mf35fci.mongodb.net/",{
    useNEWUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.log("Error connecting to MongoDB", err);
});

app.listen(port,() => {
    console.log("Server running on port 8000");
});

//register endpoint
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{12}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

app.post('/register', async (req, res) => {
  try {
    const { fullName, emailAddress, phoneNumber, password, age } = req.body;

    if (!fullName || !emailAddress || !phoneNumber || !password || !age) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate email using regex
    if (!emailRegex.test(emailAddress)) {
      return res.status(400).json({ message: 'Invalid email address' });
    }

    // Validate phone number using regex
    if (!phoneRegex.test(phoneNumber)) {
      return res.status(400).json({ message: 'Invalid phone number' });
    }

    // Validate password using regex
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message: 'Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, and one number',
      });
    }

    const existingEmailUser = await User.findOne({ emailAddress: emailAddress });

    if (existingEmailUser) {
      return res.status(409).json({ message: 'Email address is already registered' });
    }

    const existingPhoneUser = await User.findOne({ phoneNumber: phoneNumber });

    if (existingPhoneUser) {
      return res.status(409).json({ message: 'Phone number is already registered' });
    }

    const newUser = new User({
      fullName,
      emailAddress,
      phoneNumber,
      password,
      age,
    });

    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});

//login endpoint
  app.post('/login', async (req, res) => {
    try {
      const { emailAddress, password } = req.body;
  
      if (!emailAddress || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
      }
  
      const user = await User.findOne({ emailAddress });
  
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ message: 'Incorrect password' });
      }

      const userData = {
        _id: user._id,
        fullName: user.fullName,
        emailAddress: user.emailAddress,
        phoneNumber: user.phoneNumber,
        age: user.age,
      };

      return res.status(200).json({ user: userData, message: 'Login successful' });
    } catch (error) {
      return res.status(500).json({ message: 'Login failed', error: error.message });
    }
  });

  //update the user info
  app.put('/updateUser/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      const { fullName, emailAddress, phoneNumber, password, age } = req.body;
  
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (fullName) {
        user.fullName = fullName;
      }
      if (emailAddress) {
        user.emailAddress = emailAddress;
      }
      if (phoneNumber) {
        user.phoneNumber = phoneNumber;
      }
      if (password) {
        user.password = password;
      }
      if (age) {
        user.age = age;
      }
  
      await user.save();
  
      return res.status(200).json({ message: 'User information updated successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to update user information', error: error.message });
    }
  });
  

  //forum endpoint
  app.post('/forums', async (req, res) => {
    try {
      const { forumTitle, forumContent } = req.body;
      const datePosted = new Date();
  
      const newForum = new Forum({
        forumTitle,
        forumContent,
        datePosted,
      });
  
      await newForum.save();
      
      res.json({ message: 'Forum created successfully', forum: newForum });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while creating the forum' });
    }
  });
  
  // Add an income transaction for a user
  app.post('/addIncome/:userId', async (req, res) => {
    try {
      const { amount, category, description } = req.body;
      const userId = req.params.userId;
  
      if (!amount || !category || !description) {
        return res.status(400).json({ message: 'Amount and category are required fields' });
      }
  
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const currentDate = new Date();
      user.income.push({
        amount,
        category,
        description,
        date: currentDate,
      });
  
      await user.save();
  
      return res.status(201).json({ message: 'Income transaction added successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to add income transaction', error: error.message });
    }
  });
  
  // Add an expense transaction for a user
  app.post('/addExpense/:userId', async (req, res) => {
    try {
      const { amount, category, description } = req.body;
      const userId = req.params.userId;
  
      if (!amount || !category || !description) {
        return res.status(400).json({ message: 'Amount and category are required fields' });
      }
  
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const currentDate = new Date();
      user.expenses.push({
        amount,
        category,
        description,
        date: currentDate,
      });
  
      await user.save();
  
      return res.status(201).json({ message: 'Expense transaction added successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to add expense transaction', error: error.message });
    }
  });

// Get income transactions for a user
app.get('/income/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const income = user.income;
    return res.status(200).json(income);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to retrieve income data', error: error.message });
  }
});

// Get expense transactions for a user
app.get('/expenses/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const expenses = user.expenses;
    return res.status(200).json(expenses);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to retrieve expense data', error: error.message });
  }
});

//display total income
app.get('/totalIncome/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const totalIncome = user.income.reduce((total, transaction) => total + transaction.amount, 0);

    return res.status(200).json({ totalIncome });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to retrieve total income', error: error.message });
  }
});

//display total expense
app.get('/totalExpenses/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const totalExpenses = user.expenses.reduce((total, transaction) => total + transaction.amount, 0);

    return res.status(200).json({ totalExpenses });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to retrieve total expenses', error: error.message });
  }
});