// backend/config/mongoose.js
const mongoose = require('mongoose');
require('dotenv').config(); // Make sure environment variables are loaded

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected successfully`);
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
