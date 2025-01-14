const { Router } = require("express");
const {
	getAllShipments,
	getOneShipment,
	postShipment,
	updateShipment,
	deleteShipment,
} = require("../controllers/shipmentController");
const {findUserRole} = require("../middleware/getUserRole")
const { requiresAuth } = require("express-openid-connect");

const shipmentRouter = Router();

// GET All Shipments
// Get all shipments
// Private route - admin role only
shipmentRouter.get("/", findUserRole(["admin"]), getAllShipments);

// GET One Shipment
// Get one shipment by ID
// Looking up by ID and looking up by tacking should be two different endpoints
// Public route - logged in users only
shipmentRouter.get("/:id", requiresAuth(), getOneShipment);

// POST a Shipment
// Create a new shipment
// Private route - logged in users only
shipmentRouter.post("/", requiresAuth(), postShipment);

// PUT (Update) a Shipment
// Update a shipment by ID
// Private route - admin and crew roles only
// NOT UPDATING with middleware********************
shipmentRouter.put("/:id", findUserRole(["admin", "crew"]), updateShipment);

// DELETE a Shipment
// Delete a shipment by ID
// Private route - admin role only
shipmentRouter.delete("/:id", findUserRole(["admin"]), deleteShipment);

module.exports = { shipmentRouter };
