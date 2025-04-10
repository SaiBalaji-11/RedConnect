// backend/config/mongoose.js
const mongoose = require('mongoose');
const MONGO_URI="mongodb+srv://SaiBalaji:SaiBalajiqwerty11@cluster0.d7rbrg0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/bloodDonation"
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
