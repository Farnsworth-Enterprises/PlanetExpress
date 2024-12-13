const express = require("express");
const router = express.Router();

// different model routers
try {
    router.use("/shipments", require("./shipments"));
    router.use("/users", require("./users"));
} catch (error) {
    console.error("Error setting up routes:", error.message);
}

// Catch-all for unknown API routes
router.use((req, res) => {
    res.status(404).json({ success: false, message: "API route not found" });
});

module.exports = router;