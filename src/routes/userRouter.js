const { Router } = require("express");
const { createUser, getUser } = require("../controllers/userController");
const { requiresAuth } = require("express-openid-connect");

const userRouter = Router();

// GET /api/user
// Get logged in user data
// Private route - logged in users only
userRouter.get("/", requiresAuth(), getUser);

// POST /api/user
// Create a new user
// Private route - admin roles only
userRouter.post("/", requiresAuth(), createUser);

// GET /api/user/:id
// Get user by ID
// Private route - admin roles only
// userRouter.get("/:id", requiresAuth(), getUserById);

// PUT /api/user/:id
// Update user by ID
// Private route - admin roles only or user updating own account
// userRouter.put("/:id", requiresAuth(), updateUser);

// DELETE /api/user/:id
// Delete user by ID
// Private route - admin roles only
// userRouter.delete("/:id", requiresAuth(), deleteUser);

module.exports = { userRouter };
