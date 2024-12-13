const express = require("express");
const app = express();
const path = require('path');

// Global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../dist')));

// API routes
const apiRouter = require("./routes");
app.use("/api", apiRouter);

// Centralized error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Internal server error' });
  });

module.exports = app;