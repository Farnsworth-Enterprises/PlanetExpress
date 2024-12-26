require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const { checkJwt } = require("./src/middleware/auth");

const { auth, requiresAuth } = require("express-openid-connect");

const config = {
	authRequired: false,
	auth0Logout: true,
	secret: process.env.AUTH0_SECRET,
	baseURL: process.env.BASE_URL,
	clientID: process.env.CLIENT_ID,
	issuerBaseURL: process.env.ISSUER_BASE_URL,
};

app.use(auth(config));
app.get("/", (req, res) => {
	res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

app.get("/profile", requiresAuth(), (req, res) => {
	res.send(JSON.stringify(req.oidc.user));
});

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
