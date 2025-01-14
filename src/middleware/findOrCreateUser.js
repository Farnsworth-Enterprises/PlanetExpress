// src/middleware/findOrCreateUser.js
const { User } = require("../db/models");

const findOrCreateUser = async (req, res, next) => {
	try {
		if (!req.oidc.user) {
			return res.status(401).json({
				success: false,
				message: "User not authenticated",
			});
		}

		const { sub, email, name } = req.oidc.user;
		await User.findOrCreate({
			where: { email },
			defaults: {
				first_name: name.split(" ")[0],
				last_name: name.split(" ")[1],
				email,
				sub, // Store Auth0 user ID
				role: "customer", // Default role
			},
		});
		next();
	} catch (error) {
		next(error);
	}
};

module.exports = { findOrCreateUser };
