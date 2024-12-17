const express = require("express");
const app = express();
const path = require("path");

// Global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
const apiRouter = require("./src/routes/index");
app.use("/api", apiRouter);

// Catch-all for unknown API routes
app.use((_, res) => {
	res.status(404).json({ success: false, message: "API route not found" });
});

// Centralized error handling
app.use((err, _, res) => {
	console.error(err.stack);
	res.status(500).json({ success: false, message: "Internal server error" });
});

module.exports = app;
