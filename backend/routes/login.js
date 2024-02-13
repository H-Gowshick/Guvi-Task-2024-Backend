


const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      if (password !== user.password) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      res.status(200).json({
        message: "Login successful",
        user,
      });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  module.exports = router;