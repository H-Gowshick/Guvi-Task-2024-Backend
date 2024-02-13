// profile.js

const express = require("express");
const router = express.Router();
const Profile = require("../models/Profile");





router.post("/profilePost", async (req, res) => {
  const {email,formData}=req.body;
  const { age, gender, dob, mobile, address } = formData;


  try {
    let profile = await Profile.findOne({email:email});
    if (profile) {
      profile.age = age;
      profile.gender = gender;
      profile.dob = dob;
      profile.mobile = mobile;
      profile.address = address;
      await profile.save();
      res.status(200).json({ message: "Profile updated successfully" });
    } else {
      profile = new Profile({
        age,
        gender,
        dob,
        mobile,
        address,
      });
      await profile.save();
      res.status(201).json({ message: "Profile saved successfully" });
    }
  } catch (err) {
    console.error("Error saving profile:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.put("/profileUpdate", async (req, res) => {
  const {email,formData}=req.body;
  const { age, gender, dob, mobile, address } = formData;


  try {
    let profile = await Profile.findOne({email:email});
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    profile.age = age;
    profile.gender = gender;
    profile.dob = dob;
    profile.mobile = mobile;
    profile.address = address;

    await profile.save();

    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/profileHome", async (req, res) => {
  try {
    const {email}=req.body;
    const profile = await Profile.findOne({email:email});
    
   
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching profile data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
