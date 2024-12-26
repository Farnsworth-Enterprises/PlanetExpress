const { Router } = require("express");
const { createUser } = require("../controllers/userController");
const { checkJwt } = require("../middleware/auth");

const userRouter = Router();

// Define routes
userRouter.get("/", (_, res) => {
	res.send({ message: "User route working!" });
});

userRouter.post("/", checkJwt, createUser);

module.exports = { userRouter };
