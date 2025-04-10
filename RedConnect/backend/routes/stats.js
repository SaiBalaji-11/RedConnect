const express = require("express");
const router = express.Router();
const User = require("../models/userDB");

// GET total users and total donors
router.get("/stats", async (req, res) => {
    try {
        const totalUsers = await User.countDocuments({});
        const totalDonors = await User.countDocuments({ donations: { $gt: 0 } });
    
        const topDonors = await User.find({ donations: { $gt: 0 } })
          .sort({ donations: -1 })
          .limit(5)
          .select("name bloodGroup city donations");
    
        res.status(200).json({
          totalUsers,
          totalDonors,
          topDonors,
        });
      } catch (err) {
        console.error("Error fetching summary:", err);
        res.status(500).json({ message: "Server error" });
      }
    });

module.exports = router;
