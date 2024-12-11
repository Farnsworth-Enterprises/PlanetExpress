const users = [
    { first_name: 'Hubert', last_name: 'Farnsworth', email: 'h.farnsworth@planex.com', password: 'V@riousLengthsOfWire!', address: '72nd Street New New York, NY, 11111, Earth', role: 'admin'}
  ];

const shipments = [
    { customer_id: 1, tracking_number: 22000001, sender_details: 'Hubert Farnsworth 72nd Street New New York, NY, 11111, Earth', receiver_details: 'Hubert Farnsworth c/o Mars University office# 8334, Mars', origin: 'Earth', destination: 'Mars', instructions: 'Live Animal! Dont feed!', weight: 135, price: 250, status: 'pending'}
]
  
  module.exports = {
    users,
    shipments
  };