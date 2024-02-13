
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
