const { Router } = require("express");

const {
	createUser,
	getUser,
	getUserById,
	updateUser,
} = require("../controllers/userController");

const { requiresAuth } = require("express-openid-connect");
const { findUserRole } = require("../middleware/getUserRole");

const userRouter = Router();

// GET /api/user
// Get logged in user data
// Private route - logged in users only
userRouter.get("/", requiresAuth(), getUser);

// POST /api/user
// Create a new user
// Private route - admin roles only
userRouter.post("/", [requiresAuth(), findUserRole(["admin"])], createUser);

// GET /api/user/:id
// Get user by ID
// Private route - admin roles only
userRouter.get("/:id", [requiresAuth(), findUserRole(["admin"])], getUserById);

// PUT /api/user/:id
// Update user by ID
// Private route - admin roles only or user updating own account
userRouter.put(
	"/:id",
	[requiresAuth(), findUserRole(["admin", "customer"])],
	updateUser
);

// DELETE /api/user/:id
// Delete user by ID
// Private route - admin roles only
// userRouter.delete("/:id", requiresAuth(), deleteUser);

module.exports = { userRouter };
