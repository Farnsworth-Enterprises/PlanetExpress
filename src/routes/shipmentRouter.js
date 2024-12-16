const { Router } = require("express");
const {
	getAllShipments,
	getOneShipment,
	postShipment,
	updateShipment,
	deleteShipment,
} = require("../controllers/shipmentController");

const shipmentRouter = Router();

// GET All Shipments
shipmentRouter.get("/", getAllShipments);

// GET One Shipment
shipmentRouter.get("/:id", getOneShipment);

// POST a Shipment
shipmentRouter.post("/", postShipment);

// PUT (Update) a Shipment
shipmentRouter.put("/:id", updateShipment);

// DELETE a Shipment
shipmentRouter.delete("/:id", deleteShipment);

module.exports = {shipmentRouter};
