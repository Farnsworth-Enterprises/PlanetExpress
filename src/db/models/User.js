const { sequelize, DataTypes } = require("../config/db");

const User = sequelize.define("User", {
	first_name: DataTypes.STRING,
	last_name: DataTypes.STRING,
	email: DataTypes.STRING,
	sub: DataTypes.STRING,
	address: DataTypes.STRING,
	role: DataTypes.ENUM("customer", "crew", "admin"),
});

module.exports = { User };
