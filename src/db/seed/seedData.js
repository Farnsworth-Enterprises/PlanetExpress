const users = [
	{
		first_name: "Hubert",
		last_name: "Farnsworth",
		email: "h.farnsworth@planex.com",
		sub: "auth0|679004172ac64d14e0a3413b", //"V@riousLengths0fWire!",
		address: "72nd Street New New York, NY, 11111, Earth",
		role: "admin",
	},
];

const shipments = [
	{
		customer_id: 1,
		tracking_number: 22_000_001,
		sender_details:
			"Hubert Farnsworth 72nd Street New New York, NY, 11111, Earth",
		receiver_details:
			"Hubert Farnsworth c/o Mars University office# 8334, Mars",
		origin: "Earth",
		destination: "Mars",
		instructions: "Live Animal! Dont feed!",
		weight: 135,
		price: 250,
		status: "pending",
	},
];

// {
//   "customer_id": 2,
//   "tracking_number": 22000002,
//   "sender_details": "Hubert Farnsworth 72nd Street New New York, NY, 11111, Earth",
//   "receiver_details": "Horrible Gellatinous Blob New New York, NY Earth",
//   "origin": "Earth",
//   "destination": "Earth",
//   "instructions": "N/A",
//   "weight": 22,
//   "price": 100,
//   "status": "in_transit"
// }

module.exports = {
	users,
	shipments,
};


// DeliveryB0y* p.fry@planex.com
// B3nderisgreat! b.rodriguez@planex.com