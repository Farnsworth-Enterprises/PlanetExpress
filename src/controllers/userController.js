// Desc: User Controller
const { User } = require("../db/models");

const createUser = async (req, res, next) => {
	try {
		const { sub, email, name } = req.user;
		const [user, created] = await User.findOrCreate({
			where: { email },
			defaults: {
				first_name: name.split(" ")[0],
				last_name: name.split(" ")[1],
				email,
				password: sub, // Store Auth0 user ID as password (or use a different field)
				role: "customer", // Default role
			},
		});
		res.status(201).json({ success: true, data: user });
	} catch (error) {
		next(error);
	}
};

module.exports = {
	createUser,
};
