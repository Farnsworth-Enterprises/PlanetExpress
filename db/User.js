const {Sequelize, sequelize, DataTypes} = require('./db');

const User = sequelize.define('user', {
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  address: DataTypes.STRING,
  role: DataTypes.ENUM('customer', 'crew', 'admin')
});

module.exports = { User };
