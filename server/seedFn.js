const {sequelize} = require('./db');
const {User, Shipment} = require('./');
const {users, shipments} = require('./seedData');

const seed = async () => {
  await sequelize.sync({ force: true }); // recreate db
  await User.bulkCreate(users);
  await Shipment.bulkCreate(shipments);
};

module.exports = seed;