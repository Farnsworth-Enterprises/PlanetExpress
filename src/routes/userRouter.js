const { Router } = require("express");

const {
	createUser,
	getUsers,
	getUserById,
	updateUser,
	deleteUser,
} = require("../controllers/userController");

const { requiresAuth } = require("express-openid-connect");
const { findUserRole } = require("../middleware/getUserRole");

const userRouter = Router();

// GET /api/users
// Get logged in user data
// Private route - logged in users only
userRouter.get("/", requiresAuth(), getUsers);

// POST /api/users
// Create a new user
// Private route - admin roles only
userRouter.post("/", [requiresAuth(), findUserRole(["admin"])], createUser);

// GET /api/users/:id
// Get user by ID
// Private route - admin roles only
userRouter.get("/:id", [requiresAuth(), findUserRole(["admin"])], getUserById);

// PUT /api/users/:id
// Update user by ID
// Private route - admin roles only or user updating own account
userRouter.put(
	"/:id",
	[requiresAuth(), findUserRole(["admin", "customer"])],
	updateUser
);

// DELETE /api/users/:id
// Delete user by ID
// Private route - admin roles only
userRouter.delete(
	"/:id",
	[requiresAuth(), findUserRole(["admin"])],
	deleteUser
);

module.exports = { userRouter };
