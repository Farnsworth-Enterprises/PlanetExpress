const { User } = require("../db/models");

const findUserRole = (role) => {
	return async (req, res, next) => {
		try {
			if (!req.oidc.user) {
				return res.status(401).json({
					success: false,
					message: "User not authenticated",
				});
			}

			const { email } = req.oidc.user;

			const user = await User.findOne({
				where: { email: email },
			});
			if (role.includes(user.role)) {
				req.user = {
					id: user.id,
					email: user.email,
					role: user.role,
				}
				next();
			} else {
				return res.status(401).json({
					success: false,
					message: "User not authorized",
				});
			}
		} catch (error) {
			next(error);
		}
	};
};

module.exports = { findUserRole };
