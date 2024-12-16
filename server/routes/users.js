const express = require("express")
const userRouter = express.Router()
const { User } = require("../models/index")

// Define routes
userRouter.get("/", (req, res) => {
    res.send("User route working!");
});

module.exports = userRouter;