const { Router } = require("express");

const userRouter = Router();

// Define routes
userRouter.get("/", (_, res) => {
	res.send({ message: "User route working!" });
});

module.exports = { userRouter };
