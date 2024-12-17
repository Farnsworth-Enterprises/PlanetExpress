const express = require("express");
const { shipmentRouter } = require("./shipmentRouter");
const { userRouter } = require("./userRouter");

const router = express.Router();

// Import and set up routes
try {
	router.use("/shipments", shipmentRouter);
	router.use("/users", userRouter);
} catch (error) {
	console.error("Error setting up routes:", error.message);
}

// Catch-all for unknown API routes
router.use((_, res) => {
	res.status(404).json({ success: false, message: "API route not found" });
});

module.exports = router;
