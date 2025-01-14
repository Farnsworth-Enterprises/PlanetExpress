// Desc: Shipment Controller
const { Shipment } = require("../db/models");

// GET All Shipments
const getAllShipments = async (_, res, next) => {
	try {
		const shipments = await Shipment.findAll();
		res.status(200).json({ success: true, data: shipments });
	} catch (error) {
		next(error);
	}
};

// GET One Shipment
const getOneShipment = async (req, res, next) => {
	try {
		const oneShipment = await Shipment.findByPk(req.params.id);
		if (!oneShipment)
			return res
				.status(404)
				.json({ success: false, message: "Shipment not found" });
		res.status(200).json({ success: true, data: oneShipment });
	} catch (error) {
		console.error(error);
		next(error);
	}
};

// POST a Shipment
const postShipment = async (req, res, next) => {
	try {
		const shipment = await Shipment.create(req.body);
		return res.status(201).json(shipment);
	} catch (error) {
		res.status(400).json({ error: error.message });
		next(error);
	}
};

// PUT (Update) a Shipment
const updateShipment = async (req, res, next) => {
	try {
		const shipmentId = req.params.id;
		const findShipment = await Shipment.findByPk(shipmentId);
		if (!findShipment) {
			return res
				.status(404)
				.json({ success: false, message: "Shipment not found" });
		}
		const updatedShipment = await findShipment.update(req.body);
		return res.status(200).json({ success: true, data: updatedShipment });
	} catch (error) {
		console.error(error);
		next(error);
	}
};

// DELETE a Shipment
const deleteShipment = async (req, res, next) => {
	try {
		const shipmentId = req.params.id;
		const findShipment = await Shipment.findByPk(shipmentId);
		if (!findShipment)
			return res
				.status(404)
				.json({ success: false, message: "Shipment not found" });
		await findShipment.destroy();
		res.status(200).json({ success: true, message: "Shipment deleted" });
	} catch (error) {
		console.error(error);
		next(error);
	}
};

module.exports = {
	getAllShipments,
	getOneShipment,
	postShipment,
	updateShipment,
	deleteShipment,
};
