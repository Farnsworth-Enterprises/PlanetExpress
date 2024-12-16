const express = require("express");
const shipmentRouter = express.Router();
const { Shipment } = require("../models/index");

// GET All Shipments
shipmentRouter.get("/", async (req, res, next) => {
	try {
		const shipments = await Shipment.findAll();
		res.status(200).json({ success: true, data: shipments });
	} catch (error) {
		next(error);
	}
});

// GET One Shipment
shipmentRouter.get("/:id", async (req, res, next) => {
	try {
		const oneShipment = await Shipment.findByPk(req.params.id);
		if (!oneShipment) return res.status(404).json({ success: false, message: "Shipment not found" });
		res.status(200).json({ success: true, data: oneShipment });
	} catch (error) {
		console.error(error);
		next(error);
	}
});

// POST a Shipment
shipmentRouter.post("/", async (req, res, next) => {
    try {
        const shipment = await Shipment.create(req.body);
        return res.status(201).json(shipment);
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }
});

// PUT (Update) a Shipment
shipmentRouter.put("/:id", async (req, res, next) => {
	try {
		const shipmentId = req.params.id;
		const findShipment = await Shipment.findByPk(shipmentId);
		if (!findShipment) return res.status(404).json({ success: false, message: "Shipment not found" });
		const updatedShipment = await findShipment.update(req.body);
		res.status(200).json({ success: true, data: updatedShipment });
	} catch (err) {
		console.error(err);
		next(err);
	}
});

// DELETE a Shipment
shipmentRouter.delete("/:id", async (req, res, next) => {
	try {
		const shipmentId = req.params.id;
		const findShipment = await Shipment.findByPk(shipmentId);
		if (!findShipment) return res.status(404).json({ success: false, message: "Shipment not found" });
		await findShipment.destroy();
		res.status(200).json({ success: true, message: "Shipment deleted" });
	} catch (error) {
		console.error(error);
		next(error);
	}
});

module.exports = shipmentRouter;