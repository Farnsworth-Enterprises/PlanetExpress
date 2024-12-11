const {Sequelize, sequelize, DataTypes} = require('./db');

const Shipment = sequelize.define('shipment', {
  customer_id: Sequelize.NUMBER,
  tracking_number: Sequelize.NUMBER,
  sender_details: Sequelize.STRING,
  receiver_details: Sequelize.STRING,
  orign: Sequelize.STRING,
  destination: Sequelize.STRING,
  instructions: Sequelize.STRING,
  weight: Sequelize.NUMBER,
  price: Sequelize.NUMBER,
  status: DataTypes.ENUM({
    values: ['pending', 'in_transit', 'deliverd', 'failed']
    })
});

module.exports = { Shipment };