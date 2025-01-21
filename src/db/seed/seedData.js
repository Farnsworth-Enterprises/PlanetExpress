const users = [
	{
		first_name: "Hubert",
		last_name: "Farnsworth",
		email: "h.farnsworth@planex.com",
		sub: "auth0|679004172ac64d14e0a3413b",
		address: "72nd Street New New York, NY, 11111, Earth",
		role: "admin",
	},
	{
		first_name: "Lars",
		last_name: "Fillmore",
		email: "p.fry@planex.com",
		sub: "auth0|6790058246606c9b74d96204",
		address: "72nd Street New New York, NY, 11111, Earth",
		role: "crew",
	},
	{
		first_name: "Bender",
		last_name: "Rodriguez",
		email: "b.rodriguez@planex.com",
		sub: "auth0|679007592dc3eb4be9adb332",
		address: "72nd Street New New York, NY, 11111, Earth",
		role: "crew",
	},
	{
		first_name: "t.leela@planex.com",
		last_name: "Leela",
		email: "t.leela@planex.com",
		sub: "auth0|67900b442dc3eb4be9adb65c",
		address: "72nd Street New New York, NY, 11111, Earth",
		role: "crew",
	},
	{
		first_name: "Amy",
		last_name: "Wong",
		email: "a.wong@planex.com",
		sub: "auth0|67900b87889f85a8275e181d",
		address: "72nd Street New New York, NY, 11111, Earth",
		role: "crew",
	},
	{
		first_name: "Hermes",
		last_name: "Conrad",
		email: "h.conrad@planex.com",
		sub: "auth0|67900bbe46606c9b74d9673b",
		address: "72nd Street New New York, NY, 11111, Earth",
		role: "admin",
	},
	{
		first_name: "John",
		last_name: "Zoidberd",
		email: "j.zoidberg@planex.com",
		sub: "auth0|67900bf1a105b9ed218235f7",
		address: "72nd Street New New York, NY, 11111, Earth",
		role: "crew",
	},
	{
		first_name: "Morbo",
		last_name: null,
		email: "morbo@channel2news.com",
		sub: "auth0|67900c1d46606c9b74d9677f",
		address: "72nd Street New New York, NY, 11111, Earth",
		role: "customer",
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
	{
		customer_id: 2,
		tracking_number: 22000002,
		sender_details:
			"Hubert Farnsworth 72nd Street New New York, NY, 11111, Earth",
		receiver_details: "Horrible Gellatinous Blob New New York, NY Earth",
		origin: "Earth",
		destination: "Earth",
		instructions: "N/A",
		weight: 22,
		price: 100,
		status: "in_transit",
	},
];

module.exports = {
	users,
	shipments,
};
