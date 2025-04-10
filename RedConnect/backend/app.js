const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const connectDB = require('./db/mongoose');
const User = require('./models/userDB');
const router = express.Router();

const statsRoute = require('./routes/stats');


const app = express();

app.use(cors({
  origin: 'https://redconnect-2.onrender.com', // ✅ allow Vercel frontend
  credentials: true, // Optional: if you're using cookies/sessions
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/api", statsRoute);

// ✅ Connect to MongoDB
connectDB();

// ✅ Multer setup for image upload (handles spaces)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const originalName = file.originalname.replace(/\s+/g, '-'); // replace spaces with dashes
    cb(null, `${timestamp}-${originalName}`);
  }
});
const upload = multer({ storage });

// ✅ Signup Route
app.post('/signup', upload.single('image'), async (req, res) => {
  try {
    const {
      name,
      username,
      password,
      age,
      alcohol,
      smoker,
      city,
      address,
      state,
      phone,
      bloodGroup
    } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      name,
      username,
      password: hashedPassword,
      age,
      alcohol,
      smoker,
      city,
      address,
      state,
      phone,
      bloodGroup,
      image: req.file?.filename || ''
    });

    await newUser.save();
    console.log('✅ User created:', newUser.username);
    res.status(201).json({ message: 'Signup successful' });

  } catch (err) {
    console.error('Signup error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    console.log(`✅ ${username} logged in`);
    res.status(200).json({ message: 'Login successful' });

  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ Match Users Route
app.post("/api/users/match", async (req, res) => {
  const { bloodGroup, city, state } = req.body;

  try {
    const matchedUsers = await User.find({
      $expr: {
        $and: [
          { $eq: [{ $toLower: "$bloodGroup" }, bloodGroup.trim().toLowerCase()] },
          { $eq: [{ $toLower: "$city" }, city.trim().toLowerCase()] },
          { $eq: [{ $toLower: "$state" }, state.trim().toLowerCase()] },
        ],
      },
    });

    res.json(matchedUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Server Error" });
  }
});






// ✅ Server Listener
app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
