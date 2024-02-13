const mongoose = require("mongoose");

// Define Profile schema
const profileSchema = new mongoose.Schema({
  email: { type: String, default: "default@example.com" },
  age: { type: Number, default: 0}, // Default age to 18
  gender: { type: String, default: "Unknown" },
  dob: { type: Date, default: Date.now }, // Default date of birth to current date
  mobile: { type: String, default: "N/A" },
  address: { type: String, default: "N/A" },
});

// Define Profile model
const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
