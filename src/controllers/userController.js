// Desc: User Controller
const { User } = require("../db/models");

const getUser = async (req, res, next) => {
	try {
		if (!req.oidc.user) {
			return res.status(401).json({
				success: false,
				message: "User not authenticated",
			});
		}

		const { sub } = req.oidc.user;
		const user = await User.findOne({
			where: { sub },
			attributes: { exclude: ["sub"] },
		});

		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User not found",
			});
		}

		// Possible refactor to check for role , querying the user from the database

		// else if (user.role !== "admin" || user.sub !== sub) {
		// 	return res.status(403).json({
		// 		success: false,
		// 		message: "User not authorized",
		// 	});
		// }

		res.json({ success: true, data: user });
	} catch (error) {
		next(error);
	}
};

const createUser = async (req, res, next) => {
	try {
		if (!req.oidc.user) {
			return res.status(401).json({
				success: false,
				message: "User not authenticated",
			});
		}

		const { sub, email, name } = req.oidc.user;
		const [user, created] = await User.findOrCreate({
			where: { email },
			defaults: {
				first_name: name.split(" ")[0],
				last_name: name.split(" ")[1],
				email,
				sub, // Store Auth0 user ID
				role: "customer", // Default role
			},
		});
		res.status(201).json({ success: true, data: user });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getUser,
	createUser,
};
