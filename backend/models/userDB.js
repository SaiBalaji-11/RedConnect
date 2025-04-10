const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Full name is required'], trim: true },
  username: { type: String, required: true, unique: true, trim: true, minlength: 4 },
  password: { type: String, required: true, minlength: 6 },
  age: { type: Number, required: true, min: 18, max: 65 },
  bloodGroup: { type: String, required: true, enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'] },
  alcohol: { type: String, enum: ['yes', 'no'], required: true },
  smoker: { type: String, enum: ['yes', 'no'], required: true },
  city: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  phone: { type: String, required: true, match: [/^[0-9]{10}$/, 'Phone number must be 10 digits'], unique: true },
  image: { type: String, default: '' },
  donations: { type: Number, default: 0 }, // 👉 Add this line
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
