"use strict";
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const catRoutes = require("./routes/catRoutes");
app.use("/api/cats", catRoutes);

// Root test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Cat Facts API 🚀" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
