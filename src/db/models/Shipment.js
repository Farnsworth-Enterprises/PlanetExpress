const { sequelize, DataTypes } = require("../config/db");

const Shipment = sequelize.define(
	"Shipment",
	{
		customer_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		tracking_number: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		sender_details: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		receiver_details: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		origin: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		destination: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		instructions: {
			type: DataTypes.STRING,
		},
		weight: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		status: {
			type: DataTypes.ENUM(
				"pending",
				"in_transit",
				"delivered",
				"failed"
			),
			allowNull: false,
		},
	}
	// Attempt to set the initial autoincrement value to 2_200_000, but it doesn't work
	// {
	// 	initialAutoIncrement: 22_000_000,
	// }
);

module.exports = { Shipment };
