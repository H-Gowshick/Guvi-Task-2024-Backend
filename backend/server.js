// // server.js

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const User = require("./models/User");
// const Profile = require("./models/Profile");
// const cors = require("cors"); // Import cors package

// const app = express();
// const PORT = process.env.PORT || 5000;

// // kWBnPtkXzZYY74rO
// // Middleware
// app.use(bodyParser.json());
// app.use(cors());
// // Connect to MongoDB
// mongoose
//   .connect(
//     "mongodb+srv://gowshickh:kWBnPtkXzZYY74rO@profile-cluster.ax8qkjz.mongodb.net/?retryWrites=true&w=majority"
//   )
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// // Routes
// app.post("/register", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Create new user
//     const newUser = new User({ email, password });
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (err) {
//     console.error("Error registering user:", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find user by email
//     const user = await User.findOne({ email });

//     // If user not found
//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // Check if password matches
//     if (password !== user.password) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     // If credentials are valid, login successful
//     res.status(200).json({
//       message: "Login successful, you will be redirected to your profile page.",
//       user,
//     });
//   } catch (error) {
//     console.error("Error logging in:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // Server-side route handling
// // Server-side route handling
// app.post("/profiles", async (req, res) => {
//   const { age, gender, dob, mobile, address } = req.body;

//   try {
//     // Check if a profile already exists
//     let profile = await Profile.findOne();
//     if (profile) {
//       // If a profile exists, update it
//       profile.age = age;
//       profile.gender = gender;
//       profile.dob = dob;
//       profile.mobile = mobile;
//       profile.address = address;
//       await profile.save();
//       res.status(200).json({ message: "Profile updated successfully" });
//     } else {
//       // If no profile exists, create a new one
//       profile = new Profile({
//         age,
//         gender,
//         dob,
//         mobile,
//         address,
//       });
//       await profile.save();
//       res.status(201).json({ message: "Profile saved successfully" });
//     }
//   } catch (err) {
//     console.error("Error saving profile:", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // Handle PUT request to update profile data
// app.put("/profiles", async (req, res) => {
//   const { age, gender, dob, mobile, address } = req.body;

//   try {
//     // Find the existing profile
//     let profile = await Profile.findOne();
//     if (!profile) {
//       return res.status(404).json({ message: "Profile not found" });
//     }

//     // Update the profile data
//     profile.age = age;
//     profile.gender = gender;
//     profile.dob = dob;
//     profile.mobile = mobile;
//     profile.address = address;

//     // Save the updated profile data
//     await profile.save();

//     res.status(200).json({ message: "Profile updated successfully" });
//   } catch (error) {
//     console.error("Error updating profile:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });
// app.get("/profiles", async (req, res) => {
//   try {
//     // Find the profile data from the database
//     const profile = await Profile.findOne();
//     if (!profile) {
//       return res.status(404).json({ message: "Profile not found" });
//     }
//     // Return the profile data
//     res.status(200).json(profile);
//   } catch (error) {
//     console.error("Error fetching profile data:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const signupRoutes = require("./routes/signup");
const loginRoutes = require("./routes/login");
const profileRoutes = require("./routes/profile");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://gowshickh:kWBnPtkXzZYY74rO@profile-cluster.ax8qkjz.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("", signupRoutes);
app.use("", loginRoutes);
app.use("/profiles", profileRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
