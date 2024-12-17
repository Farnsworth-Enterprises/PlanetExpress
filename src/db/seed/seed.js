const { db } = require("../index");
const { User, Shipment } = require("../models/index");
const { users, shipments } = require("./seedData");

const seed = async () => {
	await db.sync({ force: true }); // recreate db

	await Promise.all([User.bulkCreate(users), Shipment.bulkCreate(shipments)]);
};

seed()
	.then(() => {
		console.log("Seeding success");
	})
	.catch((err) => {
		console.error(err);
	})
	.finally(() => {
		db.close();
	});
