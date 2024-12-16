const { Sequelize } = require("sequelize")
const { sequelize } = require("../db")
const { Shipment } = require("./Shipment")
const { User } = require("./User")

module.exports = {
	db: sequelize,
	Shipment,
	User,
}