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
// Get all shipments
// Private route - admin role only
shipmentRouter.get("/", getAllShipments);

// GET One Shipment
// Get one shipment by ID
// Public route - logged in users only
shipmentRouter.get("/:id", getOneShipment);

// POST a Shipment
// Create a new shipment
// Private route - logged in users only
shipmentRouter.post("/", postShipment);

// PUT (Update) a Shipment
// Update a shipment by ID
// Private route - admin and crew roles only
shipmentRouter.put("/:id", updateShipment);

// DELETE a Shipment
// Delete a shipment by ID
// Private route - admin role only
shipmentRouter.delete("/:id", deleteShipment);

module.exports = { shipmentRouter };
