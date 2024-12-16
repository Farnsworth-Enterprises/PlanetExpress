const { User, Shipment } = require("./models/index");
const { sequelize } = require("./config/db");

module.exports = {
	db: sequelize,
	User,
	Shipment,
};
