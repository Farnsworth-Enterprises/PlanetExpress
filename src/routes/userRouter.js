const { Router } = require("express");
const { createUser, getUser } = require("../controllers/userController");
const { requiresAuth } = require("express-openid-connect");

const userRouter = Router();

// Define routes
userRouter.get("/", requiresAuth(), getUser);

userRouter.post("/", requiresAuth(), createUser);

module.exports = { userRouter };
