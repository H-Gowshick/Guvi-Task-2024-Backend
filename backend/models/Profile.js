const mongoose = require("mongoose");

// Define Profile schema
const profileSchema = new mongoose.Schema({
  age: Number,
  gender: String,
  dob: Date,
  mobile: String,
  address: String,
});

// Define Profile model
const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
