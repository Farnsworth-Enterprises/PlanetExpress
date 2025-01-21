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

		const { email, name } = req.body;
		const [user, created] = await User.findOrCreate({
			where: { email },
			defaults: {
				first_name: name.split(" ")[0],
				last_name: name.split(" ")[1],
				email,
				role: "customer", // Default role
			},
		});

		if (created) {
			res.status(201).json({ success: true, data: user });
		} else {
			res.status(409).json({
				success: false,
				message: "User already exists",
			});
		}
	} catch (error) {
		next(error);
	}
};

const getUserById = async (req, res, next) => {
	try {
		const user = await User.findByPk(req.params.id);
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User not found",
			});
		}
		res.json({ success: true, data: user });
	} catch (error) {
		next(error);
	}
};

const updateUser = async (req, res, next) => {
	try {
		const user = await User.findByPk(req.params.id);
		if (!user) {
			return res.status(404).json({
				success: false,
				message: "User not found",
			});
		}

		if (req.user.email !== user.email && req.user.role !== "admin") {
			return res.status(401).json({
				success: false,
				message: "User not authorized",
			});
		}

		let filteredBody;

		if (req.user.role === "customer") {
			const { role, ...rest } = req.body;
			filteredBody = rest;
		} else {
			filteredBody = req.body;
		}

		const updatedUser = await user.update(filteredBody);
		res.json({ success: true, data: updatedUser });
	} catch (error) {
		next(error);
	}
};

const deleteUser = 


module.exports = {
	getUser,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
};
